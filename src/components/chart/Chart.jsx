import {Line,Legend,XAxis,YAxis,Tooltip,CartesianGrid,LineChart, ResponsiveContainer} from 'recharts'


export default function Chart({data,dataKey,title}) {
    
    return (
        <>
        

    
        <div className='lineChart'>
        <h1 className='barTitle'>{title}</h1>
        <LineChart width={730} height={250} data={data}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
   
  </LineChart>
  </div>
  
  </>
    )
}

  
                              
  