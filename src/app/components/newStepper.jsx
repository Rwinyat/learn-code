

export default function StepperN() {
  return(
  <div className="flex flex-col">
    {/* Step 1 - Completed */}
    <div className="flex items-center mb-4">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
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
        </div>
        {/* Conditionally render the line if it's not the last item */}
        <div className="w-0.5 h-8 bg-gray-300"></div>
      </div>
      <div className="ml-4 text-sm font-medium text-gray-700">
        Create account
        <br />
        <span className="text-xs font-normal text-gray-500">
          Vitae sed mi luctus laoreet.
        </span>
      </div>
    </div>

    {/* Step 2 - Completed */}
    <div className="flex items-center mb-4">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
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
        </div>
        <div className="w-0.5 h-8 bg-gray-300"></div>
      </div>
      <div className="ml-4 text-sm font-medium text-gray-700">
        Profile information
        <br />
        <span className="text-xs font-normal text-gray-500">
          Cursus semper viverra facilisis et et some more.
        </span>
      </div>
    </div>

    {/* Step 3 - Current */}
    <div className="flex items-center mb-4">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
          {/* Current step indicator - can be an arrow or different icon */}
          <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
        </div>
        <div className="w-0.5 h-8 bg-gray-300"></div>
      </div>
      <div className="ml-4 text-sm font-medium text-blue-600">
        Business information
        <br />
        <span className="text-xs font-normal text-gray-500">
          Penatibus eu quis ante.
        </span>
      </div>
    </div>

    {/* Step 4 - Pending */}
    <div className="flex items-center mb-4">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
          {/* Pending step indicator */}
        </div>
        <div className="w-0.5 h-8 bg-gray-300"></div>
      </div>
      <div className="ml-4 text-sm font-medium text-gray-500">
        Theme
        <br />
        <span className="text-xs font-normal">Faucibus nec enim leo et.</span>
      </div>
    </div>

    {/* Step 5 - Pending */}
    <div className="flex items-center">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
          {/* Pending step indicator */}
        </div>
        {/* No line after the last item */}
      </div>
      <div className="ml-4 text-sm font-medium text-gray-500">
        Preview
        <br />
        <span className="text-xs font-normal">
          Iusto et officia maiores porro ad non quas.
        </span>
      </div>
    </div>
  </div>
  );
}
