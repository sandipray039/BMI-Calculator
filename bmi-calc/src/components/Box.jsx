import React, { useState } from 'react'

function Box() {
   const [weight,setweight]= useState("");
   const [height,setheight]= useState("");
   const [para,setpara]= useState("");

   const long =(e)=>{
    setheight(e.target.value);
   }
   const weigh =(e)=>{
    setweight(e.target.value);
   }
   const Reload = () => {
    setweight('');
    setheight('');
    setpara('');
  };
   const calculate = () => {
       const sol=(height/2.54).toFixed(1);
        const bmi = (weight * 703) / (sol * sol);   
         let put=()=>{
            if(bmi >=19.5 && bmi < 25){
                return 'Normal';
            }
            else if(bmi <19.5){
                return 'Underweight';
            }
            else if(bmi >=25 && bmi < 30){
                return 'Overweight';
            }
            else{
                return 'Obese';
            }
         }
        let give=put();
        setpara(`you are :${give}`)
   }

   return (
    <div className='w-[30%] h-[40%] border-slate-900 border-2 flex flex-col justify-center items-center p-20'>
        <div className=''>
            <label htmlFor="">Enter weight(lbs)</label>
            <input className="block border-slate-900 border-2 mb-4" type="text" value={weight} onChange={weigh}/>
        </div>
        <div>
        <label htmlFor="">Enter height(cm)</label>
        <input className="block border-slate-900 border-2 mb-4" type="text" value={height} onChange={long}/>
        </div>
        <div className='flex gap-2 mb-5'>
        <button className='border-2 rounded-md bg-green-400 px-3 py-2' onClick={calculate}>Calculate BMI</button>
        <button className='border-2 rounded-md bg-red-400 px-3 ' onClick={Reload}>Reload</button>
        </div>
        <p className='font-semibold'>{para}</p>
    </div>
  )
}

export default Box