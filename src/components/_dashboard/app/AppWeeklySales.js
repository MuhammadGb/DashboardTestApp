import { Icon } from '@iconify/react';
import androidFilled from '@iconify/icons-ant-design/android-filled';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography, Box } from '@mui/material';
// utils
import { bottomBoard } from '../../../_mocks_/account';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  padding: theme.spacing(2.2, 2.3, 0, 2.3),
  color: 'white',
  backgroundColor: '#E2698D',
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
        <Typography gutterBottom fontWeight="700" variant="h7">
          Create a savings plan
        </Typography>
        <Typography
          sx={{
            fontSize: '0.7rem',
            color: '#FBEAEF'
          }}
          variant="body-2"
        >
          Earn up to 12%
        </Typography>
      </Box>
      <img style={imgStyle} src={bottomBoard.femaleSaver} alt="femaleSaver" />
    </RootStyle>
  );
}

const imgStyle = {
  position: 'relative',
  top: '0rem',
  left: '42%'
};
