'use client'
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowBigRightDash } from "lucide-react";
import { UseAuth } from "@/contexts/AuthProvider";


export default function CallToAction() {

   const user = UseAuth();

   if (user.Session) {
      return (
         <div>
            <Link href={"/dashboard"}>
               <Button className=" w-64 py-6 px-8 text-lg rounded-full gradient-background-main">
                  <span>Move to Dashboard</span> <ArrowBigRightDash size={48} />
               </Button>
            </Link>
         </div>
      )
   }

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