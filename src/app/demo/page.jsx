import "../globals.css";

export default function demo() {
    return (
      <div className="App">
        <h1>Definitions</h1>
        <h2>Expressions (direct type component)</h2>
        <div className="statement"><Literal value={2} /></div>
        <div className="statement"><Operator operator='*' operands={[{literal: 1},{literal: 0}]} /></div>
        <div className="statement"><Operator operator='.' operands={[{variable: 'obj'}, {literal: 'prop'}]} /></div>
        <div className="statement"><Call expr={{variable: 'f'}} args={[{literal: 1},{}]} /></div>
        <div className="statement"><Variable name={'x'} /></div>
        <div className="statement"><NewArrowFunction args={['a']} code={[{statement: 'return', expr: {litreal: 1}}]} /></div>
        <h2>Expressions (via Expression component)</h2>
        <div className="statement"><Expression literal={2} /></div>
        <div className="statement"><Expression operator='*' operands={[{literal: 1},{literal: 0}]} /></div>
        <div className="statement"><Expression operator='.' operands={[{variable: 'obj'}, {literal: 'prop'}]} /></div>
        <div className="statement"><Expression call={{variable: 'f'}} args={[{literal: 1},{}]} /></div>
        <div className="statement"><Expression variable={'x'} /></div>
        <div className="statement"><Expression newObject='arrow-function' args={['a']} code={[{statement: 'return', expr: {litreal: 1}}]} /></div>
        <h2>Statements (direct type component)</h2>
        <SAssignment variable={'z'} expr={{literal: 0}} />
        <SReturn expr={{literal: 0}} />
        <h2>Statements (via Statements)</h2>
        <Statement statement="assignment" variable={'z'} expr={{literal: 0}} />
        <Statement statement="return" expr={{literal: 0}} />
        <Statement statement="expression" expr={{literal:0}} />
        <h2>Statements (via Code component)</h2>
        <Code statements={[{statement: 'return', expr:{literal: 0}}]} />
        <h1>Example code 1</h1>
        <Code statements={code1} />
      </div>
    );
  }
  
  const code1 = [
    {statement: 'assignment',variable:'a',expr:{ operator: '+', operands: [{literal: 2},{ operator: '/', operands: [{literal: 3},{literal: 6}] }] }},// a=2+3/6
    {statement: 'assignment',variable:'f',expr:{ newObject: 'arrow-function', args: ['x'], code: [{statement: 'return', expr: { operator: '*', operands: [{variable: 'x'},{literal: 2}] }}] }},// f=x=>x*2
    {statement: 'expression', expr: {
      call: {
        operator: '.',
        operands: [
          {variable: 'console'},
          {literal: 'log'}
        ]
      },
      args: [{
        call: { variable: 'f' },
        args: [{ variable: 'a' }]
      }]
    }},// console.log(f(a))
  ]
  
  
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


  const Code = ({statements}) => <>{statements.map((statement,i) => <Statement key={i} {...statement} />)}</>
  const Statement = ({statement, ...props}) => {
    if (statement == 'assignment') return <SAssignment variable={props.variable} expr={props.expr} />
    if (statement == 'return') return <SReturn expr={props.expr} />
    if (statement == 'expression') return <div className="statement"><Expression {...props.expr} /></div>
  }
  const SAssignment = ({variable, expr}) => <div className="statement">
      <span className="assignment">{variable}</span> = <Expression {...expr} />
    </div>
  const SReturn = ({expr}) => <div className="statement">
    return {<Expression {...expr} />} 
  </div>
  const Expression = ({ literal, operator, call, variable, newObject, ...props }) => {
    if (operator) return <span className="expr"><Operator operator={operator} operands={props.operands} /></span>
    if (call) return <span className="expr"><Call expr={call} args={props.args} /></span>
    if (variable) return <span className="expr"><Variable name={variable} /></span>
    if (newObject=='arrow-function') return <span className="expr"><NewArrowFunction args={props.args} code={props.code} /></span>
    // if (newObject=='object') return <NewObject 
    // if (newObject=='array') return <NewArray 
    return <span className="expr"><Literal value={literal} /></span>
  }
  
  const Operator = ({operator, operands}) => {
    if (operator == '.') return <>
      <Expression {...operands[0]} />.<Expression {...operands[1]} />
    </>
    if ('+-*/'.includes(operator)) return <>
      <Expression {...operands[0]} /> {operator} <Expression {...operands[1]} />
    </>
  }
  const Call = ({expr, args}) => <>
    <Expression {...expr} />({
      args.map((arg,i) => <><Expression key={i} {...arg} />{i<args.length-1 && ', '}</>)
    })
  </>
  const Variable = ({name}) => <span className="variable">{name}</span>
  const NewArrowFunction = ({args, code}) => <span className="new-obj arrow-function">
    ({args.map((arg,i) => <><span key={i} className="function-arg">{arg}</span>{i<args.length-1 && ', '}</>)})
     =&gt; {'{'}
    <Code statements={code} />
    {'}'}
  </span>
  const Literal = ({value}) => <span className="literal">{String(value)}</span>
    