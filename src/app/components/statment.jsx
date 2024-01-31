import '../globals.css';
   
import { Stepper } from './stepper';
        
 export default function Statments(){       
      return(  
        <div className="contentSection p-5 font-mono ">
            <h2 className="pb-3 font-bold text-3xl">JavaScript Statment</h2>
            <p className="py-1 font-mono">JavaScript statements are composed of: </p>
            <p className="py-1 font-mono"> Values, Operators, Expressions, Keywords, and Comments.</p>
            <p className="py-1">
              This statement tells the browser to write "Hello Dolly." inside an
              HTML element with id="demo":
            </p>
            <div className=" bg-slate-400 p-5 mb-4 mt-4">
               <p>document.getElementById("demo").innerHTML = "Hello Dolly.";</p>
            </div>
            <p className="py-1">Most JavaScript programs contain many JavaScript statements.</p>
            <p className="py-1">The statements are executed, one by one, in the same order as they are written.</p>
            <h3 className="py-3">Semicolons ;</h3>
            <p className="py-1">Semicolons separate JavaScript statements.</p>
           
            <p className="py-1"> Add a semicolon at the end of each executable statement:</p>
            <div className="w-[100%] bg-slate-400 p-5 mb-4 mt-4">
              
               <p>let a, b, c;  // Declare 3 variables</p>
               <p>a = 5;        // Assign the value 5 to a</p>
               <p>b = 6;        // Assign the value 6 to b</p>
               <p>c = a + b;    // Assign the sum of a and b to c</p>
            </div>
            <p className="py-1">Most JavaScript programs contain many JavaScript statements.</p>
            <p className="py-1">The statements are executed, one by one, in the same order as they are written.</p>
            <h3 className="py-3">Semicolons ;</h3>
            <p className="py-1">Semicolons separate JavaScript statements.</p>
           
            <p className="py-1"> Add a semicolon at the end of each executable statement:</p>
            <div className="w-[100%] bg-slate-400 p-5 mb-4 mt-4">
              
               <p>let a, b, c;  // Declare 3 variables</p>
               <p>a = 5;        // Assign the value 5 to a</p>
               <p>b = 6;        // Assign the value 6 to b</p>
               <p>c = a + b;    // Assign the sum of a and b to c</p>
            </div>
            <Stepper></Stepper>
            
          </div>
)
        }