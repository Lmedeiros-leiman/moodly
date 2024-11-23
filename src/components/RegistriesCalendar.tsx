import { AvailableMoods, MoodKey } from "@/lib/moods";
import Moodbar from "./ui/moodbar";

interface Props {
   demo?: boolean
}


export default function RegistriesCalendar(props: Props) {
   const { demo = false } = props;

   const date = new Date();
   const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();


   if (demo) {
      return (
         <div className="grid grid-cols-7 gap-x-2 gap-y-1   ">
            {
               [...Array(daysInMonth).keys()].map((day) => {
                  const randomMood = (Object.keys(AvailableMoods))[Math.floor(Math.random() * 5) + 1]

                  return (
                     <div key={day}>
                        <Moodbar mood={randomMood as MoodKey} />
                     </div>);
               })
            }
         </div>
      )
   }

   return (<>



   </>)
}
