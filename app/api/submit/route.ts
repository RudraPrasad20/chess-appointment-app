import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {

        const body = await req.json()
        const { firstname, id, lastname, email, text } = body

        const data = await db.form.create({
            data: {
                id,
                firstname,
                lastname,
                email,
                text
            }
        })
        return NextResponse.json(data)
        
    } catch (error) {
        console.log(error)
        return NextResponse.json("internal error", {status: 401})
    }
}

export async function GET() {
    const data = await db.form.findMany({});
    return Response.json(data)
}