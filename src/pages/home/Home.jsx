import './home.css'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import {dummyData} from '../../dummyData'

import Table from '../../components/table/Table'
import OkvsNotOk from '../../components/chart/OkvsNotOk'

import { prodData } from '../../OknotOkDummy'


export default function home() {
    return (
        <div className='home'>
            <FeaturedInfo/>
            
            <div className='table'>
            <Table/>
            </div>



           
            
          
            
            <div className='charts'>
                
            <OkvsNotOk data={prodData} title="Real Time Performance" dataKey="ok" dataK="notOk"/> 
            <Chart data={dummyData} title=
            "Weekly Performance" grid dataKey="Production"/>
            
           
            </div>
    




            

           
        </div>
        
    )
}
