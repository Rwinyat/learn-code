import Image from "next/image"
import HeroImg from "../../img/hero.jpg"
import '../../globals.css';

export default function SecHero(){
    return (
    <div className="py-4 px-4 bg-gray-800">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <div className="flex flex-col justify-center mainH">
                <h1 className="text-3xl	font-extrabold font-mono">Visual coding tutorials</h1>
                <h1><span className="text-amber-500 text-3xl font-mono	font-extrabold">simplify learning code</span></h1>
                <div className="mt-2">
                    <button type="button" className="bg-blue-500 w-40 m-2 font-mono hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Get Start
                    </button>
                </div>
            </div>
            <Image className="w-[500px] mx-auto my-4" src={HeroImg}/>
    
        </div>  
  </div>
  )
}