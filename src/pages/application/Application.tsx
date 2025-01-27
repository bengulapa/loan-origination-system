import {
  Box,
  Button,
  Card,
  CardContent,
  Grid2,
  Step,
  StepLabel,
  Stepper,
  Typography
} from '@mui/material';
import React from 'react';
import ApplicantStep from './ApplicantStep';
import GuarantorsStep from './GuarantorsStep';
import LoanStep from './LoanStep';
import ReviewStep from './ReviewStep';

const Application = () => {
  const steps = ['Loan', 'Applicant', 'Guarantors', 'Review and Send'];
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStep = (step: number) => {
    switch (step) {
      case 0:
        return <LoanStep />;
      case 1:
        return <ApplicantStep />;
      case 2:
        return <GuarantorsStep />;
      case 3:
        return <ReviewStep />;
    }
  };

  return (
    <>
      <Grid2 container className='p-4 bg-purple-100'>
        <Grid2 size={3}>
          <Card className='h-screen'>
            <CardContent>
              <Typography>Chattel Mortgage</Typography>
              <Typography>Motor vehicle up to 4.5t</Typography>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 size={9}>
          <Box className='w-full'>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <div className='p-8'>
              {getStep(activeStep)}

              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                  variant='outlined'
                  color='inherit'
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />

                <Button variant='contained' color='primary' onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Submit Application' : 'Next'}
                </Button>
              </Box>
            </div>
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
};

export default Application;
