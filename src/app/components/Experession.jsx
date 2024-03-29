import "../globals.css";
import {
  Code,
  Statement,
  SAssignment,
  SReturn,
  Expression,
  Operator,
  Call,
  Variable,
  NewArrowFunction,
  Literal,
} from "./Code";
import ArrowImg from "../icon/icons8-mouse-pointer-48.png";
import { Tooltip } from "./Tooltip";
import Image from "next/image";

export default function LessonExperession() {
  return (
    <div className="contentSection py-3">
      <h2 className=" text-3xl font-bold text-yellow-500">
        JavaScript Expression
      </h2>

      <h2 className=" py-3 font-bold">
        An expression is a bit of JavaScript code that produces a value.
      </h2>
      <div className=" bg-yellow-300 p-3 my-3 rounded-md">
        <h2 className=" font-medium py-1 ">
          <span className=" text-red-600">" </span>Move your mouse over the
          elements <span className=" text-red-600">" </span>
        </h2>

        <h2 className="font-medium py-1 ">
          <span className=" text-red-600">" </span>Expressions are delineated by
          a border<span className=" text-red-600 "> "</span>
        </h2>
      </div>

      {/* concatenation */}

      <div className="flex flex-row relative">
        <div className="statement w-48 justify-center m-5  items-center flex relative">
          <Image
            src={ArrowImg}
            width={20}
            className=" newArrow absolute left-8"
          />
          <span className="px-2 outline outline-1 rounded-md outline-gray-500 text-red-600">
            8
          </span>
          <div className="exampleEval">evaluated to 8</div>
        </div>

        <div className="statement w-48 text-center m-5 ">
          <div className="p-2">
            <Tooltip
              className="p-5 left-32 absolute"
              text={"evaluated to " + eval(2)}
            >
              <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                2
              </span>
            </Tooltip>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="statement w-48 text-center m-5 relative ">
            <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
              <Tooltip
                className="p-5 left-36 absolute"
                text={"evaluated to " + eval(2 + 3)}
              >
                <Tooltip
                  className="p-5 left-32 absolute "
                  text={"evaluated to " + eval(2)}
                >
                  <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                    2
                  </span>
                </Tooltip>
                +
                <Tooltip
                  className="p-5 left-32 absolute"
                  text={"evaluated to " + eval(3)}
                >
                  <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                    3
                  </span>
                </Tooltip>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>

      {/* type conversion: */}

      <div className="flex flex-row ">
        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2 ">
            <Tooltip
              className="p-5 left-36 absolute"
              text={"evaluates to  " + "'47'"}
            >
              <Tooltip className="p-5 left-36 absolute" text={"Empty string"}>
                <span className="hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  " "
                </span>
              </Tooltip>
              <span>&nbsp;+&nbsp;</span>
              <Tooltip
                className="p-5 left-36 absolute"
                text={"evaluates to 47"}
              >
                <span className="hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  47
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>
        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip
              className="p-5 left-36 absolute"
              text={"evaluated to " + "'23'"}
            >
              <Tooltip
                className="p-5 left-32 absolute "
                text={"evaluated to " + eval(2)}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  2
                </span>
              </Tooltip>
              +
              <Tooltip
                className="p-5 left-32 absolute"
                text={"evaluated to " + "'3'"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  "3"
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>
        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip
              className="p-5 left-36 absolute"
              text={"evaluated to " + "'23'"}
            >
              <Tooltip
                className="p-5 left-32 absolute "
                text={"evaluated to " + "'2'"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  "2"
                </span>
              </Tooltip>
              +
              <Tooltip
                className="p-5 left-32 absolute"
                text={"evaluated to " + "'3'"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  "3"
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="flex flex-row ">
        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2 ">
            <Tooltip
              className="p-5 left-36 absolute"
              text={"evaluates to " + "'xy'"}
            >
              <Tooltip text={"evaluates to " + "'x'"}>
                <span className="hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  "x"
                </span>
              </Tooltip>
              <span>&nbsp;+&nbsp;</span>
              <Tooltip text={"evaluates to " + "'y'"}>
                <span className="hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  "y"
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>
        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip
              className="p-5 left-36 absolute"
              text={"evaluates to Number"}
            >
              <span>+</span>
              <Tooltip text={"evaluates to 32"}>
                <span className="hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  "32"
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>
        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip className="p-5 left-36 absolute" text={"evaluated to -52"}>
              <span>+</span>
              <Tooltip text={"evaluates to" + "'-52'"}>
                <span className="hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  "-52"
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="statement md:w-1/3 m-5 text-center ">
          <Tooltip text={"evaluated to " + "Hello"}>
            <Expression literal={"Hello"} />
          </Tooltip>
        </div>
        <div className="statement md:w-1/3 p-2 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip
              className="p-5 left-36 absolute"
              text={"evaluated to " + "'Hello3'"}
            >
              <Tooltip
                className="p-5 left-32 absolute "
                text={"evaluated to " + "Hello"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  Hello
                </span>
              </Tooltip>
              +
              <Tooltip
                className="p-5 left-32 absolute"
                text={"evaluated to " + eval(3)}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  3
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>
        <div className="statement md:w-1/3 text-center m-5  flex justify-center items-center ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 ">
            <Tooltip className="p-5 left-36 absolute" text={"Hello John"}>
              <Tooltip
                className="p-5 left-32 absolute "
                text={"evaluated to " + "Hello"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  Hello
                </span>
              </Tooltip>
              +
              <Tooltip
                className="p-5 left-32 absolute"
                text={"evaluated to " + "Space"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  " "
                </span>
              </Tooltip>
              +
              <Tooltip
                className="p-5 left-32 absolute"
                text={"evaluated to " + "'John'"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  John
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="statement md:w-1/3 p-2 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip
              className="p-5 left-36 absolute"
              text={"evaluated to " + eval(+"hello")}
            >
              +
              <Tooltip
                className="p-5 left-32 absolute "
                text={"evaluated to " + '"Hello"'}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  "Hello"
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>
        <div className="statement md:w-1/3 p-2 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip
              className="p-5 left-36 absolute"
              text={"evaluates to " + eval("6" * 2)}
            >
              <Tooltip
                className="p-5 left-32 absolute "
                text={"evaluates to " + '"6"'}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  "6"
                </span>
              </Tooltip>
              <span>*</span>
              <Tooltip text={"evaluates to 2"}>
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  2
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>
        <div className="statement md:w-1/3 p-2 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip
              className="p-5 left-36 absolute"
              text={"evaluates to " + eval("5" - 2)}
            >
              <Tooltip
                className="p-5 left-32 absolute "
                text={"evaluates to " + '"5"'}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  "5"
                </span>
              </Tooltip>
              <span>-</span>
              <Tooltip text={"evaluates to 2"}>
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  2
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* logical */}

      <div className="flex flex-col md:flex-row">
        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip
              className="p-5 left-36 absolute"
              text={"evaluated to " + "true"}
            >
              <span className="text-red-600">ture</span>
            </Tooltip>
          </div>
        </div>

        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip
              className="p-5 left-36 absolute"
              text={"evaluates to " + "false"}
            >
              <Tooltip text={"evaluates to " + "1"}>
                <span className="text-red-600 hover:outline outline-1 rounded-md outline-gray-500 ">
                  1
                </span>
              </Tooltip>
              <span>==</span>
              <Tooltip text={"evaluates to 5"}>
                <span className="text-red-600 hover:outline outline-1 rounded-md outline-gray-500 ">
                  5
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>
        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip className="p-5 left-36 absolute" text={"true or false"}>
              <span className="text-red-600">a</span>
              <span>===</span>
              <Tooltip
                className="p-5 left-36 absolute"
                text={"evaluated to " + "20"}
              >
                <span className="hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  20
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip
              className="p-5 left-36 absolute"
              text={"evaluates to " + "true"}
            >
              <Tooltip
                className="p-5 left-32 absolute "
                text={"evaluates to " + "2"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  2
                </span>
                <span>{"=<"}</span>
              </Tooltip>

              <Tooltip
                className="p-5 left-32 absolute"
                text={"evaluates to " + "77"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  77
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>
        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip
              className="p-5 left-36 absolute"
              text={"evaluated to " + "true"}
            >
              <Tooltip
                className="p-5 left-32 absolute "
                text={"evaluated to " + "5"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  5
                </span>
                <span>{">"}</span>
              </Tooltip>

              <Tooltip
                className="p-5 left-32 absolute"
                text={"evaluated to " + "2"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  2
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>

        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip
              className="p-5 left-36 absolute"
              text={"evaluated to " + "true"}
            >
              <Tooltip
                className="p-5 left-32 absolute "
                text={"evaluated to " + "5"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  "5"
                </span>
                <span>{">"}</span>
              </Tooltip>

              <Tooltip
                className="p-5 left-32 absolute"
                text={"evaluated to " + "2"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  "2"
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip
              className="p-5 left-36 absolute"
              text={"evaluates to " + "false"}
            >
              <Tooltip
                className="p-5 left-32 absolute"
                text={"evaluates to " + "'4'"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  "4"
                </span>
                <span>{">"}</span>
              </Tooltip>

              <Tooltip
                className="p-5 left-32 absolute"
                text={"evaluates to " + "5"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  5
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>
        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip
              className="p-5 left-36 absolute"
              text={"evaluates to " + "true"}
            >
              <Tooltip
                className="p-5 left-32 absolute "
                text={"evaluates to " + "6"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  6
                </span>
                <span>{"=="}</span>
              </Tooltip>

              <Tooltip
                className="p-5 left-32 absolute"
                text={"evaluates to " + "'6'"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  "6"
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>

        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip
              className="p-5 left-36 absolute"
              text={"evaluates to " + "false"}
            >
              <Tooltip
                className="p-5 left-32 absolute "
                text={"evaluates to " + "5"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  5
                </span>
                <span>{"==="}</span>
              </Tooltip>

              <Tooltip
                className="p-5 left-32 absolute"
                text={"evaluates to " + "'5'"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  "5"
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip
              className="p-5 left-36 absolute"
              text={"evaluates to " + "8"}
            >
              <Tooltip
                className="p-5 left-32 absolute"
                text={"evaluates to " + "5"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  5
                </span>
                <span>{"&&"}</span>
              </Tooltip>

              <Tooltip
                className="p-5 left-32 absolute"
                text={"evaluates to " + "8"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  8
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>
        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip
              className="p-5 left-36 absolute"
              text={"evaluates to " + eval(false && 6)}
            >
              <Tooltip
                className="p-5 left-32 absolute "
                text={"evaluates to " + "false"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  false
                </span>
                <span>{"&&"}</span>
              </Tooltip>

              <Tooltip
                className="p-5 left-32 absolute"
                text={"evaluates to " + "6"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  6
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>
        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip
              className="p-5 left-36 absolute"
              text={"evaluates to " + "0"}
            >
              <Tooltip
                className="p-5 left-32 absolute "
                text={"evaluates to " + "0"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  0
                </span>
                <span>{"&&"}</span>
              </Tooltip>

              <Tooltip
                className="p-5 left-32 absolute"
                text={"evaluates to " + "8"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  8
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip
              className="p-5 left-36 absolute"
              text={"evaluates to " + "NaN"}
            >
              <Tooltip
                className="p-5 left-32 absolute"
                text={"evaluates to " + "NaN"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  NaN
                </span>
                <span>{"&&"}</span>
              </Tooltip>

              <Tooltip
                className="p-5 left-32 absolute"
                text={"evaluates to " + "8"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  8
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>
        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip
              className="p-5 left-36 absolute"
              text={"evaluates to " + "6"}
            >
              <Tooltip
                className="p-5 left-32 absolute "
                text={"evaluates to " + "0"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  0
                </span>
                <span>{"||"}</span>
              </Tooltip>

              <Tooltip
                className="p-5 left-32 absolute"
                text={"evaluates to " + "6"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  6
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>
        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip
              className="p-5 left-36 absolute"
              text={"evaluates to " + "8"}
            >
              <Tooltip
                className="p-5 left-32 absolute "
                text={"evaluates to " + "8"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  8
                </span>
                <span>{"||"}</span>
              </Tooltip>

              <Tooltip
                className="p-5 left-32 absolute"
                text={"evaluates to " + "4"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  4
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* ternary */}

      <div className="flex flex-col md:flex-row">
        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip
              className="p-5 left-36 absolute"
              text={"evaluates to " + "8"}
            >
              <Tooltip
                className="p-5 left-32 absolute"
                text={"evaluates to " + "ture"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  ture
                </span>
                <span>{"?"}</span>
              </Tooltip>

              <Tooltip
                className="p-5 left-32 absolute"
                text={"evaluates to " + "1"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  1
                </span>
              </Tooltip>
              <span>:</span>
              <Tooltip
                className="p-5 left-32 absolute"
                text={"evaluates to " + "9"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  9
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>
        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip
              className="p-5 left-36 absolute"
              text={"evaluates to " + eval(false && 6)}
            >
              <Tooltip
                className="p-5 left-32 absolute "
                text={"evaluates to " + "false"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  false
                </span>
                <span>{"?"}</span>
              </Tooltip>

              <Tooltip
                className="p-5 left-32 absolute"
                text={"evaluates to " + "1"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  1
                </span>
              </Tooltip>
              <span>:</span>
              <Tooltip
                className="p-5 left-32 absolute"
                text={"evaluates to " + "5"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  5
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>
        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip
              className="p-5 left-36 absolute"
              text={"evaluates to " + "0"}
            >
              <Tooltip
                className="p-5 left-32 absolute "
                text={"evaluates to " + "0"}
              >
                <div className="hover:outline outline-1 rounded-md outline-gray-500">
                  <Tooltip text={"evaluates to " + eval(5 > 4)}>
                    <span>{"("}</span>
                    <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                      5
                    </span>
                    <span>{">"}</span>
                    <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                      4
                    </span>
                    <span>{")"}</span>
                  </Tooltip>
                </div>
                <span>{"?"}</span>
              </Tooltip>

              <Tooltip
                className="p-5 left-32 absolute"
                text={"evaluates to " + "8"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  8
                </span>
              </Tooltip>

              <span>{":"}</span>
              <Tooltip
                className="p-5 left-32 absolute"
                text={"evaluates to " + "8"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  4
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="statement w-7/12 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip>
              <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                4
              </span>
              <span>{">"}</span>
              <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                5
              </span>
              <span>{"?"}</span>
              <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                6
              </span>
              <span>==</span>
              <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                1
              </span>
              <span>{"?"}</span>
              <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                1
              </span>
              <span>:</span>
              <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                2
              </span>
              <span>:</span>
              <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                3
              </span>
            </Tooltip>
          </div>
        </div>
        <div className="statement w-7/12  text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip>
              <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                4
              </span>
              <span>{">"}</span>
              <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                5
              </span>
              <span>{"?"}</span>
              <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                0
              </span>
              <span>:</span>
              <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                6
              </span>
              <span>==</span>
              <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                6
              </span>

              <span>{"?"}</span>
              <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                2
              </span>
              <span>:</span>
              <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                3
              </span>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* typeof */}

      <div className="flex flex-col md:flex-row">
        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip text={"Type : string"}>
              <span>Typeof:</span>
              <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                "Hello"
              </span>
            </Tooltip>
          </div>
        </div>
        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip text={"Type: number"}>
              <span>Typeof:</span>
              <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                -45
              </span>
            </Tooltip>
          </div>
        </div>
        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip text={"Type: string"}>
              <span>Typeof:</span>
              <Tooltip text={"Type: number"}>
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  5
                </span>
              </Tooltip>
              <span>+</span>
              <Tooltip text={"Type : string"}>
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  "x"
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip text={"Type: number"}>
              <span>Typeof:</span>
              <Tooltip text={"Type: number"}>
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  +"x"
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>
        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip text={"Type: number"}>
              <span>Typeof:</span>
              <Tooltip text={"Type: number"}>
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  -"x"
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>
        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip text={"Type: undefined"}>
              <span>Typeof:</span>
              <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                true
              </span>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* parentheses */}
      <div className="flex flex-col md:flex-row">
        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2 ">
            <Tooltip
              className="p-5 left-36 absolute"
              text={"evaluated to " + eval(5 - 2 + 3)}
            >
              <div className="hover:outline outline-1 rounded-md outline-gray-500 ">
                <Tooltip text={"evaluated to " + eval(3)}>
                  <span>(</span>
                  <Tooltip
                    className="p-5 left-32 absolute "
                    text={"evaluated to " + eval(5)}
                  >
                    <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                      5
                    </span>
                  </Tooltip>
                  -
                  <Tooltip
                    className="p-5 left-32 absolute"
                    text={"evaluated to " + eval(2)}
                  >
                    <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                      2
                    </span>
                  </Tooltip>
                  <span>)</span>
                </Tooltip>
              </div>
              +
              <Tooltip
                className="p-5 left-25 absolute"
                text={"evaluated to " + eval(3)}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  3
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>
        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2 ">
            <Tooltip
              className="p-5 left-36 absolute"
              text={"evaluated to " + eval(7 * 2 - 3)}
            >
              <div className="hover:outline outline-1 rounded-md outline-gray-500 ">
                <Tooltip text={"evaluated to " + eval(14)}>
                  <span>(</span>
                  <Tooltip
                    className="p-5 left-32 absolute "
                    text={"evaluated to " + eval(7)}
                  >
                    <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                      7
                    </span>
                  </Tooltip>
                  *
                  <Tooltip
                    className="p-5 left-32 absolute"
                    text={"evaluated to " + eval(2)}
                  >
                    <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                      2
                    </span>
                  </Tooltip>
                  <span>)</span>
                </Tooltip>
              </div>
              -
              <Tooltip
                className="p-5 left-25 absolute"
                text={"evaluated to " + eval(3)}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  3
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>
        {/* +("-45.5" + 1) */}
        <div className="statement w-48 text-center m-5 relative ">
          <Tooltip>
            <span className="py-2">+</span>
            <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2 text-red-600">
              <span className="text-black">{"("}</span>
              <span className="hover:outline outline-1 rounded-md outline-gray-500 p-2 text-red-600">
                "-45.5"
              </span>
              <span className="text-black">+</span>
              <span className="hover:outline outline-1 rounded-md p-2 outline-gray-500 text-red-600">
                1
              </span>
              <span className="text-black">{")"}</span>
            </div>
          </Tooltip>
        </div>
      </div>
      {/* inja */}
      {/* 4 > 5 ? 1 : 6 == 1 ? 1 : 2     ( 4 < 5 ? 0 : 6 == 6) ? 2 : 3 */}

      <div className="flex flex-col md:flex-row">
        <div className="statement w-7/12 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip>
              <span>{"("}</span>
              <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                4
              </span>
              <span>{">"}</span>
              <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                5
              </span>
              <span>{")"}</span>
              <span>{"?"}</span>
              <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                1
              </span>
              <span>:</span>
              <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                6
              </span>
              <span>==</span>
              <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                1
              </span>
              <span>?</span>
              <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                1
              </span>
              <span>:</span>
              <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                3
              </span>
            </Tooltip>
          </div>
        </div>
        <div className="statement w-7/12  text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip>
              <span>{"("}</span>
              <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                4
              </span>
              <span>{"<"}</span>
              <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                5
              </span>
              <span>{"?"}</span>
              <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                0
              </span>
              <span>:</span>
              <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                6
              </span>
              <span>==</span>
              <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                6
              </span>
              <span>{")"}</span>
              <span>{"?"}</span>
              <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                2
              </span>
              <span>:</span>
              <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                3
              </span>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* object and array */}

      <div className="flex flex-col md:flex-row">
        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip className="p-5 left-36 absolute" text={"Empty Object"}>
              <Tooltip
                className="p-5 left-32 absolute"
                text={"evaluated to " + "Object"}
              >
                <span className="px-2 hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  {"{ }"}
                </span>
              </Tooltip>
            </Tooltip>
          </div>
        </div>

        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip className="p-5 left-36 absolute" text={"Empty Array"}>
              <span className="text-red-600">{"[ ]"}</span>
            </Tooltip>
          </div>
        </div>

        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip className="p-5 left-36 absolute" text={"Array"}>
              <span className="text-red-600 ">{"["}</span>{" "}
              <Tooltip className="p-5 left-36 absolute" text={"evaluated to 1"}>
                <span className="hover:outline outline-1 rounded-md outline-gray-500 ">
                  1,
                </span>
                &nbsp;
              </Tooltip>
              <Tooltip className="p-5 left-36 absolute" text={"evaluated to 5"}>
                <span className="hover:outline outline-1 rounded-md outline-gray-500">
                  5,
                </span>
                &nbsp;
              </Tooltip>
              <Tooltip
                className="p-5 left-36 absolute"
                text={"evaluated to John"}
              >
                <span className="hover:outline outline-1 rounded-md outline-gray-500">
                  John
                </span>
              </Tooltip>
              <span className="text-red-600">{"]"}</span>{" "}
            </Tooltip>
          </div>
        </div>
      </div>
      {/* assignment */}
      {/* a = 1   b = []  myArr = [1, 2, "x"]  */}
      <div className="flex flex-col md:flex-row">
        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500  p-2">
            <Tooltip className="left-36 absolute" text={"Empty Array"}>
              <span className="text-green-800">a&nbsp;</span>
              <span>=</span>
              <span className="text-red-600">1</span>
            </Tooltip>
          </div>
        </div>

        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip className="p-5 left-36 absolute" text={"Empty Array"}>
              <span className="text-green-800">b&nbsp;</span>
              <span>=</span>
              <span className="text-red-600">{"[ ]"}</span>
            </Tooltip>
          </div>
        </div>
        <div className="statement w-48 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip className="p-5 left-36 absolute" text={"Array"}>
              <span className="text-green-800">b</span>
              <span>=</span>
              <span className="text-red-600 ">{"["}</span>{" "}
              <Tooltip className="p-5 left-36 absolute" text={"evaluated to 4"}>
                <span className="hover:outline outline-1 rounded-md outline-gray-500 ">
                  4,
                </span>
                &nbsp;
              </Tooltip>
              <Tooltip className="p-5 left-36 absolute" text={"evaluated to 5"}>
                <span className="hover:outline outline-1 rounded-md outline-gray-500">
                  5,
                </span>
                &nbsp;
              </Tooltip>
              <Tooltip className="p-5 left-36 absolute" text={"evaluated to X"}>
                <span className="hover:outline outline-1 rounded-md outline-gray-500">
                  X
                </span>
              </Tooltip>
              <span className="text-red-600">{"]"}</span>{" "}
            </Tooltip>
          </div>
        </div>
      </div>

      {/* myObj = { x: 1, y: 2, "complex name": 5 } */}
      
      
      <div className="flex flex-col md:flex-row">
        <div className="statement w-7/12 text-center m-5 relative ">
          <div className="hover:outline outline-1 rounded-md outline-gray-500 p-2">
            <Tooltip className="p-5 left-36 absolute" text={"Array"}>
              <span className="text-green-800">myObj</span>
              <span>=</span>
              <span className="text-red-600 ">{"{"}</span>{" "}
              <Tooltip className="p-5 left-36 absolute" text={"evaluated to 4"}>
                <span className="text-blue-800">x:&nbsp;</span>
                <span className="hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  4
                </span>
                &nbsp;,
              </Tooltip>
              <Tooltip className="p-5 left-36 absolute" text={"evaluated to 4"}>
                <span className="text-blue-800">y:&nbsp;</span>
                <span className="hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
                  5
                </span>
                &nbsp;,
              </Tooltip>
              <Tooltip className="p-5 left-36 absolute" text={"evaluated to X"}>
                "
                <span className="hover:outline outline-1 rounded-md outline-gray-500 text-blue-800">
                complex name
                </span>
                "
                <span>:&nbsp;</span>
                <span className="hover:outline outline-1 rounded-md outline-gray-500 text-red-600">4</span>
              
              </Tooltip>

              <span className="text-red-600">{"}"}</span>{" "}
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex w-90 text-center items-center m-5  conditionExpression   ">
          <Tooltip>
            <p>
              <span>
                {" "}
                let <snan className="text-green-800">isEven </snan>= (
                <span className="text-red-600">num</span> %{" "}
                <span className="text-red-600">2</span> ==={" "}
                <span className="text-red-600">0</span>) ?
                <span className="text-red-600"> true</span> :
                <span className="text-red-600"> false</span> ;
              </span>
            </p>
          </Tooltip>
        </div>
      </div>

      <div className="mt-4 flex items-center">
        <div className="statement w-52  m-5 items-center">
          <p>
            function <span className="text-green-800">square</span>(
            <span className="text-red-600">num</span>) {"{"}
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-blue-800">return</span>{" "}
            <span className="text-red-600">num </span>*
            <span className="text-red-600"> num</span> ;
          </p>
          <p> {"}"}; </p>
        </div>

        <div className="statement w-96 m-5 items-center">
          <p>
            const<span className="text-green-800"> over18</span> ={" "}
            <span className="text-red-600">arr</span> {"=>"} {"{"}
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-blue-800"> return </span>
            <span className="text-red-600">arr</span>.
            <span className="text-blue-800">filter</span>(
            <span className="text-red-600">person</span> {"=>"}{" "}
            <span className="text-red-600">person</span>.
            <span className="text-red-600">age</span>
            {">"} <span className="text-red-600">18</span>);
          </p>
          <p>{"}"};</p>
        </div>
      </div>
      <div className="statement m-5 flex w-48 text-center items-center justify-center ">
        <Tooltip text={"evaluated to " + eval(Math.sqrt(16))}>
          <p>
            <span className="text-green-800">result</span>={" "}
            <span className="hover:outline outline-1 rounded-md outline-gray-500 text-red-600">
              Math.sqrt(16)
            </span>
          </p>
        </Tooltip>
      </div>
    </div>
  );
}
