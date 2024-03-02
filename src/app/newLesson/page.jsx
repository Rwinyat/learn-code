"use client";
import { useState } from "react";
import "../globals.css";
import content from "../Lessons/content";
import Navbar from "../components/Home/navbar";

export default function NewLesson() {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  const allCurrentLessonSteps = content[currentContentIndex].steps || [];

  const handleNext = () => {
    if (currentStep < allCurrentLessonSteps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepComponent = (stepObject) => {
    const Component = stepObject.component;
    return <Component />;
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="flex justify-center items-center bg-white  shadow-md p-4 sticky top-[80px] z-10">
          {/* Previous button */}
          <button
            type="button"
            className="bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center rotate-180 mr-2"
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
           
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
            <span className="sr-only">Icon description</span>
          </button>

          {/* Lesson counter */}
          <div className=" h-4 bg-slate-400 border-2 rounded-2xl border-gray-500 flex z-1">
            {allCurrentLessonSteps.map((step, index) => (
              <div
                key={index}
                className={`bg-sky-600 w-[150px] ${
                  index <= currentStep ? "bg-yellow-500 rounded-2xl" : ""
                }`}
                style={{
                  transition: "background-color 0.3s ease-in-out",
                }}
              ></div>
            ))}
          </div>

          {/* Next button */}
          <button
            type="button"
            className="bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 ml-2"
            onClick={handleNext}
            disabled={currentStep === allCurrentLessonSteps.length}
          >
          
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
            <span className="sr-only">Icon description</span>
          </button>
        </div>

        {/* Render step components */}
        {allCurrentLessonSteps.slice(0, currentStep+1).map((stepObject) => (
            <div>{renderStepComponent(stepObject)}</div>
          ))}

        {/* Render content */}
        {content[currentContentIndex] && (
          <div className="grid justify-center m-5">
            <h1 className="mt-8 text-2xl font-bold">
              {content[currentContentIndex].title}
            </h1>
            <p className="mt-4">{content[currentContentIndex].desc}</p>
            <p className="mt-4">
              An expression is a bit of JavaScript code that produces a value.
            </p>
            <p className="mt-4">Let's get started</p>
            <button
              type="button"
              className="mt-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-28"
              onClick={() => setCurrentContentIndex(currentContentIndex + 1)}
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
}