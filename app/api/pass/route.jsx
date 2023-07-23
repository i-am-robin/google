// import { Server } from "socket.io";
// import { NextResponse } from "next/server";

// let pass = "";
// let towFector = "";

// export const GET = async (req, res) => {
//   console.log("Get request");
//   console.log(pass, towFector);
//   return NextResponse.json({ pass, towFector });
// };
// export const POST = async (req, res) => {
//   const { password, towfector } = await req.json();
//   pass = password;
//   towFector = towfector;
//   return NextResponse.json({ pass, towFector });
// };

import { NextRequest, NextResponse } from "next/server";

let pass, towfector;

export async function POST(req) {
  const body = await req.json();
  //   console.log(body);
  if (body.pass != undefined) {
    pass = body.pass;
  }
  if (body.towfector != undefined) {
    towfector = body.towfector;
  }

  console.log(pass, towfector);

  return new Response(JSON.stringify({ pass, towfector }));
}

export async function GET(req) {
  return new Response(JSON.stringify({ pass, towfector }));
}
