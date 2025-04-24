import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from '@mui/material';

const LoanStep = () => {
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
    </>
  );
};

export default LoanStep;
