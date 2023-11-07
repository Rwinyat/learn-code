import "../globals.css";
import Navbar from "../components/navbar";

export const metadata = {
  title: "ContactUs",
  description: "Generated by create next app",
};

export default function LessonOne() {
  return (
    <div className="w=full bg-gray-300">
      <Navbar />

      <div className="max-w-[1920px] h-screen max-auto grid sm:grid-cols-1 md:grid-cols-2 items-center">
        <div className="rightDiv mx-auto">
          <div className="max-w-lg p-6 sm:h-[350px] xl:h-[400px] flex-row items-center  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="md:mt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              JavaScript Statements
            </h5>
            <h4 className=" md:mt-12 dark:text-white">
              A computer program is a list of "instructions" to be "executed" by
              a computer.
            </h4>
            <h4 className="md:mt-5 text-yellow-500">Lesson 1</h4>
            <div className="btnSection flex align-middle justify-between mt-9">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  pre Lesson
              </span>
            </button>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Next Lesson
              </span>
            </button>
            </div>
          </div>
        </div>
        <div className="rightDiv flex flex-col justify-center max-w-xl p-6 sm:h-[300px] xl:h-[400px] bg-slate-500"></div>
      </div>
    </div>
  );
}
