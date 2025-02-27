import { NextRequest, NextResponse } from "next/server";
import { posts } from "./data";


export async function GET(){
    return NextResponse.json(posts)
}

export async function POST(request:NextRequest){
    const post = await request.json()
    const newPost = {
        id : posts.length + 1,
        ...post
    }

    posts.push(newPost)
    return Response.json(newPost,{
        status : 201
    })
}