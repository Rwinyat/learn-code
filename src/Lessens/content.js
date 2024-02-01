export default function Content() {
  const content = [
    {
      title: "Data types in Javascript",
      desc: "Basic introduction to data and data types in Javascript.",
      steps: [{ title: "Basic types", component: step1 }],
    },
    {
      title: "Type conversion",
      desc: "",
      steps: [
        { title: "number", component: step1 },
        { title: "boolean", component: step2 },
        { title: "string", component: step3 },
      ],
    },
    {
      title: "Variables and Assignment",
      desc: "",
      steps: [{ title: "", component: step1 }],
    },
    {
      title: "Expressions",
      desc: "",
      steps: [
        { title: "Operators and Parantheses", componet: step1 },
        { title: "Read variables, Index and props", component: step2 },
        { title: "Evaluation", component: step3 },
      ],
    },
    {
      title: "Statements",
      desc: "",
      steps: [
        { title: "Definition and assignment", component: step1 },
        { title: "If and Loop", component: step2 },
        { title: "Code block", componet: step3 },
        { title: "Statement terminators", component: step4 },
        { title: "Expression as statement", component: step5 },
        { title: "Execution", component: step6 },
      ],
    },
    {
      title: "Objects",
      desc: "",
      steps: [
        { title: "Memory model", component: step1 },
        { title: "Read and write", component: step2 },
        { title: "Pass", component: step3 },
        { title: "Copy", component: step4 },
      ],
    },
    { title: "Functions", desc: "", steps: [{ title: "", component: step1 }] },
    {
      title: "Expressions",
      desc: "",
      steps: [
        { title: "New Object", component: step1 },
        { title: "New Array", component: step2 },
        { title: "New Function", component: step3 },
        { title: "Type of Array ,Object and Function", component: step4 },
        { title: "Chaining of Array and Object", component: step5 },
        {
          title: "Immediately Invoked Function Expressions(IIFE)",
          component: step6,
        },
        { title: "Function calls", component: step7 },
        { title: "Function calls in Ternary, && and ||", component: step7 },
      ],
    },
    {
      title: "Variable scopes",
      desc: "Variable scopes in JavaScript define the regions of code where a variable can be accessed.",
      steps: [
        { title: "Read Scopes", component: step1 },
        { title: "Write scopes", component: stpe2 },
        { title: "Global (Window property) vs Scoped", component: step3 },
        { title: "var, let, const and global examples", component: step4 },
      ],
    },
    {
      title: "functions",
      desc: "Functions in JavaScript can be used to organize code and make it more reusable.",
      steps: [
        { title: "Passing Functions as data", component: step1 },
        { title: "Dynamic arguments:  arguments vs ...rest", component: step2 },
        { title: "Arrow vs anonymous vs named", component: step3 },
        { title: "Closure scope", component: step4 },
      ],
    },
    {
      title: "OOP",
      desc: "Object-oriented programming (OOP) in JavaScript allows you to create objects with properties and methods, which can be used to represent real-world entities.",
      steps: [
        { title: "Constructor Functions", component: step1 },
        { title: "this", component: step2 },
        { title: "Class Syntax", component: step3 },
        { title: "Instanceof (e.g. Array)", component: step4 },
        { title: "Prototype", component: step5 },
      ],
    },
    {
      title: "Objects",
      desc: "",
      steps: [
        {
          title: "data types vs Number, Boolean, String, Array, etc...",
          component: step1,
        },
        { title: "to string", component: step2 },
        { title: "setter getters", component: step3 },
      ],
    },
    { title: "clean code", desc:"", steps:[{},{}]},
  ];
  return content;
}
