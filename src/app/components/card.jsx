
export default function CardLesson({lessons, lessonIndex, activeLession, nextLesson, prevLesson}) {
  return (
    <>
      <div className="lessonCounter w-[450px] h-4 bg-slate-400 border-2 rounded-2xl border-gray-500 flex">
        {lessons.map((_, index) => (
          <div key={index} className={`bg-sky-600 w-[150px] ${ index <= lessonIndex ? "bg-yellow-500 rounded-2xl" : ""}`}
            style={{
              transition: "background-color 0.3s ease-in-out",
            }}
          ></div>
        ))}
      </div>
      <div className="max-w-md p-6 flex-row items-center my-6 bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="title md:mt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {activeLession.title}
        </h5>
        <h5 className="description md:mt-12 dark:text-white h-[60px]">
          {activeLession.description}
        </h5>
        <h4 className="lessonNumber md:mt-5 text-yellow-500">
          Lesson {lessonIndex+1}
        </h4>
        <div className="btnSection flex align-middle justify-between mt-9">
          <button
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            onClick={prevLesson}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Pre Lesson
            </span>
          </button>
          <button
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            onClick={nextLesson}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Next Lesson
            </span>
          </button>
        </div>
      </div>
    </>
  );
}