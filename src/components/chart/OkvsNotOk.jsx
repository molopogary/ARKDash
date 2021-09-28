import React from 'react'
import { XAxis, CartesianGrid, Tooltip,Legend,Bar,BarChart,YAxis} from 'recharts';
import '../../pages/home/home.css'




export default function OkvsNotOk({data,dataKey,dataK,title,dataKeyss}) {

      
    return (
        <>
        
        <div className='barChart'>
            <h2 className='barTitle'>{title}</h2>
            
          
        <BarChart width={730} height={600} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey={dataKey} fill="#8b0000" />
  <Bar dataKey={dataKeyss} fill="#8884d8" />
  
</BarChart></div>
</>
    )
}
