import '../globals.css';

import Image from "next/image";
import BrainIcon from "../icon/icons8-brain-50.png";
import Inbox from "../icon/inbox.png"

export default function BrowserMemory(){
  return (
    <div className="w-96 h-64 bg-slate-400 rounded-md memoryBrowser">
      <div className="p-5 flex">
        <Image src={BrainIcon} alt="brainImage" width={20} />
        <h1 className='text-lg font-bold ml-2'>Browser's Memory</h1>
  
      </div>
      <div className='ml-10'>
      <Image src={Inbox} alt="inbox" width={70}  />
     
      </div>
     
    </div>
  );
}
