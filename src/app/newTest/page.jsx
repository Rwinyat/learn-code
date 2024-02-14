// import '../globals.css';
// import Expression from '../components/Code'
// import ArrowImg from '../icon/arrow.png'
// import Image from 'next/image';
// import {Tooltip} from "@nextui-org/react";

//  export default function EssonExperession(){
//       return(
//         <div className="contentSection p-5">

//             <div className='flex '>
//             <Tooltip content="I am a tooltip">
//                <div className="statement w-36 text-center"><Expression literal={"hello"} />  </div> </Tooltip>
//                 <div className='flex-col justify-center secendExpr'>
//                   <Image  className='w-12 ' src={ArrowImg} />

//                   <p>produces</p>
//                </div>
//                <div className="statement h-11 w-36 text-center"><Expression literal={"hello"} />  </div>
//              </div>

//             <h2 className="pb-3 text-3xl">JavaScript Expression</h2>

//              <p className='text-lg '>An expression is a bit of JavaScript code that produces a value.</p>
//              <h2 className='text-2x1 pt-5 text-yellow-500'>"Move your mouse over the elements"</h2>
//              <div className='flex '>
//                <div className="statement w-36 text-center "><Expression className="p-5" literal={2} />  </div>
//                <div className='flex-col justify-center secendExpr'>
//                   <Image  className='w-12' src={ArrowImg} />

//                   <p>produces</p>
//                </div>
//                <div className="statement newdastan w-36 text-center"> <Expression literal={2} />  </div>
//              </div>
//              <div className='flex '>
//                <div className="statement w-36 text-center"><Expression literal={"hello"} />  </div>
//                 <div className='flex-col justify-center secendExpr'>
//                   <Image  className='w-12 ' src={ArrowImg} />

//                   <p>produces</p>
//                </div>
//                <div className="statement h-11 w-36 text-center"><Expression literal={"hello"} />  </div>
//              </div>
//              <div className='flex '>
//                <div className="statement  w-36   text-center"><Expression operator='*' operands={[{literal: 4},{literal: 5}]} />  </div>
//                 <div className='flex-col justify-center secendExpr'>
//                   <Image  className='w-12 ' src={ArrowImg} />

//                   <p>produces</p>
//                 </div>
//                  <div className="statement text-center secendExpr   w-36 "><Expression literal={20} />
//                </div>
//              </div>

//              <div className='flex'>
//               <div className='statement w-36 text-center'>
//                   <Expression title="salam" operator='*' operands={[{ literal: 4 }, { literal: 5 }]} />
//               </div>
//               <div class="tooltip">
//                 Hover over me
//                  <span class="tooltiptext">Tooltip text</span>
//              </div>
//              <div className='flex-col justify-center secendExpr'>
//                 <Image className='w-12' src={ArrowImg} />
//                 <p>produces</p>
//               </div>
//               <div className='statement text-center w-36'>
//                  <Expression literal={20} />
//               </div>
//              </div>

//             <div className=" bg-slate-400 p-5 mb-4 mt-4">
//                <p>document.getElementById("demo").innerHTML = "Hello Dolly.";</p>
//             </div>

//             <p className="py-1">The statements are executed, one by one, in the same order as they are written.</p>
//             <h3 className="py-3">Semicolons ;</h3>
//             <p className="py-1">Semicolons separate JavaScript statements.</p>

//             <p className="py-1"> Add a semicolon at the end of each executable statement:</p>
//             <div className="w-[100%] bg-slate-400 p-5 mb-4 mt-4">

//                <p>let a, b, c;  // Declare 3 variables</p>
//                <p>a = 5;        // Assign the value 5 to a</p>
//                <p>b = 6;        // Assign the value 6 to b</p>
//                <p>c = a + b;    // Assign the sum of a and b to c</p>
//             </div>
//             <p className="py-1">Most JavaScript programs contain many JavaScript statements.</p>
//             <p className="py-1">The statements are executed, one by one, in the same order as they are written.</p>
//             <h3 className="py-3">Semicolons ;</h3>
//             <p className="py-1">Semicolons separate JavaScript statements.</p>

//             <p className="py-1"> Add a semicolon at the end of each executable statement:</p>
//             <div className="w-[100%] bg-slate-400 p-5 mb-4 mt-4">

//                <p>let a, b, c;  // Declare 3 variables</p>
//                <p>a = 5;        // Assign the value 5 to a</p>
//                <p>b = 6;        // Assign the value 6 to b</p>
//                <p>c = a + b;    // Assign the sum of a and b to c</p>
//             </div>
//           </div>
// )
//         }

// import "../globals.css";
// import lessens from "../Lessons/content";
// import { useState } from "react";

// export default function Stepper() {
//   const [currentId, newCurrentId] = useState();
//   // localStorage.getItem(currentItem)
//   // let currentItem = Boolean;
//   //  {currentItem? localStorage.getItem(currentItem):/click/}
//   return (
//     <div className="flex flex-col">
//       {lessens.map((item, index) => (
//         <div className="flex items-center mb-4" key={index}>
//           <div className="flex flex-col items-center">
//             <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
//               {currentItem ? (
//                 <a href="" onClick={()=>{
//                   currentId
//                 }}
//                 >
//                   <svg
//                     className="w-4 h-4 text-white"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </a>
//               ) : (
//                 <div className="w-2.5 h-2.5 bg-white rounded-full" />
//               )}
//             </div>

//             {index < lessens.length - 1 && (
//               <div className="w-0.5 h-8 bg-gray-300" />
//             )}
//           </div>
//           <div className="ml-4 text-sm font-medium text-gray-700">
//             {item.title}
//             <br />
//             <span className="text-xs font-normal text-gray-500">
//               {item.desc}
//             </span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// import "../globals.css";
// import lessens from "../Lessons/content";
// import { useState } from "react";

// export default function Stepper() {
//   const [currentId, newCurrentId] = useState();

 
//   const currentItem = localStorage.getItem("currentItem");


//   const handleClick = (index) => {
//     newCurrentId(index);
//     localStorage.setItem("currentItem", index);
//   };

//   return (
//     <div className="flex flex-col">
//       {lessens.map((item, index) => (
//         <div className="flex items-center mb-4" key={index}>
//           <div className="flex flex-col items-center">
//             <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
//               {currentItem === index ? (
//                 <a href="" onClick={() => handleClick(index)}>
//                   <svg
//                     className="w-4 h-4 text-white"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </a>
//               ) : (
//                 <div className="w-2.5 h-2.5 bg-white rounded-full" />
//               )}
//             </div>

//             {index < lessens.length - 1 && (
//               <div className="w-0.5 h-8 bg-gray-300" />
//             )}
//           </div>
//           <div className="ml-4 text-sm font-medium text-gray-700">
//             {item.title}
//             <br />
//             <span className="text-xs font-normal text-gray-500">
//               {item.desc}
//             </span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
// 
"use client"
import React, { useState, useEffect } from "react";
import "../globals.css";
import lessons from "../Lessons/content";

export default function Stepper() {
  const [currentItem, setCurrentItem] = useState("0");

  useEffect(() => {
    const storedItem = localStorage.getItem("currentItem");
    if (storedItem) {
      setCurrentItem(storedItem);
    }
  }, []);

  const handleClick = (index) => {
    setCurrentItem(index.toString());
    localStorage.setItem("currentItem", index.toString());
  };

  return (
    <div className="flex flex-col">
      {lessons.map((item, index) => (
        <div className="flex items-center mb-4" key={index}>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              {currentItem === index.toString() ? (
                <a href="">
                  <svg
                    className="w-4 h-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              ) : (
                <div className="w-2.5 h-2.5 bg-white rounded-full">
                  <a href="" onClick={() => handleClick(index)}></a>
                </div>
              )}
            </div>

            {index < lessons.length - 1 && (
              <div className="w-0.5 h-8 bg-gray-300" />
            )}
          </div>
          <div className="ml-4 text-sm font-medium text-gray-700">
            {item.title}
            <br />
            <span className="text-xs font-normal text-gray-500">
              {item.desc}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}