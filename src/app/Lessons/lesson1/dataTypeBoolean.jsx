import { Tooltip } from "@/app/components/Tooltip";
import Image from "next/image";
import ArrowIcon from "../../icon/Custom-Icon-Design-Flat-Cute-Arrows-Button-Arrow-Right.512.png";
export default function DataTypeBoolean() {
  return (
    <div className="mt-10 justify-center flex-row text-center">
      <h1 className="my-3  text-4xl text-green-600 font-bold">Boolean</h1>
      <div className="flex md:flex-col-2 justify-center">
        <div className=" w-64 h-28 m-6 rounded-md bg-gray-300 boxLesson items-center flex justify-center">
          
          <div className="">
            <Tooltip
              className="p-5 left-32 absolute"
              text={"evaluated to " + eval(2)}
            >
              <div className="px-2   text-center flex flex-row items-center">
                <span className=" text-green-600 text-2xl font-medium p-3">
                  ture
                </span>
               
              </div>
            </Tooltip>
          </div>
        </div>
        <div className=" mt-28  w-64 h-28  rounded-md bg-gray-300 boxLesson items-center flex justify-center">
          <div className="">
            <Tooltip
              className="p-5 left-32 absolute"
              text={"evaluated to " + eval(2)}
            >
              <div className="px-2   text-center flex flex-row items-center">
                <span className="text-green-600 text-2xl font-medium p-3">
                  false
                </span>
               
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}
