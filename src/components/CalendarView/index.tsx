import React from 'react';
import { Button, Grid } from '@mui/material';
import classNames from 'classnames';
import Calendar from '../Calendar';
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
        <div className={styles.header}>
          <h3 className={styles['date-header']}>Friday, August 26, 2022</h3>

          <Button variant="contained">Add reminder</Button>
        </div>

        <img src={NoReminder} alt="No Reminder Empty State" />
      </Grid>

      <Grid item xs={6} className={classNames(styles['grid-item'], styles['calendar-item'])}>
        <Calendar />
      </Grid>
    </Grid>
  );
};

export default CalendarView;