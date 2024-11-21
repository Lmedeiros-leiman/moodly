import MoodSelection from "@/components/moodselection";

export default function Home() {
  return (
    <main className="flex w-full h-screen justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl ">Welcome to Moodly</h1>
        <p> How was your humor today? </p>
      </div>
      
      <MoodSelection />

    </main>
  );
}
