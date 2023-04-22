import React from 'react';
import { Box, Button, Grid } from '@mui/material';
import NoReminder from '../../assets/images/no-reminders.png';

const CalendarView: React.FC = () => {
  return (
    <Grid
      container
      spacing={0}
      style={{ alignItems: 'center', backgroundColor: 'white', borderRadius: '40px', justifyContent: 'space-between', }}
    >
      <Grid item xs={6} style={{ padding: '40px'}}>
        <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
          <h3>Friday, August 26, 2022</h3>

          <Button variant="contained">
            Add reminder
          </Button>
        </Box>

        <img src={NoReminder} alt="No Reminder Empty State" />
      </Grid>

      <Grid item xs={4} style={{ padding: '40px'}}>
        <div>CALENDAR</div>
      </Grid>
    </Grid>
  );
};

export default CalendarView;