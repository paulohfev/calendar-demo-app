import React from 'react';
import { Box, Container } from '@mui/material';
import CalendarView from './components/CalendarView';

const App: React.FC = () => {
  return (
    <Box
      style={{
        alignItems: 'center',
        backgroundColor: '#EBF3FE',
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh'
      }}
    >
      <Container>
        <CalendarView />
      </Container>
    </Box>
  );
}

export default App;
