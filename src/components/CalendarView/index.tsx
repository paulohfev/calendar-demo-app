import React from 'react';
import { Box, Button, Grid } from '@mui/material';
import NoReminder from '../../assets/images/no-reminders.png';

const CalendarView: React.FC = () => {
  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="space-between"
      style={{ backgroundColor: 'white', borderRadius: '40px' }}
    >
      <Grid item xs={6} style={{ padding: '40px'}}>
        <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
          <h3>Friday, August 26, 2022</h3>

          <Button
            variant="contained"
            style={{
              background: 'linear-gradient(90deg, #FF465D 0%, #BC46BA 100%)', 
              boxShadow: '0px 4px 28px 2px #D1DCF0',
              borderRadius: '4px',
              fontSize: '16px',
              fontWeight: '600',
              height: '49px',
              textTransform: 'none',
            }}
          >
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