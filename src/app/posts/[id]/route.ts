
import { NextRequest, NextResponse } from "next/server";
import { posts } from "../data";


export async function GET(
    request:NextRequest, 
    { params } : { params : { id : string }}
)
{
    const post = posts.find((p)=> p.id === parseInt(params.id))
    //console.log(params)
    return NextResponse.json(post)
}