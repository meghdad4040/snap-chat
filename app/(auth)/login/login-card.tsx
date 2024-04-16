import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { signIn } from "@/auth";

export default function LoginCard() {

 const authAction = async () => {
  "use server"
  await signIn("github")
 }

 return (
  <>
   <form className='space-y-4' action={authAction}>
    <LoginButton />
   </form>
   <div className='mt-4 text-center text-[13px]'>
    <span>New To SnapNext? </span>
    <Link className='text-blue-500 hover:underline text-[13px] mr-1' href='/signup'>
     Sign Up
    </Link>
   </div>
  </>
 );
}

function LoginButton() {
 return (
  <Button className='w-full flex gap-2'>
   <Image src={"/github.svg"} width={20} height={20} alt='Github logo' /> Log in with Github
  </Button>
 );
}