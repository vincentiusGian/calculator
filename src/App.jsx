import {useState} from "react";
// import Number from "./components/Number";
import ppic from "./ppic.jpg";



function App() {
  const op = ['+', '-', '*', '/'];

  
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  
  const newCalc = value => {
    if(op.includes(value) && calc == '' || op.includes(value) && op.includes(calc.slice(-1))) {
      return;
    }
    setCalc(calc + value);

    if(!op.includes(value)) {
      setResult(eval(calc + value).toString());
    };
  }

  const Number = () => {
      const digits = [];
      for(let i = 1; i < 10; i++) {
          digits.push(
            <button className="btn btn-md btn-ghost no-animation " key={i} onClick={() => newCalc(i.toString())}>{i}</button>
          )
      }
      return digits;
  }

  const calculate = () => {
      setCalc(eval(calc).toString());
  }

  const remove = () => {
    if(calc == '') {
      return;
    } const value = calc.slice(0,-1)

    setCalc(value);
  }
  

  return (
    <div className="App grid h-screen place-items-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
<div className="avatar block justify-center">
  <h1 className="block mt-3 font-mono text-base-100 text-5xl text-center">Happy Cheating!;</h1>
</div>
<div className="card w-72 h-96 shadow-xl bg-purple-950">
  <div className="card-bodys">
    <h2 className="card-title bg-purple-950 text-white flex justify-center">G Calculator</h2>
  </div>
  <div className="result grid justify-items-end bg-purple-700 h-auto text-white mr-2">
  {calc || 0} {result ? <span className="text-slate-300">({result})</span> : '' }
  </div>
  <div className="flex justify-center space-x-3 bg-purple-900 text-white font-medium">
      <button className="btn-md no-animation" onClick={() => newCalc('+')}>+</button>
      <button className="btn-md no-animation" onClick={() => newCalc('-')}>-</button>
      <button className="btn-md no-animation" onClick={() => newCalc('*')}>*</button>
      <button className="btn-md no-animation" onClick={() => newCalc('/')}>/</button>
      <button className="btn-md no-animation" onClick={remove}>DEL</button>
  </div>
  <div className="number grid grid-rows-4 grid-cols-3 gap-4 text-white">
    {Number()}
    <button className="btn btn-md btn-ghost no-animation" onClick={() => newCalc('0')}>0</button>
    <button className="btn btn-md btn-ghost no-animation" onClick={() => newCalc('.')}>.</button>
    <button className="btn btn-md btn-ghost no-animation" onClick={calculate}>=</button>
  </div>
  <div className="toast toast-end">
  <div className="alert shadow-lg">
    <div>
      <span>Follow me on Instagram! @gianjunius</span>
    </div>
  </div>
  </div>
</div>
</div>
  );
}

export default App;
