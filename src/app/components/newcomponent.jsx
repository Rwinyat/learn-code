export default function NewDastan() {
  return (
    <div
      data-popover
      id="popover-offset"
      role="tooltip"
      className=" z-10  inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-gray-500 border border-gray-800 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
    >
      <div className="px-3 py-2 bg-gray-400 border-b border-black-500 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          Popover offset
        </h3>
      </div>
      <div className="px-3 py-2">
        <p>And here's some amazing content. It's very engaging. Right?</p>
      </div>
      <div data-popper-arrow></div>
    </div>
  );
}
