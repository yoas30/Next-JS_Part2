
import { NextRequest, NextResponse } from "next/server";
import { posts } from "../data";


export async function GET(request:NextRequest, 
    { params } : { params : { id : string }})
{ 
    const post = posts.find((p)=> p.id === parseInt(params.id))
    //console.log(params)
    return NextResponse.json(post)
}

export async function PATCH ( request:NextRequest, 
    { params } : { params : { id : string }}) 
{
    const {text} = await request.json()
    const index = posts.findIndex(post => post.id === parseInt(params.id))
    
    posts[index].text = text
    return NextResponse.json(posts[index])
}

export async function PUT ( request:NextRequest, 
    { params } : { params : { id : string }}) 
{
    const data = await request.json()
    const index = posts.findIndex(post => post.id === parseInt(params.id))
    
    posts[index] = {
        id : parseInt(params.id),
        ...data
    }
    return NextResponse.json(posts[index])
}