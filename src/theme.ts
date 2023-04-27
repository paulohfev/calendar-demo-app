import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: {},
          style: {
            borderRadius: '4px',
            textTransform: 'none',
          }
        },
        {
          props: { variant: 'contained' },
          style: {
            boxShadow: '0px 4px 28px 2px #D1DCF0',
            fontSize: '16px',
            fontWeight: '600',
            height: '49px',
          }
        },
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            background: 'linear-gradient(90deg, #FF465D 0%, #BC46BA 100%)', 
          }
        },
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            backgroundColor: '#394ABC',
          }
        },
        {
          props: { variant: 'contained', color: 'neutral' },
          style: {
            backgroundColor: '#626262',
          }
        },
        {
          props: { variant: 'ghost' },
          style: {
            boxShadow: '0',
          }
        }
      ]
    }
  }
});