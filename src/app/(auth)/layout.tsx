import { Brand, BrandSize } from "@/components/ui/brand";
import { AuthProvider } from "@/contexts/AuthProvider";
import Link from "next/link";



export default function AuthLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {


   return (<AuthProvider>
   <div>
      <nav className="self-start px-4 py-2 h-min w-full flex">
         <Link href={"/"}>
            <Brand size={BrandSize.medium} />
         </Link>
      </nav>
      <div className="w-screen grid grid-cols-1 items-start">
         {children}
      </div>
   </div>
   </AuthProvider>)
}