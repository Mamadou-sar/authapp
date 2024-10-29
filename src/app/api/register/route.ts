import {NextResponse} from "next/server";

export  async function POST (req: Request)  {
  try {
      const {name, email, password} = await req.json();
      console.log({name, email, password})
      return NextResponse.json({message: 'User created'}, {status: 201});
  }catch (error) {
      return NextResponse.json({message: 'Something went wrong'}, {status: 500});
  }
}