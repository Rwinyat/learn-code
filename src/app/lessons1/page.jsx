"use client";
import "../globals.css";
import Navbar from "../components/Home/navbar";
import { useState } from "react";
import Statments from "../components/statment";
import Experession from "../components/Experession";
import Variables from "../components/varieble";
import CardLesson from "../components/card";

export default function LessonOne() {
  const [lessonIndex, setLessonIndex] = useState(0);

  const nextLesson = () => {
    if (lessonIndex < lessons.length - 1) {
      setLessonIndex(lessonIndex + 1);
    }
  };

  const prevLesson = () => {
    if (lessonIndex > 0) {
      setLessonIndex(lessonIndex - 1);
    }
  };

  const activeLession = lessons[lessonIndex]
  const ActiveLessonComponent = activeLession.component
  return (
    <div className="bg-gray-300">
      <Navbar />

      <div className="xl:flex sm:flex-row">
        <div className="leftDiv min-h-[500px] md:fixed sm:mx-auto W-full md:w-1/2 md:left-12 md:top-[140px] ">
          <CardLesson {...({lessons, lessonIndex, activeLession, nextLesson, prevLesson})} />
        </div>
      </div>
      <div className="rightDiv W-full md:translate-x-[90%] md:w-1/2 lg:mt-20 rounded-2xl mx-6 p-6  items-center mb-5 bg-slate-500">
        <ActiveLessonComponent />
      </div>
    </div>
  );
}

const lessons = [
  {
    title: "Statement",
    description:
      "A computer program is a list of 'instructions' to be 'executed' by a computer.",
    component: Statments
  },
  {
    title: "Variable",
    description: "Variables are Containers for Storing Data.",
    component: Variables
  },
  {
    title: "Expression",
    description:
      "An expression is a combination of values, variables, and operators, which computes to a value",
    component: Experession
  },
];


// const Dars1 = () => <div></div>;
// const Dars2 = () => <div></div>;
// const Dars3 = () => <div></div>;
// const Dars4 = () => <div></div>;
// const Dars5 = () => <div></div>;

// const lessions = [Dars1, Dars2, Dars3, Dars4, Dars5];

// const darsPage = () => {
//   const [learned, setLearned] = useState(1);

//   return (
//     <>
//       <button onClick={() => setLearned((l) => s + 1)}>Next Lession</button>
//       {lessions.splice(0, learned).map((fn) => (
//         <fn />
//       ))}
//     </>
//   );
// };

// const allLessions = () => (
//   <>
//     <Dars1 />
//     <Dars2 />
//     <Dars3 />
//     <Dars4 />
//     <Dars5 />
//   </>
// );

// const products = [{ name: 1 }, { name: 2 }, { name: 3 }];

// const allProducts = () => (
//   <>
//     <Product product={products[0]} />
//     <Product product={products[1]} />
//     <Product product={products[2]} />
//   </>
// );

// function Product({ product }) {}
