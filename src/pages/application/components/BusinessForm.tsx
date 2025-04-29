import { Box, Divider, Grid, TextField, Typography } from '@mui/material';
import { BusinessDetails } from '../ApplicantStep';

interface IProps {
  details: BusinessDetails;
}

const BusinessForm = ({ details }: IProps) => {
  return (
    <Box sx={{ border: '1px solid #ccc', p: 3, borderRadius: 1, bgcolor: 'white', mt: 3 }}>
      <Typography variant='h6' gutterBottom sx={{ mb: 2 }}>
        Applicant Details Found
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Grid container spacing={2}>
        {/* Row 1 */}
        <Grid item xs={12} sm={4}>
          <Typography variant='caption' display='block' gutterBottom sx={{ fontWeight: 'medium' }}>
            ABN
          </Typography>
          <TextField
            fullWidth
            disabled
            value={details.abn || ''}
            variant='outlined'
            size='small'
            InputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant='caption' display='block' gutterBottom sx={{ fontWeight: 'medium' }}>
            ACN
          </Typography>
          <TextField
            fullWidth
            disabled
            value={details.acn || ''}
            variant='outlined'
            size='small'
            InputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant='caption' display='block' gutterBottom sx={{ fontWeight: 'medium' }}>
            GST
          </Typography>
          <TextField
            fullWidth
            disabled
            value={details.gstDuration || ''}
            variant='outlined'
            size='small'
            InputProps={{ readOnly: true }}
          />
        </Grid>

        {/* Row 2 */}
        <Grid item xs={12} sm={4}>
          <Typography variant='caption' display='block' gutterBottom sx={{ fontWeight: 'medium' }}>
            Entity name
          </Typography>
          <TextField
            fullWidth
            disabled
            value={details.entityName || ''}
            variant='outlined'
            size='small'
            InputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant='caption' display='block' gutterBottom sx={{ fontWeight: 'medium' }}>
            Entity type
          </Typography>
          <TextField
            fullWidth
            disabled
            value={details.entityType || ''}
            variant='outlined'
            size='small'
            InputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant='caption' display='block' gutterBottom sx={{ fontWeight: 'medium' }}>
            Time in business
          </Typography>
          <TextField
            fullWidth
            disabled
            value={details.timeInBusiness || ''}
            variant='outlined'
            size='small'
            InputProps={{ readOnly: true }}
          />
        </Grid>

        {/* Row 3 */}
        <Grid item xs={12} sm={4}>
          <Typography variant='caption' display='block' gutterBottom sx={{ fontWeight: 'medium' }}>
            Status
          </Typography>
          <TextField
            fullWidth
            disabled
            value={details.status || ''}
            variant='outlined'
            size='small'
            InputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant='caption' display='block' gutterBottom sx={{ fontWeight: 'medium' }}>
            Business names
          </Typography>
          {/* Join array of names, or display single name */}
          <TextField
            fullWidth
            disabled
            value={details.businessNames?.join(', ') || ''}
            variant='outlined'
            size='small'
            InputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant='caption' display='block' gutterBottom sx={{ fontWeight: 'medium' }}>
            Industry (ANSZIC)
          </Typography>
          <TextField
            fullWidth
            disabled
            value={details.industryAnzsic || ''}
            variant='outlined'
            size='small'
            InputProps={{ readOnly: true }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BusinessForm;
