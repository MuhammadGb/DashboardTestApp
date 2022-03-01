// material
import { Box, Grid, Container, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
// components
import Page from '../components/Page';
import {
  AppTasks,
  AppWeeklySales,
  AppNewUsers,
  AppCurrentVisits,
  AppBugReports
} from '../components/_dashboard/app';
import { account, dashboard } from '../_mocks_/account';

// ----------------------------------------------------------------------

const IconWrapperStyle = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: '50%',
  right: '0.15%',
  boxShadow: '0px 25px 35px 0px #00000008',
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(6),
  height: theme.spacing(6),
  justifyContent: 'center',
  color: theme.palette.warning.dark,
  backgroundColor: '#FFFFFF'
}));

export default function DashboardApp() {
  return (
    <Page title="Dashboard Test">
      <Container maxWidth="xl">
        <Box sx={{ pb: 2, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img src={account.photoURL} alt="avatar" />
          <Box sx={{ ml: 2 }}>
            <Typography color="gray" variant="body">
              Hello,
            </Typography>
            <Typography color="gray" variant="h4">
              Oluwatobi
            </Typography>
          </Box>
        </Box>
        <Grid item xs={12} md={12} lg={12}>
          <AppTasks />
        </Grid>
        <Grid item xs={12} md={6} lg={12}>
          <Box sx={{ pt: 4.5 }}>
            <Typography sx={{ pb: 1.5 }} color="gray" variant="h3">
              Watch your plans
            </Typography>
            <Typography color="gray" variant="body-1">
              A goal without a plan is just a wish
            </Typography>
          </Box>
        </Grid>
        <Box sx={{ py: 1.5 }}> </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <AppNewUsers />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppNewUsers />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppNewUsers />
          </Grid>
        </Grid>
        <Box sx={{ py: 2.6 }}> </Box>
        <IconWrapperStyle>
          <img src={dashboard.sideArrow} alt="sideArrow" />
        </IconWrapperStyle>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <AppWeeklySales />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppBugReports />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
