import { dynaPuff } from "@/app/layout"
import React from "react"


export enum BrandSize {
   small = "text-xl",
   medium = "text-4xl",
   large = "text-6xl",

}

interface BrandProps {
   size?: BrandSize
}



export const Brand: React.FC<BrandProps> = ({size = BrandSize.small}) => {
   return (
      <h1 className={` gradient-text-main ${size} + ${dynaPuff.className}`}>
         Moodly
      </h1>
   )
}
