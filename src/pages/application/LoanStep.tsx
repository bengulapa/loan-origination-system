import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid2,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from '@mui/material';
import React from 'react';

const LoanStep = () => {
  const [knownReg, setKnownReg] = React.useState('Yes');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKnownReg((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <Card className=''>
        <CardContent>
          <Typography variant='h6' component='div' className='text-center mb-4'>
            Let's start with calculating the loan
          </Typography>

          <TextField label='Total asset value' type='number' fullWidth defaultValue='50000.00' />
          <TextField label='Deposit amount' type='number' fullWidth defaultValue='12000.00' />
          <TextField
            label='Origination fee'
            type='number'
            fullWidth
            defaultValue='500.00'
            helperText='0 - $1400 incl. GST'
          />
          <FormControl className='mt-4'>
            <FormLabel className='text-sm'>Brokerage (inc. GST)</FormLabel>
            <RadioGroup row name='repaymentTiming'>
              <FormControlLabel value='1' control={<Radio />} label='5.00%' />
              <FormControlLabel value='2' control={<Radio />} label='$0.05' />
            </RadioGroup>
          </FormControl>

          <Typography variant='h6'>Total: $47,750.00</Typography>

          <TextField select label='Loan purpose' fullWidth defaultValue='New lend'>
            <MenuItem value='New lend'>New lend</MenuItem>
          </TextField>
          <TextField label='Repayment term (in years)' type='number' fullWidth defaultValue='5' />
          <TextField select label='Repayment frequency' fullWidth defaultValue='Monthly'>
            <MenuItem value='Monthly'>Monthly</MenuItem>
          </TextField>
          <FormControl className='mt-4'>
            <FormLabel className='text-sm'>Repayment timing</FormLabel>
            <RadioGroup row name='repaymentTiming'>
              <FormControlLabel value='1' control={<Radio />} label='In arrear' />
              <FormControlLabel value='2' control={<Radio />} label='In advance' />
            </RadioGroup>
          </FormControl>
          <FormControl className='mt-4'>
            <FormLabel className='text-sm'>Balloon payment</FormLabel>
            <RadioGroup row name='repaymentTiming'>
              <FormControlLabel value='1' control={<Radio />} label='5.00%' />
              <FormControlLabel value='2' control={<Radio />} label='$0.05' />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>

      <Card className='mt-4'>
        <CardContent>
          <Typography variant='h6' component='div' className='text-center mb-4'>
            The Asset Being Financed
          </Typography>

          <Grid2 container spacing={1}>
            <Grid2 size={12}>
              <Typography gutterBottom>Is it a private sale?</Typography>
              <RadioGroup row defaultValue='No'>
                <FormControlLabel value='Yes' control={<Radio />} label='Yes' />
                <FormControlLabel value='No' control={<Radio />} label='No' />
              </RadioGroup>
            </Grid2>

            <Grid2 size={12}>
              <TextField label='Supplier name' fullWidth defaultValue='Volkswagen Bayside' />
            </Grid2>

            <Grid2 size={12}>
              <TextField label='Supplier ABN' fullWidth defaultValue='331974755' />
            </Grid2>

            <Grid2 size={12}>
              <Typography gutterBottom>Do you know the motor vehicle registration?</Typography>
              <RadioGroup row value={knownReg} onChange={handleChange}>
                <FormControlLabel value='Yes' control={<Radio />} label='Yes' />
                <FormControlLabel value='No' control={<Radio />} label='No' />
              </RadioGroup>
            </Grid2>

            {knownReg === 'Yes' ? (
              <>
                <TextField label='Registration' fullWidth defaultValue='SFG 478' />
                <TextField select label='State' fullWidth defaultValue='VIC'>
                  <MenuItem value='VIC'>VIC</MenuItem>
                  <MenuItem value='NSW'>NSW</MenuItem>
                  <MenuItem value='QLD'>QLD</MenuItem>
                  <MenuItem value='SA'>SA</MenuItem>
                  <MenuItem value='WA'>WA</MenuItem>
                  <MenuItem value='TAS'>TAS</MenuItem>
                  <MenuItem value='NT'>NT</MenuItem>
                  <MenuItem value='ACT'>ACT</MenuItem>
                </TextField>
              </>
            ) : (
              <>
                <TextField label='Make' fullWidth defaultValue='Volkswager' />
                <TextField label='Model' fullWidth defaultValue='Golf' />
                <TextField label='Year' fullWidth defaultValue='2022' />
              </>
            )}
          </Grid2>
        </CardContent>
      </Card>
    </>
  );
};

export default LoanStep;
