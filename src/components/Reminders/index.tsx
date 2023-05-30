import React from 'react'
import { Button } from '@mui/material';
import NoReminder from '../../assets/images/no-reminders.png';
import styles from './Reminders.module.scss';

type Props = {
  selectedDate: moment.Moment;
}

const Reminders: React.FC<Props> = ({ selectedDate }) => {
  const selectedDayHeader = selectedDate.format("dddd[,] MMMM D[,] YYYY");

  return (
    <div>
      <div className={styles.header}>
        <h3 className={styles['date-header']}>{selectedDayHeader}</h3>

        <Button variant="contained">Add reminder</Button>
      </div>

      <img src={NoReminder} alt="No Reminder Empty State" />
    </div>
  )
}

export default Reminders;
