// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography, Box } from '@mui/material';
// utils
import { bottomBoard } from '../../../_mocks_/account';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  padding: theme.spacing(2.5, 2.3, 4.5, 2.3),
  color: 'white',
  backgroundColor: '#265859',
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  cursor: 'pointer'
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative'
}));

// ----------------------------------------------------------------------

const TOTAL = 714000;

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
        <Typography width="60%" gutterBottom fontWeight="700" variant="h7">
          Invest in a Female Farmer
        </Typography>
        <Typography
          sx={{
            fontSize: '0.7rem',
            color: '#FBEAEF'
          }}
          variant="body-2"
        >
          Get up to 25% returns per anum
        </Typography>
      </Box>
      <img style={imgStyle} src={bottomBoard.femaleFarmer} alt="femaleSaver" />
    </RootStyle>
  );
}

const imgStyle = {
  position: 'relative',
  top: '1rem',
  left: '50%'
};
