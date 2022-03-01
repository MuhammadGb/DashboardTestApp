// material
import { styled } from '@mui/material/styles';
import { Card, Typography, Box, Button } from '@mui/material';
// utils
import { bottomBoard } from '../../../_mocks_/account';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  padding: theme.spacing(2.5, 2.3, 3.5, 2.3),
  color: 'white',
  backgroundColor: '#F2F1F3',
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  cursor: 'pointer'
}));

// ----------------------------------------------------------------------

export default function AppWeeklySales() {
  return (
    <RootStyle>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          position: 'absolute'
        }}
      >
        <Typography width="60%" gutterBottom fontWeight="700" color="#E2698D" variant="h7">
          Invite your girls to HerVest
        </Typography>
        <Typography
          sx={{
            fontSize: '0.7rem',
            color: '#37474F'
          }}
          variant="body-2"
        >
          Share you girl code.
        </Typography>
        <Box
          sx={{
            position: 'relative',
            top: '2rem'
          }}
        >
          <Button
            sx={{
              background: '#E2698D',
              color: 'white',
              mr: '1rem'
            }}
          >
            HG7FIB
          </Button>
          <Typography gutterBottom color="#265859" variant="body-2">
            Share
          </Typography>
        </Box>
      </Box>
      <img style={imgStyle} src={bottomBoard.richFemales} alt="femaleSaver" />
    </RootStyle>
  );
}

const imgStyle = {
  position: 'relative',
  top: '0.5rem',
  left: '50%'
};
