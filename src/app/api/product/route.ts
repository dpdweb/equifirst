import { NextResponse } from 'next/server';

const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://www.equifirst.ae',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
  'Access-Control-Allow-Credentials': 'true',
};

function withCors(response: NextResponse) {
  Object.entries(corsHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
  return response;
}

export async function OPTIONS() {
  return withCors(new NextResponse(null, { status: 204 }));
}

export async function GET() {
  return withCors(
    NextResponse.json(
      {
        status: 'ok',
        service: 'equifirst-frontend',
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    )
  );
}

export async function POST() {
  return withCors(
    NextResponse.json(
      {
        status: 'ok',
        message: 'Health check completed',
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    )
  );
}
