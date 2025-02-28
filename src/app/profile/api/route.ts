import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request:NextRequest){
    //const headerList = new Headers(request.headers)
    const headersList = headers()
    console.log((await headersList).get("Authorization"))

     return new Response ("<h1>Profile Data</h1>",{
        headers : {
            "Content-Type" : "text/html"
        }
     })
}