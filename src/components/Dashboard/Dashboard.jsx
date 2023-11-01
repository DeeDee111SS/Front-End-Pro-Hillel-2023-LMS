import * as React from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Chart from '../Chart';
import Deposits from '../Deposits';
import Orders from '../Orders';

import DoughnutChart from '../DoughnutChart';
import HorizontalBarChart from '../HorizontalBarChart/HorizontalBarChart';


export default function Dashboard() {

  return (    
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={12} lg={4}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 580,
            }}
          >
            <DoughnutChart />
          </Paper>
        </Grid>
        {/* Chart */}
        <Grid item xs={12} md={12} lg={8}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 580,
            }}
          >
            <HorizontalBarChart />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Deposits />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
           
          
  );
}