
import Browser from "../../components/browser"
import BrowserMemory from "../../components/BrowserMemory"
import JsCode from "@/app/components/JScode"
import NewDastan from "../../components/newcomponent"


export default function VariablesAssignment(){
    return(
        <div className="my-11 ">
            <div className="flex justify-evenly my-5">
       
            <JsCode />
            <BrowserMemory />
            </div>
            <div className="flex justify-center">
            <Browser />
            </div>
        </div>
    )
    
};
