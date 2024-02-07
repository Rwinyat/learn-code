import DataTypes from "./lessen1/dataTypes(basic)"
import TypeConversion from "./lessen2/typeConversion"
import VariablesAssignment from "./Lessen3/variablesAssignment"
import Expressions from "./lessen4/Expressions"
import Statements from "./lessen5/Statements"
import Objects from "./lessen6/Objects"
import Functions from "./lessen7/functions(basic)"
import ExpressionsAdvance from "./lessen8/expressionsAdvance"
import VariableScopes from "./lessen9/variableScopes"
import  FunctionsAdvanced from "./lessen10/functionsAdvanced"
import OOP from "./lessen11/OOP"
import ObjectsAdvanced from "./lessen12/ObjectsAdvanced"
import CleanCode from "./lessen13/cleanCode"



  const lessens = [
    {
      title: "Data types in Javascript",
      desc: "Basic introduction to data and data types in Javascript.",
      steps: [{ title: "Basic types", component: DataTypes }],
    },
    {
      title: "Type conversion",
      desc: "JavaScript variables can be converted to a new data type and another variable",
      steps: [
        { title: "number", component: TypeConversion },
        { title: "boolean", component: TypeConversion },
        { title: "string", component: TypeConversion },
      ],
    },
    {
      title: "Variables and Assignment",
      desc: "",
      steps: [{ title: "Memory model", component: VariablesAssignment }],
    },
    {
      title: "Expressions",
      desc: "",
      steps: [
        { title: "Operators and Parantheses", componet: Expressions },
        { title: "Read variables, Index and props", component: Expressions },
        { title: "Evaluation", component: Expressions },
      ],
    },
    {
      title: "Statements",
      desc: "",
      steps: [
        { title: "Definition and assignment", component: Statements },
        { title: "If and Loop", component: Statements },
        { title: "Code block", componet: Statements },
        { title: "Statement terminators", component: Statements },
        { title: "Expression as statement", component: Statements },
        { title: "Execution", component: Statements },
      ],
    },
    {
      title: "Objects",
      desc: "",
      steps: [
        { title: "Memory model", component: Objects },
        { title: "Read and write", component: Objects },
        { title: "Pass", component: Objects },
        { title: "Copy", component: Objects },
      ],
    },
    { title: "Functions", desc: "", steps: [{ title: "", component: Functions }] },
    {
      title: "Expressions",
      desc: "",
      steps: [
        { title: "New Object", component: ExpressionsAdvance },
        { title: "New Array", component: ExpressionsAdvance },
        { title: "New Function", component: ExpressionsAdvance },
        { title: "Type of Array ,Object and Function", component: ExpressionsAdvance },
        { title: "Chaining of Array and Object", component: ExpressionsAdvance },
        {
          title: "Immediately Invoked Function Expressions(IIFE)",
          component: ExpressionsAdvance,
        },
        { title: "Function calls", component: ExpressionsAdvance },
        { title: "Function calls in Ternary, && and ||", component: ExpressionsAdvance },
      ],
    },
    {
      title: "Variable scopes",
      desc: "Variable scopes in JavaScript define the regions of code where a variable can be accessed.",
      steps: [
        { title: "Read Scopes", component: VariableScopes },
        { title: "Write scopes", component: VariableScopes },
        { title: "Global (Window property) vs Scoped", component: VariableScopes },
        { title: "var, let, const and global examples", component: VariableScopes },
      ],
    },
    {
      title: "functions",
      desc: "Functions in JavaScript can be used to organize code and make it more reusable.",
      steps: [
        { title: "Passing Functions as data", component: FunctionsAdvanced },
        { title: "Dynamic arguments:  arguments vs ...rest", component: FunctionsAdvanced },
        { title: "Arrow vs anonymous vs named", component: FunctionsAdvanced },
        { title: "Closure scope", component: FunctionsAdvanced },
      ],
    },
    {
      title: "OOP",
      desc: "Object-oriented programming (OOP) in JavaScript allows you to create objects with properties and methods, which can be used to represent real-world entities.",
      steps: [
        { title: "Constructor Functions", component: OOP },
        { title: "this", component: OOP },
        { title: "Class Syntax", component: OOP },
        { title: "Instanceof (e.g. Array)", component: OOP },
        { title: "Prototype", component: OOP },
      ],
    },
    {
      title: "Objects",
      desc: "",
      steps: [
        {
          title: "data types vs Number, Boolean, String, Array, etc...",
          component: ObjectsAdvanced,
        },
        { title: "to string", component: ObjectsAdvanced },
        { title: "setter getters", component: ObjectsAdvanced },
      ],
    },
    { title: "clean code", desc:"", steps:[{title:"destructuring", component:CleanCode}]}
  ];
  
export default lessens;

  
