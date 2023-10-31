import Image from "next/image"
import HeroImg from "../img/hero.jpg"
import '../globals.css';

export default function SecHero(){
    return (
    <div className="w-full py-4 px-4 bg-gray-800">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <div className="flex flex-col justify-center">
                <h1>Visual coding tutorials</h1>
                <h1><span className="text-amber-500">simplify learning code</span></h1>

            </div>

   
            <Image className="w-[500px] mx-auto my-4" src={HeroImg}/>
    
        </div>  
  </div>
  )
}