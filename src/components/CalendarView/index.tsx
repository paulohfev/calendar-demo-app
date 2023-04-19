import React from 'react';
import styles from './CalendarView.module.scss';
import NoReminder from '../../assets/images/no-reminders.png';

const CalendarView: React.FC = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <h3>Friday, August 26, 2022</h3>

        <button>Add Reminder</button>
      </div>

      <img src={NoReminder} alt="No Reminder Empty State" />
    </div>
  );
};

export default CalendarView;