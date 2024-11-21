


export default function AuthLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {

   return (<div className="w-screen h-screen flex flex-wrap items-center content-center">
      {children}
   </div>)
}