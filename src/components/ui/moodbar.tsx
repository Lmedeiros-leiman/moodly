import { AvailableMoods, MoodColors, MoodKey } from "@/lib/moods";



interface Props {
   mood?: MoodKey
   day?: string
}

export default function Moodbar({ mood = "None" }: Props) {
   if (typeof mood == undefined || mood == null || !(mood in AvailableMoods)) {
      mood = "None";
   }

   const className = MoodColors[mood]
   const text =  (AvailableMoods[mood]).split(" ")
   

   return (<div className="py-3.5 outline outline-1 outline-zinc-400 shadow-lg rounded-sm" style={className}>
      <span className="hidden md:inline">{text[0]}</span>
      <span>{text[1]}</span>
   </div>)
}