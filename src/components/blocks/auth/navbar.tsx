'use client'
import { useRouter } from "next/navigation";

import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDownIcon } from "lucide-react";
import { Brand, BrandSize } from "@/components/ui/brand";
import { LogOut, UseAuth } from "@/contexts/AuthProvider";


export default function Navbar() {
   const router = useRouter();
   const { Session } = UseAuth();

   return(<header className="flex w-full py-2 shadow-md bg-red-100">
         
      <Brand size={BrandSize.small} />
      
      <DropdownMenu>
         <DropdownMenuTrigger className="inline-flex justify-self-end">
            <ChevronDownIcon /> 
            <span>
               {Session?.user.email}
            </span>
         </DropdownMenuTrigger>
         <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600"
               onClick={() => { LogOut().then(() => router.push("/")) }}>Sign out</DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>

   </header>);
}