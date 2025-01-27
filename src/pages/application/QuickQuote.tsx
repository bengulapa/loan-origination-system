import {
  Alert,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid2,
  MenuItem,
  Radio,
  RadioGroup,
  TextField
} from '@mui/material';

const QuickQuoteForm = () => {
  return (
    <>
      <Grid2 container spacing={3}>
        <Grid2 size={4}>
          <TextField
            select
            label='Asset type'
            fullWidth
            defaultValue='Caravan'
            helperText='Chattel Mortgage - Primary'
          >
            <MenuItem value='Caravan'>Caravan</MenuItem>
          </TextField>

          <TextField label='Year of manufacture' type='number' fullWidth defaultValue='2022' />

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
        </Grid2>

        <Grid2 size={4}>
          <TextField label='Total asset value' type='number' fullWidth defaultValue='50000.00' />
          <TextField label='Deposit amount' type='number' fullWidth defaultValue='12000.00' />
          <TextField label='Origination fee' type='number' fullWidth defaultValue='500.00' />

          <FormControl className='mt-4'>
            <FormLabel className='text-sm'>Brokerage (inc. GST)</FormLabel>
            <RadioGroup row name='repaymentTiming'>
              <FormControlLabel value='1' control={<Radio />} label='5.00%' />
              <FormControlLabel value='2' control={<Radio />} label='$0.05' />
            </RadioGroup>
          </FormControl>
        </Grid2>

        <Grid2 size={4}>
          <TextField label='Repayment term (in years)' type='number' fullWidth defaultValue='5' />

          <FormControl className='mt-4'>
            <FormLabel className='text-sm'>Balloon payment</FormLabel>
            <RadioGroup row name='repaymentTiming'>
              <FormControlLabel value='1' control={<Radio />} label='5.00%' />
              <FormControlLabel value='2' control={<Radio />} label='$0.05' />
            </RadioGroup>
          </FormControl>

          <TextField select label='Business age' fullWidth defaultValue='2-4 years'>
            <MenuItem value='2-4 years'>2-4 years</MenuItem>
          </TextField>
          <TextField select label='GST registration' fullWidth defaultValue='2+ years'>
            <MenuItem value='2+ years'>2+ years</MenuItem>
          </TextField>
          <FormControl className='mt-4'>
            <FormLabel className='text-sm'>Property Owner?</FormLabel>
            <RadioGroup row name='repaymentTiming'>
              <FormControlLabel value='1' control={<Radio />} label='Yes' />
              <FormControlLabel value='2' control={<Radio />} label='No' />
            </RadioGroup>
          </FormControl>
        </Grid2>

        <div className='flex gap-8 py-2 bg-purple-100 w-full justify-center'>
          <div className='text-center'>
            Finance amount <div className='font-medium'>$40,400.00</div>
          </div>
          <div className='text-center'>
            Base interest rate <div className='font-medium'>10.25%</div>
          </div>
          <div className='text-center'>
            Monthly payments <div className='font-medium'>$856.05</div>
          </div>
        </div>

        <Alert severity='warning'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu
          pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt
          id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia
          ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna.
          Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam
          mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius
          pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci
          ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare
          accumsan, blandit sed diam.
        </Alert>
      </Grid2>
    </>
  );
};

export default QuickQuoteForm;
