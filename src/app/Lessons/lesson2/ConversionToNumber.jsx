import { Tooltip } from "@/app/components/Tooltip";
import Image from "next/image";
import ArrowIcon from "../../icon/Custom-Icon-Design-Flat-Cute-Arrows-Button-Arrow-Right.512.png";

export default function ConversionToNumber() {
  return (
    <div className="my-5  justify-center flex-row text-center">
      <h1 className="my-3  text-4xl text-blue-600 font-bold">
        Conversion to Number
      </h1>
      <div className="flex md:flex-col-2  justify-center ">
        <div className="w-96 h-28 m-5 rounded-md bg-gray-300 boxLesson items-center flex justify-center">
          <Tooltip
            className="p-5 left-32 absolute"
            text={"evaluated to " + eval(2)}
          >
            <div className="px-2   text-center flex flex-row items-center">
              <span className=" text-red-500 text-2xl font-medium ">5</span>
              &nbsp;&nbsp;
              <span className="text-xl font-bold">-</span>&nbsp;&nbsp;
              <span className=" text-red-500 text-2xl font-medium ">"3"</span>
              &nbsp;&nbsp; &nbsp;
              <Image src={ArrowIcon} className="w-8" />
              &nbsp; &nbsp;
              <span className=" text-cyan-600 text-2xl font-medium ">
                Type:
              </span>{" "}
              &nbsp;
              <span className=" text-blue-600 text-2xl font-medium">
                Number
              </span>
            </div>
          </Tooltip>
        </div>

        <div className=" mt-28  w-96 h-28 m-5 rounded-md bg-gray-300 boxLesson items-center flex justify-center">
          <div className="">
            <Tooltip
              className="p-5 left-32 absolute"
              text={"evaluated to " + eval(2)}
            >
              <div className="px-2   text-center flex flex-row items-center">
                <span className=" text-red-500 text-2xl font-medium ">"6"</span>
                &nbsp;&nbsp;
                <span className="text-xl font-bold">*</span>&nbsp;&nbsp;
                <span className=" text-red-500 text-2xl font-medium ">2</span>
                &nbsp;&nbsp; &nbsp;
                <Image src={ArrowIcon} className="w-8" />
                &nbsp; &nbsp;
                <span className=" text-cyan-600 text-2xl font-medium ">
                  Type:
                </span>{" "}
                &nbsp;
                <span className=" text-blue-600 text-2xl font-medium">
                  Number
                </span>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="flex md:flex-col-2 justify-center">
        <div className="w-96 h-28 m-6 rounded-md bg-gray-300 boxLesson items-center flex justify-center">
          <Tooltip
            className="p-5 left-32 absolute"
            text={"evaluated to " + eval(2)}
          >
            <div className="px-2   text-center flex flex-row items-center">
              <span className="text-xl font-bold">+</span>&nbsp;&nbsp;
              <span className=" text-red-500 text-2xl font-medium ">"Hello"</span>
              &nbsp;&nbsp; &nbsp;
              <Image src={ArrowIcon} className="w-8" />
              &nbsp; &nbsp;
              <span className=" text-cyan-600 text-2xl font-medium ">
                Type:
              </span>
              &nbsp;
              <span className=" text-blue-600 text-2xl font-medium">
                Number
              </span>
            </div>
          </Tooltip>
        </div>

        <div className=" mt-28  w-96 h-28  rounded-md bg-gray-300 boxLesson items-center flex justify-center">
          <div className="">
            <Tooltip
              className="p-5 left-32 absolute"
              text={"evaluated to " + eval(2)}
            >
              <div className="px-2   text-center flex flex-row items-center">
                <span className=" text-red-500 text-2xl font-medium ">"6"</span>
                &nbsp;&nbsp;
                <span className="text-xl font-bold">*</span>&nbsp;&nbsp;
                <span className=" text-red-500 text-2xl font-medium ">2</span>
                &nbsp;&nbsp; &nbsp;
                <Image src={ArrowIcon} className="w-8" />
                &nbsp; &nbsp;
                <span className=" text-cyan-600 text-2xl font-medium ">
                  Type:
                </span>
                &nbsp;
                <span className=" text-blue-600 text-2xl font-medium">
                  Number
                </span>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}
