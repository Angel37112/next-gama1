'use client'
import React, {useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const resetCounter =()=>{
    setCount(0);

  };

  const decrement =()=>{
    setCount(count - 1);

  };
  useEffect(()=>{
    console.log('The count is:',count)

  },[count]);

  return (

    <div >
      <div className=' static '>
      <h2 className='mb-4'>Contador</h2>
      <p>El valor actual es: {count}</p>
      <div className=' static flex p-2'>
      <button className="bg-black text-white  py-2 rounded mr-2 "
       onClick={increment}>Incrementar</button>
      <button className="bg-black text-white py-2 rounded mr-2 " 
      onClick={resetCounter}> Reiniciar a 0</button>
      <button className="bg-black text-white  py-2 rounded mr-2 " 
      onClick={decrement}> Decrementar</button>
      </div>
      </div>
    </div>
  );
};

export default Counter;