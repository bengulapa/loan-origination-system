import { Box, Grid, TextField, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { AssetDetails } from '../../../models/asset.model';

interface EditableAssetFormProps {
  formData: Partial<AssetDetails>;
  isUnknown?: boolean;
}

const AssetForm = ({ formData, isUnknown }: EditableAssetFormProps) => {
  const [manualAssetEntry, setManualAssetEntry] = useState<Partial<AssetDetails>>(formData);
  const handleManualFormChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setManualAssetEntry((prev) => ({
      ...(prev ?? {}), // Initialize if null
      [name]: value
    }));
  };

  return (
    <Grid container spacing={2}>
      {/* Row 1 */}
      <Grid item xs={12} sm={6} md={6}>
        <Typography variant='caption' display='block'>
          Make
        </Typography>
        <TextField
          name='make'
          value={formData.make || ''}
          onChange={handleManualFormChange}
          fullWidth
          variant='outlined'
          size='small'
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Typography variant='caption' display='block'>
          Model
        </Typography>
        <TextField
          name='model'
          value={formData.model || ''}
          onChange={handleManualFormChange}
          fullWidth
          variant='outlined'
          size='small'
        />
      </Grid>

      {/* Row 2 */}
      <Grid item xs={12} sm={12} md={6}>
        <Typography variant='caption' display='block'>
          Description
        </Typography>
        <TextField
          name='description'
          value={formData.description || ''}
          onChange={handleManualFormChange}
          fullWidth
          variant='outlined'
          size='small'
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Typography variant='caption' display='block'>
          Year of manufacture of the main asset being financed
        </Typography>
        <TextField
          name='year'
          value={formData.year || ''}
          onChange={handleManualFormChange}
          type='number'
          fullWidth
          variant='outlined'
          size='small'
        />
      </Grid>

      {/* Row 3 */}
      <Grid item xs={12} sm={6} md={6}>
        <Typography variant='caption' display='block'>
          Purchase Price
        </Typography>
        {/* Keep price as text/number input, formatting applied on display/save */}
        <TextField
          name='purchasePrice'
          value={formData.purchasePrice || ''}
          onChange={handleManualFormChange}
          type='number'
          fullWidth
          variant='outlined'
          size='small'
          InputProps={{ startAdornment: <Box sx={{ mr: 0.5 }}>$</Box> }}
        />
      </Grid>

      {isUnknown && (
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant='caption' display='block'>
            Description
          </Typography>
          <TextField
            name='description'
            value={formData.description || ''}
            onChange={handleManualFormChange}
            fullWidth
            variant='outlined'
            size='small'
          />
        </Grid>
      )}

      {/* You might add a "Save" or "Submit" button here for the editable form */}
      {/* <Grid item xs={12} sx={{ textAlign: 'right' }}>
        <Button variant="contained" onClick={() => console.log('Saving manual entry:', formData)}>Save Details</Button>
     </Grid> */}
    </Grid>
  );
};

export default AssetForm;
