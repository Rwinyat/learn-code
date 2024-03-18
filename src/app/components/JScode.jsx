import Image from "next/image";
import RuntimeCode from "../icon/run-command-50.png"



export default function JsCode() {
  return (
    <div className=" h-64 w-96 bg-slate-400 rounded-md jsCode">
      <div className="p-5 flex">
        <Image src={RuntimeCode} width={20}/>
        <h1 className=" text-lg font-bold pl-2">Javascript Code running in Browser</h1>
      </div>
      <div className="ml-6"><p className="text-md font-bold">let myVar= 23</p> <input type="text" /></div>
    </div>
  );
}
