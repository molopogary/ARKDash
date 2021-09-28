import { AreaChart,XAxis,YAxis,CartesianGrid,Tooltip,Area } from "recharts"
import { doubleLineDummy } from "../../DoubleLineDummy"

export default function DoubleLine(data,dataKey,dataK,title,amt) {

    return (
        <>
        <h2 className='barTitle'>Monthly</h2>
        <AreaChart width={800} height={575} data={doubleLineDummy}
    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
    <defs>
      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
      </linearGradient>
      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#006400" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#006400" stopOpacity={0}/>
      </linearGradient>
      <linearGradient id="colorSv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#000000" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#000000" stopOpacity={0}/>
      </linearGradient>
    </defs>
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Area type="monotone" dataKey='ActualOk' stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
    <Area type="monotone" dataKey='Actual' stroke="#006400" fillOpacity={1} fill="url(#colorPv)" />
    <Area type="monotone" dataKey='Target' stroke="#8b0000" fillOpacity={1} fill="url(#colorSv)" />
  </AreaChart>
  </>
    )
}

                              
  