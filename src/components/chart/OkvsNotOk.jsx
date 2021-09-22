import React from 'react'
import { XAxis, CartesianGrid, Tooltip,Legend,Bar,BarChart,YAxis} from 'recharts';
import '../../pages/home/home.css'




export default function OkvsNotOk({data,dataKey,dataK,title}) {

      
    return (
        <>
        
        <div className='barChart'>
            <h1 className='barTitle'>{title}</h1>
          
        <BarChart width={700} height={250} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey={dataKey} fill="#8884d8" />
  <Bar dataKey={dataK} fill="#82ca9d" />
</BarChart></div>
</>
    )
}
