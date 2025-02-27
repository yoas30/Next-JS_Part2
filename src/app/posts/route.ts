import { NextRequest, NextResponse } from "next/server";
import { posts } from "./data";


export async function GET(request:NextRequest){
    //console.log(request.nextUrl.searchParams.get("query"))
    //const limit = searchParams.get("limit")

    const searchParams = request.nextUrl.searchParams
    const userId = searchParams.get("userId")

    if (userId){
        const postFilter = posts.filter(post => post.userId === parseInt(userId))
        return NextResponse.json(postFilter)
    }
    // Kalau nggak ada data jalankan "return" yang di bawah
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