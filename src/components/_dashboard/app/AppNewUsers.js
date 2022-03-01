// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography, Box } from '@mui/material';
// utils
import { dashboard } from '../../../_mocks_/account';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2.3),
  boxShadow: '0px 25px 35px 0px lightgray',
  color: '#000000',
  backgroundColor: 'white'
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: '0rem 1rem 0rem 0rem',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  color: theme.palette.info.dark,
  backgroundColor: '#C2EFF0'
}));

// ----------------------------------------------------------------------

const TOTAL = 1352831;

export default function AppNewUsers() {
  return (
    <RootStyle>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          mb: '1rem'
        }}
      >
        <IconWrapperStyle>
          <img src={dashboard.piggybankIcon} alt="piggybankIcon" width={24} height={24} />
        </IconWrapperStyle>
        <Typography variant="h7">Saving for rainy days</Typography>
      </Box>
      <Typography
        sx={{
          mb: '0.8rem'
        }}
        variant="h3"
      >
        N400.000
      </Typography>
      <img src={dashboard.progressBar} alt="progressBar" />
    </RootStyle>
  );
}
