import * as React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import TopBar from '../topbar/TopBar'
import '../featuredInfo/featuredInfo.css'


import OkvsNotOk from '../chart/OkvsNotOk';

import { prodData } from '../../OknotOkDummy'
import '../../pages/home/home.css'


import DoubleLine from '../chart/DoubleLine';
import {doubleLineDummy} from '../../DoubleLineDummy'

import './weeklyMonthly.css'




export default function WeeklyMonthly() {




  return (
      <>
    <Box className='charts' sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        
        <Grid item xs={6}>
        <DoubleLine data={doubleLineDummy}  title='Monthly'/>

        </Grid>
        <Grid item xs={6}>
          <OkvsNotOk data={prodData} dataKey='Target' dataK='ActualOk' dataKeyss='Actual' title='Weekly'/>
          
        </Grid>
        
      </Grid>
    </Box>
    

   </>
  );
}
