import Link from "next/link";
import { Button } from "./ui/button";


export default function CallToAction() {
   

   return(<>
      <div className="grid grid-cols-2 gap-4 w-fit mx-auto">
         <Link href={"/sign-up"}>
            <Button className="rounded-full w-32 shadow shadow-indigo-500 bg-indigo-600 hover:bg-indigo-800 delay-100 text-lg py-6 px-8"  > 
               Sign Up 
            </Button>
         </Link>
         <Link href={"/sign-in"}>
            <Button className="rounded-full shadow shadow-indigo-500 w-32 bg-slate-600 hover:bg-slate-800 delay-100 text-lg py-6 px-8">
               Log in 
            </Button>
         </Link>
      </div>
   
   </>)
}