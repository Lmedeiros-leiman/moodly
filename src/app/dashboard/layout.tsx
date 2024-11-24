import Navbar from "@/components/blocks/auth/navbar";
import { AuthProvider } from "@/contexts/AuthProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Moodly · Dashboard",
   description: "A web app to track your daily mood!",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {



   return (<AuthProvider>
      <Navbar />
      <main>
         {children}
      </main>
   </AuthProvider>
   )

}
