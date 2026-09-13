import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    name: "Aakash Mane",
    email: "aakashmane@gmail.com",
  });
}

export function POST() {
  return NextResponse.json({
    name: "Aayush",
    email: "aayushmane@gmail.com",
  });
}

export function PUT() {
  return NextResponse.json({
    name: "Aayush",
    email: "aayushmane5058@gmail.com",
  });
}
