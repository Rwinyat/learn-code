import "./style.css";

export default function TreeDiagram() {
  return (
  
    <div class="tree ">
      <ul>
        <li>
          <a className="bg-blue-200" href="#">Data Type</a>
          <ul>
            <li>
              <a className=" bg-slate-200" href="#">Primitive Type</a>
              <ul>
                <li>
                  <a className="bg-orange-400" href="#">String</a>
                </li>
                <li>
                  <a className="bg-blue-400" href="#">Number</a>
                </li>
                <li>
                  <a className="bg-green-400" href="#">Boolean</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="bg-slate-200" href="#">Non Primitive Type</a>
              <ul>
              
                <li>
                  <a className=" bg-purple-400" href="#">Object</a>
                </li>
                <li>
                  <a className=" bg-red-400" href="#">Array</a>
                </li>
                <li>
                  <a className=" bg-slate-400" href="#">Function</a>
                </li>
              </ul>
            
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}