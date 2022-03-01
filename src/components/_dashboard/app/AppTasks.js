import PropTypes from 'prop-types';
// material
import { Box, Card, Checkbox, Typography, FormControlLabel, Stack, Button } from '@mui/material';
import { dashboard } from '../../../_mocks_/account';

// ----------------------------------------------------------------------

const TASKS = [
  'Create FireStone Logo',
  'Add SCSS and JS files if required',
  'Stakeholder Meeting',
  'Scoping & Estimations',
  'Sprint Showcase'
];

// ----------------------------------------------------------------------

TaskItem.propTypes = {
  task: PropTypes.string,
  checked: PropTypes.bool,
  formik: PropTypes.object
};

function TaskItem({ task, checked, formik, ...other }) {
  const { getFieldProps } = formik;

  return (
    <Stack direction="row" justifyContent="space-between" sx={{ py: 0.75 }}>
      <FormControlLabel
        control={
          <Checkbox {...getFieldProps('checked')} value={task} checked={checked} {...other} />
        }
        label={
          <Typography
            variant="body2"
            sx={{
              ...(checked && {
                color: 'text.disabled',
                textDecoration: 'line-through'
              })
            }}
          >
            {task}
          </Typography>
        }
      />
    </Stack>
  );
}

export default function AppTasks() {
  // const formik = useFormik({
  //   initialValues: {
  //     checked: [TASKS[2]]
  //   },
  //   onSubmit: (values) => {
  //     console.log(values);
  //   }
  // });

  // const { values, handleSubmit } = formik;

  const bannerStyle = {
    color: 'whitesmoke',
    backgroundImage: `url(${dashboard.headerImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: '12px'
  };

  return (
    <Card sx={{ ...bannerStyle }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          padding: '4rem 4rem',
          '@media only screen and (max-device-width: 770px)': {
            flexWrap: 'wrap',
            padding: '4rem 0rem'
          },
          '@media only screen and (max-device-width: 500px)': {
            flexDirection: 'column',
            padding: '1rem 2rem',
            height: '20vh',
            alignItems: 'flex-start',
            justifyContent: 'space-between'
          },
          '@media only screen and (max-device-width: 380px)': {
            height: '30vh'
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '20%',
            ml: '3rem',
            '@media only screen and (max-device-width: 500px)': {
              ml: '0rem'
            }
          }}
        >
          <Typography variant="body-1">Available balance</Typography>
          <Typography variant="h5">₦1,063,345.04</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '20%' }}>
          <Typography variant="body-1">Impact Investments</Typography>
          <Typography variant="h5">₦1,007,345.04</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '20%' }}>
          <Typography variant="body-1">Total Savings</Typography>
          <Typography variant="h5">₦2,007,345.04</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '20%' }}>
          <Typography variant="body-1">Total Returns</Typography>
          <Typography variant="h5">₦56,000.00</Typography>
        </Box>
      </Box>
    </Card>
  );
}
