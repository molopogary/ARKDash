import './home.css'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import {dummyData} from '../../dummyData'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import Table from '../../components/table/Table'
import OkvsNotOk from '../../components/chart/OkvsNotOk'
import PieCharts from '../../components/chart/PieChart'
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
