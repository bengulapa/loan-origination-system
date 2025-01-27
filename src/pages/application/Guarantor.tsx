import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import React from 'react';

const Guarantor = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

          <Stack direction='row' spacing={2}>
            <TextField label='Date of birth' fullWidth defaultValue='09' />
            <TextField label='Nationality *' fullWidth />
          </Stack>

          <Typography variant='caption' gutterBottom>
            CONTACT DETAILS
          </Typography>

          <Stack direction='row' spacing={2}>
            <TextField label='Email *' fullWidth />
            <TextField label='Mobile *' fullWidth />
          </Stack>

          <TextField
            label='Address *'
            fullWidth
            defaultValue='9 BRUDEN HALL TCE WONTHAGG VIC 3995'
          />

          <Button variant='outlined' color='primary'>
            ADD ADDRESS MANUALLY
          </Button>

          <div>
            <Typography variant='caption'>PROPERTY BACKED</Typography>
            <RadioGroup row defaultValue='No'>
              <FormControlLabel value='Yes' control={<Radio />} label='Yes' />
              <FormControlLabel value='No' control={<Radio />} label='No' />
            </RadioGroup>
          </div>
          <div>
            <Typography variant='caption'>Ownership type</Typography>
            <RadioGroup row defaultValue='No'>
              <FormControlLabel value='Yes' control={<Radio />} label='Owning' />
              <FormControlLabel value='No' control={<Radio />} label='Owning with Mortgage' />
            </RadioGroup>
          </div>

          <Stack spacing={2}>
            <TextField label='Asset type' fullWidth defaultValue='' />
            <TextField label='Description' fullWidth defaultValue='' />
            <TextField label='Value' fullWidth defaultValue='' />

            <div className='flex justify-center gap-2 pb-4 border-b'>
              <Button variant='contained' size='small'>
                Save
              </Button>

              <Button variant='outlined' size='small'>
                Cancel
              </Button>
            </div>
          </Stack>

          <div className='border-b pb-4'>
            <Typography variant='caption'>DEPENDENTS</Typography>

            <TextField label='Number of adults (including guarantor)' fullWidth defaultValue='' />
            <TextField label='Number of dependents' fullWidth defaultValue='' />
          </div>

          <div className='border-b pb-4'>
            <Typography variant='caption'>eKYC</Typography>

            <div className='flex items-center gap-4'>
              <Typography variant='body2'>
                We are making it easier for you to verify your guarantor's identify, simply send an
                email with our Biometrics Link and the rest is up to the guarantor. Please consult
                our policy for more information about this service.
              </Typography>
              <Button
                variant='contained'
                size='small'
                color='secondary'
                className='flex-none'
                onClick={handleClickOpen}
              >
                Email eKYC link
              </Button>
            </div>
          </div>

          <div className='border-b pb-4'>
            <Typography variant='caption'>ALTERNATE CONTACT</Typography>

            <TextField label='Full name' fullWidth defaultValue='' />
            <TextField label='Email' fullWidth defaultValue='' />
            <TextField label='Mobile' fullWidth defaultValue='' />
            <TextField label='Relationship' fullWidth defaultValue='' />
          </div>
        </Stack>
      </Container>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm'>
        <DialogTitle>Email eKYC Link</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <TextField
              autoFocus
              required
              id='name'
              name='email'
              label='Email Address'
              type='email'
              fullWidth
            />
            <FormControl fullWidth>
              <InputLabel>eKYC Biometrics Link</InputLabel>
              <OutlinedInput
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton>
                      <ContentCopyIcon />
                    </IconButton>
                  </InputAdornment>
                }
                label='eKYC Biometrics Link'
                disabled
                defaultValue='https://oa-biometrics-pilot.azurewebsites.net/2b074eba-be91-407c-8038-b7f1969cc3f6'
              />
            </FormControl>
            <TextField multiline rows={4} label='Message' fullWidth />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant='contained' color='primary' onClick={handleClose}>
            Send email
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Guarantor;
