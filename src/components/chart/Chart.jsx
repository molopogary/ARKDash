import {Line,Legend,XAxis,YAxis,Tooltip,CartesianGrid,LineChart, ResponsiveContainer} from 'recharts'



export default function Chart({data,dataKey,title,dataK,dataKeyss}) {
    
    return (
        <>
        <ResponsiveContainer>
        

    
        <div className='lineChart'>
        <h1 className='barTitle'>{title}</h1>
        <LineChart width={1510} height={400} data={data}
    margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="time" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey={dataKey} stroke="#8884d8"/>
    <Line type="monotone" dataKey={dataK} stroke="#006400"/>
    <Line type='monotone' dataKey={dataKeyss} stroke="#8b0000"/>
   
   
  </LineChart>
  </div>
  </ResponsiveContainer>
  
  </>
    )
}

  
                              
  