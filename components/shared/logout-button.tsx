import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { signOut } from "@/auth";

const LogoutButton = () => {
 const logoutAction = async () => {
  "use server";
  await signOut();
 }
 return (
  <form action={logoutAction} >
   <Button className='bg-black text-white rounded-full p-3 text-xs md:text-sm'>
    <LogOut className='cursor-pointer' />
   </Button>
  </form>
 );
};
export default LogoutButton;