
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
   None : " bg-gray-400",
   Energetic : " bg-gradient-to-r from-orange-400 via-yellow-300 to-red-500",
   Bored : " bg-gradient-to-r from-gray-400 to-blue-800",
   Relaxed : " bg-gradient-to-r from-green-400 to-green-800",
   Angry : " text-white bg-gradient-to-r from-red-600 to-orange-500",
   Stressed : "text-white bg-gradient-to-r from-purple-600 to-purple-800",
   
}