import { Tooltip } from "@/app/components/Tooltip";
export default function DataTypes() {
  return (
    <div className="mt-5 justify-center flex-row text-center">
       <h1 className="my-3  text-4xl text-orange-600 font-bold">"String"</h1>
      <div className="flex md:flex-col-2 justify-center">
        <div className="w-64 h-28 m-6 rounded-md bg-gray-300 boxLesson items-center flex justify-center">
          {" "}
          <div className="">
            <Tooltip
              className="p-5 left-32 absolute"
              text={"evaluated to " + eval(2)}
            >
              <div className="px-2   text-center">
                <span className=" text-green-600 text-lg font-medium">   
                  let
                </span>&nbsp;&nbsp;
                <span className=" text-purple-700 text-lg font-medium">fristName</span>&nbsp;&nbsp;
                <span className="text-lg">=</span>&nbsp;&nbsp;
                <span className="text-lg text-orange-600 font-medium hover:outline  outline-3 rounded-md outline-gray-500">"John"</span>;
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
                <span className=" text-green-600 text-lg font-medium">   
                  let
                </span>&nbsp;&nbsp;
                <span className=" text-purple-700 text-lg font-medium">lastName</span>&nbsp;&nbsp;
                <span className="text-lg">=</span>&nbsp;&nbsp;
                <span className="text-lg text-orange-600 font-medium hover:outline  outline-3 rounded-md outline-gray-500">"Smith"</span>;
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" mt-6 mr-36 w-64 h-28 m-6 rounded-md bg-gray-300 boxLesson items-center flex justify-center">
        <div className="">
            <Tooltip
              className="p-5 left-32 absolute"
              text={"evaluated to " + eval(2)}
            >
              <div className="px-2   text-center">
                <span className=" text-green-600 text-lg font-medium">   
                  let
                </span>&nbsp;&nbsp;
                <span className=" text-purple-700 text-lg font-medium">hairColor</span>&nbsp;&nbsp;
                <span className="text-lg">=</span>&nbsp;&nbsp;
                <span className="text-lg text-orange-600 font-medium hover:outline  outline-3 rounded-md outline-gray-500">"Brown"</span>;
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}
