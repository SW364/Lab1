import {useState} from 'react'


export const AppCounter = () => {

    const [counter, setCounter ] = useState(1);

  return (
    <div>
        <h1>Counter: {counter}</h1>
        <button className='btm btm-primary' onClick={()=> setCounter(counter + 1)}>Add 1</button>
        <button className='btm btm-primary' onClick={()=> setCounter(0)}>Reset</button>
        <button className='btm btm-primary' onClick={()=> setCounter(counter - 1)}>Remove 1</button>
    </div>
  )
}