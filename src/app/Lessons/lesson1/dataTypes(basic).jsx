import { Tooltip } from "@/app/components/Tooltip";


export default function DataTypes() {
  return (
    <div className="mt-5 justify-center flex-row text-center">
      <h1 className="my-3  text-4xl text-orange-600 font-bold">"String"</h1>
      <div className="flex md:flex-col-2 justify-center">
        <div className="w-64 h-28 m-6 rounded-md bg-gray-300 boxLesson items-center flex justify-center">
          
          <Tooltip
            className="p-5 left-32 absolute"
            text={"evaluated to " + eval(2)}
          >
            <div className="px-2 text-center flex flex-row items-center">
              <span className=" text-orange-600 text-2xl font-medium ">
                "John"
              </span>
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
                <span className=" text-orange-600  text-2xl font-medium ">
                  "Smith"
                </span>
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
              <div className="px-2 text-center flex flex-row items-center">
                <span className="text-orange-600 text-2xl font-medium">
                  "25"
                </span>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}
// export default function DataTypes() {
//   return (
//     <div className="mt-5 justify-center flex-row text-center">
//       <h1 className="my-3  text-4xl text-orange-600 font-bold">"String"</h1>
//       <div className="flex md:flex-col-2 justify-center">
//         <div className="w-96 h-28 m-6 rounded-md bg-gray-300 boxLesson items-center flex justify-center">
//           {" "}

//             <Tooltip
//               className="p-5 left-32 absolute"
//               text={"evaluated to " + eval(2)}
//             >
//               <div className="px-2   text-center flex flex-row items-center">
//                 <span className=" text-red-500 text-2xl font-medium ">
//                   "John"
//                 </span>
//                 &nbsp;&nbsp;
//                 <Image src={ArrowIcon} className="w-10" />
//                 &nbsp; &nbsp;
//                 <span className=" text-cyan-600 text-2xl font-medium ">
//                   Type:
//                 </span> &nbsp;
//                 <span className=" text-orange-600 text-2xl font-medium">
//                     Stirng
//                   </span>
//               </div>
//             </Tooltip>

//         </div>
//         <div className=" mt-28  w-96 h-28  rounded-md bg-gray-300 boxLesson items-center flex justify-center">
//           <div className="">
//             <Tooltip
//               className="p-5 left-32 absolute"
//               text={"evaluated to " + eval(2)}
//             >
//               <div className="px-2   text-center flex flex-row items-center">

//                 <span className=" text-red-500  text-2xl font-medium ">
//                   "Smith"
//                 </span>
//                 &nbsp;&nbsp;
//                 <Image src={ArrowIcon} className="w-10" />
//                 &nbsp; &nbsp;
//                 <span className=" text-cyan-600 text-2xl font-medium ">
//                   Type:
//                 </span> &nbsp;
//                 <span className=" text-orange-600 text-2xl font-medium">
//                     Stirng
//                   </span>

//               </div>
//             </Tooltip>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-center">
//         <div className=" mt-6 mr-36 w-96 h-28 m-6 rounded-md bg-gray-300 boxLesson items-center flex justify-center">
//           <div className="">
//             <Tooltip
//               className="p-5 left-32 absolute"
//               text={"evaluated to " + eval(2)}
//             >
//               <div className="px-2   text-center flex flex-row items-center">

//                 <span className="text-red-500 text-2xl font-medium">
//                 "25"
//                 </span>
//                 &nbsp;&nbsp;
//                 <Image src={ArrowIcon} className="w-10" />

//                 &nbsp; &nbsp;
//                 <span className=" text-cyan-600 text-2xl font-medium ">
//                   Type:
//                 </span> &nbsp;
//                 <span className=" text-orange-600 text-2xl font-medium">
//                     Stirng
//                   </span>
//               </div>
//             </Tooltip>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
