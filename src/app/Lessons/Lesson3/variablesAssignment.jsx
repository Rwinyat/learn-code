
import Browser from "../../components/browser"
import BrowserMemory from "../../components/BrowserMemory"
import JsCode from "@/app/components/JScode"
import NewDastan from "../../components/newcomponent"


export default function VariablesAssignment(){
    return(
        <div className="mt-11 ">
            <div className="flex justify-evenly mt-5">
       
            <JsCode />
            <BrowserMemory />
            </div>
            <div className="flex justify-center">
            <Browser />
            </div>
        </div>
    )
    
};
