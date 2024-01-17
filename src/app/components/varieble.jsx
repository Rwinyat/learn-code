import "../globals.css";

export default function Variables() {
  return (
    <div className="contentSection p-5 font-mono">
      <h2 className="pb-3 font-bold text-3xl">JavaScript variebels</h2>
      <p className="py-1">Variables are Containers for Storing Data </p>
      <p className="py-1">JavaScript Variables can be declared in 4 ways:</p>
      <div className=" bg-slate-400 p-5 mb-4 mt-4">
        <ul>
          <li>Automatically</li>
          <li>
            Using <span className="text-yellow-400 bg-black p-1"> var</span>
          </li>
          <li>
            Using <span className="bg-yellow-400">let</span>
          </li>
          <li>
            Using <span className="bg-yellow-400"> const</span>
          </li>
        </ul>
      </div>
      <p className="py-1">
        In this first example, x, y, and z are undeclared variables.
      </p>
      <p className="py-1">They are automatically declared when first used:</p>
      <div className="w-[100%] bg-slate-400 p-5 mb-4 mt-4">
        <p>x = 5;</p>
        <p>y = 6;</p>
        <p>z = x + y;</p>
      
      </div>

      <p className="py-1">

      </p>

      <p className="py-1">
        Most JavaScript programs contain many JavaScript statements.
      </p>
      <p className="py-1">
        The statements are executed, one by one, in the same order as they are
        written.
      </p>
      <h3 className="py-3">Semicolons ;</h3>
      <p className="py-1">Semicolons separate JavaScript statements.</p>

      <p className="py-1">
        {" "}
        Add a semicolon at the end of each executable statement:
      </p>
      <div className=" bg-slate-400 p-5 mb-4 mt-4">
        <p>let a, b, c; // Declare 3 variables</p>
        <p>a = 5; // Assign the value 5 to a</p>
        <p>b = 6; // Assign the value 6 to b</p>
        <p>c = a + b; // Assign the sum of a and b to c</p>
      </div>
    </div>
  );
}
