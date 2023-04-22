import React from 'react';
import { Button, Grid } from '@mui/material';
import styles from './CalendarView.module.scss';
import NoReminder from '../../assets/images/no-reminders.png';

const CalendarView: React.FC = () => {
  return (
    <Grid
      className={styles['grid-container']}
      container
      spacing={0}
    >
      <Grid item xs={6} className={styles['grid-item']}>
        <div className={styles['date-header']}>
          <h3>Friday, August 26, 2022</h3>

          <Button variant="contained">
            Add reminder
          </Button>
        </div>

        <img src={NoReminder} alt="No Reminder Empty State" />
      </Grid>

      <Grid item xs={4} className={styles['grid-item']}>
        <div>CALENDAR</div>
      </Grid>
    </Grid>
  );
};

export default CalendarView;