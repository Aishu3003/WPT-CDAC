import { useState } from 'react';
import './sum.css'
const SumComponent=()=>{
    const [num1,setnum1]=useState('');
    const [num2,setnum2]=useState('');
    const [sum,setSum]=useState('');

    const handleInputChange=(e)=>{
        const {name ,value}=e.target;
        if(name=='num1'){
            setnum1(value);
        }
        else if(name=='num2'){
            setnum2(value);
        }
    };
    const calculateSum=()=>{
        const result=Number(num1)+Number(num2);
        setSum(result);

    };

    return(
        <div>
            <h2>Sum </h2>
        <form>
        <label>
        Number 1:
        <input type="text" name="num1" value={num1} onChange={handleInputChange} />
      </label>
      <label>
        Number 2:
        <input type="text" name="num2" value={num2} onChange={handleInputChange} />
      </label>
      <button type="button" onClick={calculateSum}>
        Calculate Sum
      </button>
      </form>
       {sum !==' ' && <p>Sum:{sum}</p>}
      </div>
    )
}
export default SumComponent;