"use client";
import "../globals.css";
import Navbar from "../components/Home/navbar";
import { useState } from "react";
import Statments from "../components/statment";
import LessonExperession from "../components/Experession";
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
  const activeLession = lessons[lessonIndex];
  const ActiveLessonComponent = activeLession.component;
  return (
    <div className="bg-gray-300">
      <Navbar />

      <div className="xl:flex sm:flex-row">
        <div className="leftDiv min-h-[500px] md:fixed sm:mx-auto W-full md:w-1/2 md:left-12 md:top-[140px] ">
          <CardLesson {...{ lessons, lessonIndex, activeLession, nextLesson, prevLesson }}/>
        </div>

        <div className="rightDiv W-full md:translate-x-[75%] md:w-3/2 mt-5 md:mt-24 rounded-2xl  p-6  items-center mb-5 bg-slate-500">
          <ActiveLessonComponent />
        </div>
      </div>
    </div>
  );
}
const lessons = [
  {
    title: "Expression",
    description:
      "An expression is a combination of values, variables, and operators, which computes to a value",
    component: LessonExperession,
  },
  {
    title: "Variable",
    description: "Variables are Containers for Storing Data.",
    component: Variables,
  },
  {
    title: "Statement",
    description:
      "A computer program is a list of 'instructions' to be 'executed' by a computer.",
    component: Statments,
  },
];
