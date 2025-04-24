import { Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { AssetDetails } from '../../../models/asset.model';
import { formatCurrency } from '../../../utils/formatters';

interface IProps {
  details: AssetDetails;
}

const ValuationForm = ({ details }: IProps) => {
  const [purchasePrice, setPurchasePrice] = React.useState(details.purchasePrice || 0);

  const fieldStyles = {
    bgcolor: '#eeeeee', // Light gray background like the screenshot
    '& .MuiInputBase-input.Mui-disabled': {
      // Target disabled input specifically
      WebkitTextFillColor: '#000000', // Ensure text is black even when disabled
      cursor: 'default' // Change cursor to default
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'grey.400' // Add a subtle border
      },
      '&:hover fieldset': {
        borderColor: 'grey.500'
      }
    }
  };

  const priceFieldStyles = {
    ...fieldStyles,
    bgcolor: '#ffffcc', // Yellow background for price
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#e6e600' // Darker yellow border
      },
      '&:hover fieldset': {
        borderColor: '#cccc00'
      }
    }
  };

  return (
    <Grid container spacing={2}>
      {/* Row 1: Condition, Year, Make, Model, Variant */}
      <Grid item xs={12} sm={6} md={2.4}>
        <Typography variant='caption' display='block' gutterBottom>
          Condition
        </Typography>
        <TextField
          fullWidth
          disabled
          value={details.condition || ''}
          variant='outlined'
          size='small'
          sx={fieldStyles}
          InputProps={{ readOnly: true }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={2.4}>
        <Typography variant='caption' display='block' gutterBottom>
          Year
        </Typography>
        <TextField
          fullWidth
          disabled
          value={details.year || ''}
          variant='outlined'
          size='small'
          sx={fieldStyles}
          InputProps={{ readOnly: true }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={2.4}>
        <Typography variant='caption' display='block' gutterBottom>
          Make
        </Typography>
        <TextField
          fullWidth
          disabled
          value={details.make || ''}
          variant='outlined'
          size='small'
          sx={fieldStyles}
          InputProps={{ readOnly: true }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={2.4}>
        <Typography variant='caption' display='block' gutterBottom>
          Model
        </Typography>
        <TextField
          fullWidth
          disabled
          value={details.model || ''}
          variant='outlined'
          size='small'
          sx={fieldStyles}
          InputProps={{ readOnly: true }}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={2.4}>
        {' '}
        {/* Variant takes full width on small screens if needed */}
        <Typography variant='caption' display='block' gutterBottom>
          Variant
        </Typography>
        <TextField
          fullWidth
          disabled
          value={details.variant || ''}
          variant='outlined'
          size='small'
          sx={fieldStyles}
          InputProps={{ readOnly: true }}
        />
      </Grid>

      {/* Row 2: Full model name */}
      <Grid item xs={12}>
        <Typography variant='caption' display='block' gutterBottom>
          Full model name
        </Typography>
        <TextField
          fullWidth
          disabled
          value={details.fullModelName || ''}
          variant='outlined'
          size='small'
          sx={fieldStyles}
          InputProps={{ readOnly: true }}
        />
      </Grid>

      {/* Row 3: Purchase Price */}
      <Grid item xs={12} sm={6} md={4}>
        {' '}
        {/* Adjust width as needed */}
        <Typography variant='caption' display='block' gutterBottom>
          Purchase Price
        </Typography>
        <TextField
          fullWidth
          value={formatCurrency(purchasePrice)}
          variant='outlined'
          size='small'
          sx={priceFieldStyles}
          onChange={(e) => {
            setPurchasePrice(parseFloat(e.target.value.replace(/[^0-9.-]+/g, '')) || 0);
          }}
        />
      </Grid>
    </Grid>
  );
};

export default ValuationForm;
