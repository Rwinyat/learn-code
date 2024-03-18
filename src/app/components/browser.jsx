import Image from "next/image";
import BackButton from "../icon/Browser-go-back.png";
import ForwardButton from "../icon/Browser-go-forward.png";
import BrowserRefresh from "../icon/browser-refresh.png";
import BrowserClose from "../icon/Browser-Close.png";

export default function Browser() {
  return (
    <div className="h-[400px] w-[650px] bg-gray-300  ml-11 rounded-md">
      <div className="browserHeader h-13 flex bg-gray-500 p-1 rounded-md">
        <div className="mr-11 flex">
          <div className="p-1 my-2">
            <Image src={BackButton} width={20} />
          </div>
          <div className="p-1 my-2 ">
            <Image src={ForwardButton} width={20} />
          </div>
          <div className="py-1 pl-4 my-2">
            <Image src={BrowserRefresh} width={20} />
          </div>
        </div>
        <input type="text" className="h-5 w-96 mt-3 rounded-md p-2" />
        <div className="p-1 mt-2 ml-24">
          <Image src={BrowserClose} width={20} />
        </div>
      </div>

      <div className="browserBody">
        <p>salam </p>
      </div>
    </div>
  );
}
