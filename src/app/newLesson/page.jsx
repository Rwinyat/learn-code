"use client";
import { useState } from "react";
import "../globals.css";

import Navbar from "../components/Home/navbar";

export default function NewLesson() {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="flex justify-center items-center  shadow-md p-4">
          <button
            type="button"
            class="bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center rotate-180 mr-2"
            onClick={handlePrevious}
            disabled={currentStep === 0}
>
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
            <span class="sr-only">Icon description</span>
          </button>

          <div className="lessonCounter  h-4 bg-slate-400 border-2 rounded-2xl border-gray-500 flex">
            {steps.map((step, index) => (
              <div  key={index} className={`bg-sky-600 w-[150px] ${ index <= currentStep ? "bg-yellow-500 rounded-2xl" : ""}`}
                style={{
                  transition: "background-color 0.3s ease-in-out",
                }}
              ></div>
            ))}
          </div>

          <button
            type="button"
            class=" bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 ml-2 "
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
>
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
            <span class="sr-only">Icon description</span>
          </button>
        </div>

        <div className="mt-11">
          <div className="flex md:flex-col-2 justify-center">
            <div className="w-60 h-24 m-6 rounded-md bg-gray-300 boxLesson"></div>
            <div className="w-60 h-24 mt-28 rounded-md bg-gray-300 boxLesson"></div>
          </div>
          <div className="flex justify-center">
            <div className="w-60 h-24 mt-6 mr-36 rounded-md bg-gray-300 boxLesson"></div>
          </div>
        </div>

        <div className=" grid justify-center m-5">
          <h1 className="mt-8 text-2xl font-bold">Expression</h1>
          <p className="mt-4">
            An expression is a combination of values, variables, and operators,
            which computes to a value
          </p>
          <p className="mt-4">
            An expression is a bit of JavaScript code that produces a value.
          </p>
          <p className="mt-4">Lets get start</p>
          <button
            type="button"
            class=" mt-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-28"
          >
            Continue
          </button>

        </div>
      </div>
    </div>
  );
}
