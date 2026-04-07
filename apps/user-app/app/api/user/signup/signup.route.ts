import { prisma } from "@repo/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password, number } = body;

    // Validation
    if (!name || !password || !number) {
      return NextResponse.json(
        { message: "Required fields missing" },
        { status: 400 }
      );
    }

    // Check existing user
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          ...(email ? [{ email }] : []),
          { number }
        ]
      }
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        number,
        password: hashedPassword
      }
    });

    return NextResponse.json(
      {
        message: "User successfully created",
        userId: user.id
      },
      { status: 201 }
    );

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Error registering user" },
      { status: 500 }
    );
  }
}