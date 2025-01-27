import { CheckBox } from '@mui/icons-material';
import { Card, CardContent, Link, TextField, Typography } from '@mui/material';

const ReviewStep = () => {
  return (
    <>
      <Card className='mb-4'>
        <CardContent>
          <Typography variant='h6' component='div' className='text-center mb-4'>
            Indicative Quote
          </Typography>

          <div className='bg-purple-200 flex justify-around text-center py-4'>
            <div>
              <span className='text-purple-500 text-sm'>Finance Amount</span>
              <div>47,750.00</div>
            </div>
            <div>
              <span className='text-purple-500 text-sm'>Repayment Term & Timing</span>
              <div>5 Years, In Advance</div>
            </div>
            <div>
              <span className='text-purple-500 text-sm'>Brokerage incl. GST</span>
              <div>$2,250.00</div>
            </div>
            <div>
              <span className='text-purple-500 text-sm'>Repayment Amount</span>
              <div>927.00 M0nthly</div>
            </div>
            <div>
              <span className='text-purple-500 text-sm'>Base Interest Rate</span>
              <div>8.5%</div>
            </div>
          </div>

          <div className='text-center my-4'>
            <Typography>Thank you!</Typography>
            <Typography>
              The application can be submitted when all required information is provided.
            </Typography>
          </div>
        </CardContent>
      </Card>
      <Card className='mb-4'>
        <CardContent>
          <Typography variant='h6' component='div' className='text-center mb-4'>
            Business Details
          </Typography>
          <TextField
            label='Business background'
            fullWidth
            multiline
            rows={4}
            placeholder='What does the business do? Website or other evidence of business presence. 
              Background to include detail on the industry in which the customer operates, historical or director experience, details of work source/contracts. 
              Provide explanation of recent credit enquiries (past 30 days) from other financiers.'
          />{' '}
          <TextField
            label='Business use'
            fullWidth
            multiline
            rows={4}
            placeholder='What does the business do? Website or other evidence of business presence. 
            Background to include detail on the industry in which the customer operates, historical or director experience, details of work source/contracts. 
            Provide explanation of recent credit enquiries (past 30 days) from other financiers.'
          />
        </CardContent>
      </Card>
      <Card className='mb-4'>
        <CardContent>
          <Typography variant='h6' component='div' className='text-center mb-4'>
            Supporting documents
          </Typography>

          <div className='w-full border text-align p-6 my-2'>Drop files here or browse</div>

          <div className=' w-1/2 mx-auto'>
            <div className=''>
              <CheckBox /> <Link>Broker Privacy Consent Disclaimer</Link>
            </div>
            <div className=''>
              <CheckBox /> <Link>Attach Applicant/Guarantor Privacy Consent Form</Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ReviewStep;
