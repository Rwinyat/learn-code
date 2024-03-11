import { Tooltip } from "@/app/components/Tooltip";


export default function DataTypesNumber() {
  return (
    <div className="mt-5 justify-center flex-row text-center">
      <h1 className="my-3  text-4xl text-blue-600 font-bold">Number</h1>
      <div className="flex md:flex-col-2 justify-center">
        <div className="w-64 h-28 m-6 rounded-md bg-gray-300 boxLesson items-center flex justify-center">
 
          <Tooltip
            className="p-5 left-32 absolute"
            text={"evaluated to " + eval(2)}
          >
            <div className="px-2   text-center flex flex-row items-center">
              <span className=" text-red-500 text-2xl font-medium ">23</span>
           
            </div>
          </Tooltip>
        </div>
        <div className=" mt-28  w-64 h-28  rounded-md bg-gray-300 boxLesson items-center flex justify-center">
          <div className="">
            <Tooltip
              className="p-5 left-32 absolute"
              text={"evaluated to " + eval(2)}
            >
              <div className="px-2   text-center flex flex-row items-center">
                <span className=" text-red-500  text-2xl font-medium ">
                  6.1
                </span>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" mt-6 mr-36 w-64 h-28 rounded-md bg-gray-300 boxLesson items-center flex justify-center">
          <div className="">
            <Tooltip
              className="p-5 left-32 absolute"
              text={"evaluated to " + eval(2)}
            >
              <div className="px-2   text-center flex flex-row items-center">
                <span className="text-red-500 text-2xl font-medium">+"34"</span>
             
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}
