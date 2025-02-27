import { post } from "./data";


export async function GET(){
    return Response.json(post)
}