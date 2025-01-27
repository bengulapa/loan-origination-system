import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography
} from '@mui/material';

const Guarantor = () => {
  return (
    <>
      <Container component={Paper} className='p-2'>
        <Stack spacing={2}>
          <Typography variant='caption' gutterBottom>
            BASIC
          </Typography>
          <Stack direction='row' spacing={2}>
            <TextField label='First Name' fullWidth defaultValue='Ben' />
            <TextField label='Middle Name' fullWidth defaultValue='Middle' />
            <TextField label='Surname' fullWidth defaultValue='Last' />
          </Stack>

          <div className='flex'>
            <Stack direction='row' spacing={2}></Stack>
            <Grid container spacing={2}>
              <Typography variant='caption' gutterBottom>
                Date of Birth *
              </Typography>
              <Grid item xs={4}>
                <TextField label='Day' fullWidth defaultValue='09' />
              </Grid>
              <Grid item xs={4}>
                <TextField label='Month' fullWidth defaultValue='09' />
              </Grid>
              <Grid item xs={4}>
                <TextField label='Year' fullWidth defaultValue='1963' />
              </Grid>
            </Grid>
          </div>

          <Grid item xs={12}>
            <TextField label='Nationality *' fullWidth />
          </Grid>

          <Grid item xs={12}>
            <Typography variant='h6' gutterBottom>
              CONTACT DETAILS
            </Typography>
            <TextField label='Email *' fullWidth />
          </Grid>

          <Grid item xs={12}>
            <TextField label='Mobile *' fullWidth />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label='Address *'
              fullWidth
              defaultValue='9 BRUDEN HALL TCE WONTHAGG VIC 3995'
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant='outlined' color='primary'>
              ADD ADDRESS MANUALLY
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Typography variant='h6' gutterBottom>
              PROPERTY BACKED
            </Typography>
            <RadioGroup row defaultValue='No'>
              <FormControlLabel value='Yes' control={<Radio />} label='Yes' />
              <FormControlLabel value='No' control={<Radio />} label='No' />
            </RadioGroup>
          </Grid>

          <Grid item xs={12}>
            <TextField label='Customize Ownership Type' fullWidth />
          </Grid>

          <Grid item xs={12}>
            <TextField label='Property' fullWidth />
          </Grid>

          <Grid item xs={12}>
            <TextField label='Runtime' fullWidth />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel control={<Checkbox />} label='Boarding' />
          </Grid>
        </Stack>
      </Container>
    </>
  );
};

export default Guarantor;
