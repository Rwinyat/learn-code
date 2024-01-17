import {
  Code,
Statement,
SAssignment,
SReturn,
Expression,
Operator,
Call,
Variable,
NewArrowFunction,
Literal
}  from '../components/Code'



export default function demo() {
    return (
      <div className="App">
        <h1>Definitions</h1>
        <h2>Expressions (direct type component)</h2>
        <div className="statement "><Literal value={2} /></div>

        <div className="statement "><Operator operator='*' operands={[{literal: 1},{literal: 0}]} /></div>

        <div className="statement "><Operator operator='(' operands={[{literal: 5}]} /></div>

        <div className="statement"><Operator operator='.' operands={[{variable: 'obj'}, {literal: 'prop'}]} /></div>

        <div className="statement"><Call expr={{variable: 'f'}} args={[{literal: 1},{}]} /></div>

        <div className="statement"><Variable name={'x'} /></div>
        <div className="statement"><NewArrowFunction args={['a']} code={[{statement: 'return', expr: {litreal: 1}}]} /></div>
        <h2>Expressions (via Expression component)</h2>
        <div className="statement"><Expression literal={2} /></div>
        <div className="statement"><Expression operator='*' operands={[{literal: 1},{literal: 0}]} /></div>
        <div className="statement"><Expression operator='(' operands={[{literal: 5}]} /></div>
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

        <div className='flex '>
               <div className="statement  w-36   text-center"><Expression operator='*' operands={[{literal: 4},{literal: 5}]} />  </div>
                <div className='flex-col justify-center secendExpr'>
   
               
                  <p>produces</p>
               </div>
               <div className="statement text-center   w-36 "><Expression literal={20} />  </div>
        </div>


      </div>
    );
  }
 const code1 = [
    {statement: 'assignment',variable:'a',expr:{ operator: '+', operands: [{literal: 2},{ operator: '/', operands: [{literal: 3},{ operator: '(', operands:[{ operator: '-', operands: [{literal: 6}, {literal: 1}]}]  }] }] }},// a=2+3/(6-1)
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