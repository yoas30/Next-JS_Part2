import { headers, cookies } from "next/headers";

export async function GET(){
    const headersList = headers()
    console.log((await headersList).get("Authorization"))

    ;(await cookies()).set('theme','dark')

    console.log((await cookies()).get('token'))
    console.log((await cookies()).get('theme'))

     return new Response ("<h1>Profile Data</h1>",{
        headers : {
            "Content-Type"  : "text/html",
            "Set-Cookie"    : "token=test123"
        }
     })
}