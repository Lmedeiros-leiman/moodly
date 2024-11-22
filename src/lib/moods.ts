
export const AvailableMoods = {
   None : "not selected yet",
   Energetic : "Energetic 🤩",
   Bored     : "Bored 😒",
   Relaxed   : "Relaxed 😌",
   Angry     : "Angry 😡",
   Stressed  : "Stressed 😖",
} as const;
export type MoodKey = keyof typeof AvailableMoods



export const MoodColors = {
   None : {background: "#9ca3af"},
   Energetic : {background: "linear-gradient(to right, #fb923c, #facc15, #ef4444)"},
   Bored : {background: "linear-gradient(to right, #9ca3af, #1e3a8a)"},
   Relaxed : {background: "linear-gradient(to right, #4ade80, #065f46)"},
   Angry : {background:"linear-gradient(to right, #dc2626, #f97316)", color:"white"},
   Stressed : {background:"linear-gradient(to right, #9333ea, #5b21b6)", color:"white"},
   
}