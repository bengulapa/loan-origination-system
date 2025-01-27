import AddIcon from '@mui/icons-material/Add';
import ArticleIcon from '@mui/icons-material/Article';
import PaidIcon from '@mui/icons-material/Paid';
import PercentIcon from '@mui/icons-material/Percent';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Box, Card, CardContent, CardHeader, Grid2, Stack, Typography } from '@mui/material';
import CardTitleHeader from '../components/CardTitleHeader';
import { Color } from '../styles/colors';

const Overview = () => {
  return (
    <Stack spacing={3} className='mb-4 p-4'>
      <Grid2 container spacing={3}>
        <Grid2 size={6}>
          <Card
            variant='outlined'
            className='header-box'
            sx={{ background: Color.secondary, color: Color.white }}
          >
            <CardHeader
              avatar={<PaidIcon />}
              subheader={<CardTitleHeader title='Total Financed Amount' color='white' />}
              sx={{ pb: 0 }}
            />
            <CardContent className='pt-0' sx={{ pl: 7 }}>
              <Typography variant='caption' sx={{ color: Color.lightGray }}>
                285 deals
              </Typography>
              <Typography variant='body2'>$1,292,000 (28 deals approved)</Typography>
              <Box className='flex pl-2' sx={{ color: Color.lightGray }}>
                <Typography variant='caption' className='flex align-center mr-4'>
                  <TrendingUpIcon /> 17%
                </Typography>
                <Typography variant='caption' className='flex align-center'>
                  <AddIcon /> $86,000 this month
                </Typography>
              </Box>
              <Typography variant='body2'>$564,000 (2 deals with missing details)</Typography>
              <Typography variant='body2'>$352,000 (2 deals ready for settlement)</Typography>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 size={3}>
          <Card variant='outlined' className='header-box'>
            <CardHeader
              avatar={<ArticleIcon color='primary' />}
              subheader={<CardTitleHeader title='Applications' />}
              sx={{ pb: 0 }}
            />
            <CardContent className='flex justify-between' sx={{ pt: 0, pl: 7 }}>
              <div className='w-full'>
                <Typography variant='caption' sx={{ color: Color.textGray }}>
                  285 deals
                </Typography>
                <Typography variant='body2'>
                  <span className='font-weight-bold'>2</span> Active
                </Typography>
                <Typography variant='body2'>
                  <span className='font-weight-bold'>4</span> Draft
                </Typography>
                <Typography variant='body2'>
                  <span className='font-weight-bold'>28</span> Archived
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 size={3}>
          <Card variant='outlined' className='header-box'>
            <CardHeader
              avatar={<PercentIcon color='primary' />}
              subheader={<CardTitleHeader title='Conversion' />}
              sx={{ pb: 0 }}
            />
            <CardContent sx={{ pt: 0 }}>
              <Box className='mb-4' sx={{ pl: 7 }}>
                <Typography variant='caption' sx={{ color: Color.textGray }}>
                  2 Withdrawn
                </Typography>
                <Typography variant='h5'>87.5%</Typography>
              </Box>
              <Typography variant='caption' className='flex align-center justify-between'>
                <span>28 Approved</span> <span>4 Declined</span>
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>

      <Grid2 container spacing={3}>
        <Grid2 size={9}>
          <Card variant='outlined'>
            <CardHeader subheader={<CardTitleHeader title='Closed Deals' />} sx={{ pb: 0 }} />
            <CardContent>
              <img
                className='w-full'
                src='/assets/closed-deals-chart.png'
                alt='Closed deals chart'
              />
            </CardContent>
          </Card>
        </Grid2>

        <Grid2 size={3}>
          <Card variant='outlined'>
            <CardHeader subheader={<CardTitleHeader title='Top Asset Types' />} sx={{ pb: 0 }} />
            <CardContent sx={{ pt: 3 }}>
              <img
                className='w-full'
                src='/assets/top-asset-types-chart.png'
                alt='Top asset types chart'
              />
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>

      <Card variant='outlined'>
        <CardContent>
          <CardTitleHeader title='Angle Finance Notifications' />
          <Typography variant='body2' className='mt-2'>
            23/11/2024 - Outage Notification
          </Typography>
          <Typography variant='body2' className='pl-4 mb-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu
            pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt
            id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia
            ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis
            magna.
          </Typography>
          <Typography variant='body2'>15/10/2024 - Angle Finance Turns 5!</Typography>
          <Typography variant='body2' className='pl-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu
            pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt
            id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia
            ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis
            magna.
          </Typography>
        </CardContent>
      </Card>

      <Box>
        <img className='w-full' src='/assets/marketing_banner.svg' alt='red book valuation' />
      </Box>
    </Stack>
  );
};

export default Overview;
