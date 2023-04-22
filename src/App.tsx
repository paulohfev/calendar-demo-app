import React from 'react';
import { Box, Container, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import CalendarView from './components/CalendarView';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
