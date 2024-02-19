import { Tooltip } from "@/app/components/Tooltip";
export default function DataTypeBoolean() {
  return (
    <div className="mt-5 justify-center flex-row text-center">
      <h1 className="my-3  text-4xl text-green-600 font-bold">Boolean</h1>
      <div className="flex md:flex-col-2 justify-center">
        <div className="w-64 h-28 m-6 rounded-md bg-gray-300 boxLesson items-center flex justify-center">
          {" "}
          <div className="">
            <Tooltip
              className="p-5 left-32 absolute"
              text={"evaluated to " + eval(2)}
            >
              <div className="px-2   text-center">

                <span className=" text-purple-700 text-lg font-medium">
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
              <div className="px-2   text-center">

                <span className=" text-purple-700 text-lg font-medium">
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
