import RegistriesCalendar from "@/components/RegistriesCalendar";
import { dynaPuff } from "./layout";
import CallToAction from "@/components/CallToAction";




export default function Home() {
  return (
    <div className="flex flex-wrap justify-center text-center min-h-screen gap-16 p-8 font-[family-name:var(--font-geist-sans)] ">
      
      <main className="flex flex-col gap-8 mt-4 row-start-2 items-center sm:items-start">
        <div className="text-center">
          <span className={" text-6xl " + dynaPuff.className} >
            <span className="gradient-text-main">Moodly</span>! 
            aways kepping your <span className="gradient-text-main">emotions</span> in check.
          </span>
        </div>
        
        <div className="text-center w-full">
          <p className="text-2xl text-center mb-3.5">
            Keep track of your daily mood <strong>every day of every year!</strong>
          </p>

          <CallToAction />
        </div>

      <div className="w-full outline outline-1  outline-indigo-600 rounded-md px-2 py-3">
        <RegistriesCalendar demo />
      </div>
      
      </main>
      <footer className="fixed bottom-0 w-full gradient-background-main h-1"></footer>

    </div>
  );
}
