// import React,{useState} from 'react'
// // все что мы используем через use это hooks

// export default function App() {

//   const [number, setNumber] = useState(0)
//   const [val, setVal] = useState ('996')

//   const sendNumber = (event) =>{
//     event.preventDefault()
//     alert(val)
//   }

//   return (
//     <div>
//       <h1>Count: {number}</h1>
//       <button 
//       onClick={()=>setNumber(number- 1)}
//       >-</button>
//       <button
//       onClick={()=>setNumber(number+1)}
//       >+</button>
//       <form onSubmit={sendNumber}>
//         <input
//         value={val}
//         type='number'
//         maxLength={12}
//         onChange={e=>{setVal(e.target.value)
//         }}
//         />
//         <button>Send</button>
//       </form>
//     </div>
//   )
// }


import React, {useState}  from 'react'
import {SITE, API} from './config'
import './App.css';

export default function App() {

  const [val, setVal] = useState([])
  const [data, setData] = useState('')
  

  
  const getGiphy = async(event)=>{
    event.preventDefault()
    let url = SITE+val+API+'&limit=12'
    let req = await fetch(url)
    let resp = await req.json()
    console.log(resp.data)
    setData(resp.data)
    setVal('')
  }

  return (
    <div className='container'>
      
      <form  onSubmit={getGiphy}>
      <input
      value={val}
      onChange={e=>setVal(e.target.value)}
      />
      <button>Search</button>
      </form>
    <div className='card'>
      {data && data.length !=0 ?
      data.map(el=>{
        return(
          <div className='box'>
          <iframe src={el.embed_url}></iframe>
          <h5>{el.title}</h5>
          </div>
        )
      })
      :<h3>Пока пусто</h3>
      }

    </div>
    </div>
  )
}





























