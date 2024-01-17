import "../globals.css";


  

  
 


  export const Code = ({statements}) => 
  <>
    {statements.map((statement,i) => <Statement key={i} {...statement} />)}
  </>
  
  export const Statement = ({statement, ...props}) => {
    if (statement == 'assignment') return <SAssignment variable={props.variable} expr={props.expr} />
    if (statement == 'return') return <SReturn expr={props.expr} />
    if (statement == 'expression') return <div className="statement"><Expression {...props.expr} /></div>
  }
 export const SAssignment = ({variable, expr}) => <div className="statement">
      <span className="assignment">{variable}</span> = <Expression {...expr} />
    </div>
 export const SReturn = ({expr}) => <div className="statement">
    return {<Expression {...expr} />} 
  </div>

export const Expression = ({ literal, operator, call, variable, newObject, ...props }) => {
    if (operator) return <span className="expr"><Operator operator={operator} operands={props.operands} /></span>
    if (call) return <span className="expr"><Call expr={call} args={props.args} /></span>
    if (variable) return <span className="expr"><Variable name={variable} /></span>
    if (newObject=='arrow-function') return <span className="expr"><NewArrowFunction args={props.args} code={props.code} /></span>
    // if (newObject=='object') return <NewObject 
    // if (newObject=='array') return <NewArray 
    return <span className="expr"><Literal value={literal} /></span>
  }
  
  export const Operator = ({operator, operands}) => {
    if ('()'.includes(operator)) return <>
      (<Expression {...operands[0]} />)
    </>
    if (operator == '.') return <>
      <Expression {...operands[0]} />.<Expression {...operands[1]} />
    </>
    if ('+-*/'.includes(operator)) return <>
      <Expression {...operands[0]} /> {operator} <Expression {...operands[1]} />
    </>
  }
 export const Call = ({expr, args}) => <>
    <Expression {...expr} />({
      args.map((arg,i) => <><Expression key={i} {...arg} />{i<args.length-1 && ', '}</>)
    })
  </>
 export const Variable = ({name}) => <span className="variable">{name}</span>
 export const NewArrowFunction = ({args, code}) => <span className="new-obj arrow-function">
    ({args.map((arg,i) => <><span key={i} className="function-arg">{arg}</span>{i<args.length-1 && ', '}</>)})
     =&gt; {'{'}
    <Code statements={code} />
    {'}'}
  </span>
 export const Literal = ({value}) => <span className="literal">{String(value)}</span>



   
  // ------------ expression types --------------
  // {literal: 2}
  // {operator: '*', operands[]}
  // {operator: '.', operands[]}
  // {call: expr, args}
  // {variable: 'x'}
  // {newObject: 'arrow-function', args[], code[]}
  // {newObject: 'object', ??? }
  // {newObject: 'array', items[]}
  // 
  
  // ------------- statement --------------------
  // {statement: 'assignment', variable, expr}
  // {statement: 'expression', expr}