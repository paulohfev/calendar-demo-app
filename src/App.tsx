import React from 'react';
import { Box, Container, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import CalendarView from './components/CalendarView';
import { BoxStyles } from './AppStyles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box style={BoxStyles}>
        <Container>
          <CalendarView />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
