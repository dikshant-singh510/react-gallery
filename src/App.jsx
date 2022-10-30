import React, { useEffect, useState } from 'react'
import Image from './components/Image'

const App = () => {

  const [Data, setData] = useState("")

  const getData = async () => {
    try {
      const api = await fetch("https://picsum.photos/v2/list")
      // const data = await api.json()
      setData(await api.json())
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, [])


  return (

    <div className='w-full h-full bg-slate-900 flex justify-center py-2 overflow-hidden
    relative'>
      
      <div className="rounded sm:columns-2 md:columns-3 xl:columns-4 gap-2 w-11/12 box-border">
        {Data ? (Data.map((item, index) => { return (<Image url={item} key={item.id} />) })) : "NoT images found"}
      </div>
    </div>
  )
}

export default App