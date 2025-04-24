import {
  Alert,
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import React from 'react';
import ValuationForm from './components/ValuationForm';
import { AssetDisposition, AssetDetails } from '../../models/asset.model';
import AssetForm from './components/AssetForm';

// --- Mock Data ---

// List of asset types for autocomplete suggestions
const assetTypeList = [
  'Sedan',
  'SUV',
  'Truck',
  'Motorcycle',
  'Tractor',
  'Excavator',
  'Laptop',
  'Server'
];

// Mock database of known assets (keyed by VIN/Reg/Serial for simplicity)
const knownAssets = [
  {
    identifierType: 'Registration',
    identifierValue: 'WBE4H74',
    condition: 'Used',
    year: 2023,
    make: 'BMW',
    model: '2',
    variant: '30i M Sport',
    fullModelName: 'BMW 2 30i M SPORT F22 2D COUPE TURBO 4 1997 cc TMPFI 8 SP AUTOMATIC',
    purchasePrice: 33000
  },
  {
    identifierType: 'VIN',
    identifierValue: 'VIN123',
    condition: 'New',
    year: 2024,
    make: 'AutoCorp',
    model: 'FutureCar',
    variant: 'Electric',
    fullModelName: 'AutoCorp FutureCar Electric AWD',
    purchasePrice: 55000
  },
  {
    identifierType: 'SerialNumber',
    identifierValue: 'SERIAL987',
    condition: 'Used',
    year: 2019,
    make: 'HeavyMech',
    model: 'Digger 5000',
    variant: 'Pro',
    fullModelName: 'HeavyMech Digger 5000 Pro',
    purchasePrice: 120000
  },
  {
    identifierType: 'Registration',
    identifierValue: 'BMWTEST',
    condition: 'Used',
    year: 2023,
    make: 'BMW',
    model: '2',
    variant: '30i M Sport',
    fullModelName: 'BMW 2 30i M SPORT F22 2D COUPE TURBO 4 1997 cc TMPFI 8 SP AUTOMATIC',
    purchasePrice: 33000
  }
];

// Mock data for previously reviewed assets as an ARRAY
const reviewedAssets: AssetDisposition[] = [
  { identifierValue: 'Tractor', disposition: 'Approve', message: 'Asset previously approved.' },
  {
    identifierValue: 'Caravan',
    disposition: 'Decline',
    message: 'Asset declined due to condition.'
  },
  {
    identifierValue: 'Solar Panel',
    disposition: 'Refer',
    message: 'Asset requires further review.'
  }
];

const AssetStep = () => {
  // State for the input value (controlled by Autocomplete now)
  const [inputValue, setInputValue] = React.useState('');
  // State for the selected/entered asset identifier
  const [assetIdentifier, setAssetIdentifier] = React.useState(''); // Default to test value
  // State for loading status during search
  const [loading, setLoading] = React.useState(false);
  // State to store fetched asset details
  const [assetDetails, setAssetDetails] = React.useState<AssetDetails | null>(null);
  // State for search-related messages (e.g., "no match")
  const [searchMessage, setSearchMessage] = React.useState('');
  // State for previously reviewed asset disposition
  const [assetDisposition, setAssetDisposition] = React.useState<AssetDisposition | null>(null); // { disposition: 'Approve' | 'Refer' | 'Decline', message: string }

  // --- Handlers ---

  // Simulate API call for searching asset details
  const handleSearch = () => {
    console.log('Searching for:', assetIdentifier);
    if (!assetIdentifier) return; // Don't search if identifier is empty

    setLoading(true);
    setAssetDetails(null);
    setSearchMessage('');
    setAssetDisposition(null);

    // Simulate network delay
    setTimeout(() => {
      const currentIdentifier = String(assetIdentifier).toUpperCase(); // Case-insensitive comparison

      // Find asset details by iterating through the knownAssets array
      const foundAsset = knownAssets.find(
        (asset) => String(asset.identifierValue).toUpperCase() === currentIdentifier
      );

      // Find review status by iterating through the reviewedAssets array
      const reviewStatus = reviewedAssets.find(
        (review) => String(review.identifierValue).toUpperCase() === currentIdentifier
      );

      if (foundAsset) {
        setAssetDetails(foundAsset);
        // Check review status specifically for the found asset's identifier
        if (reviewStatus) {
          setAssetDisposition(reviewStatus);
        }
      } else {
        // Asset details not found
        setSearchMessage(
          `We don't have the specific details for "${assetIdentifier}". Treating as unknown asset type.`
        );
        // Still display review status if found, even if details are missing
        if (reviewStatus) {
          setAssetDisposition(reviewStatus);
        }
      }
      setLoading(false);
    }, 1000);
  };

  const handleUploadImage = () => {
    console.log('Upload Image clicked');
    setAssetDetails(null);
    setSearchMessage('');
    setAssetDisposition(null);
    // Add image upload logic here
  };

  const handleUploadInvoice = () => {
    console.log('Upload Invoice clicked');
    setAssetDetails(null);
    setSearchMessage('');
    setAssetDisposition(null);
    // Add invoice upload logic here
  };

  return (
    <Card>
      <CardContent>
        <Typography variant='h6' component='div' className='text-center mb-4'>
          Let's start with the asset
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Center items horizontally
            p: { xs: 2, sm: 4 }, // Responsive padding
            width: '100%'
          }}
        >
          <Box sx={{ width: '100%', mb: 3 }}>
            <Typography
              variant='subtitle1'
              component='label'
              htmlFor='asset-autocomplete'
              sx={{ display: 'block', fontWeight: 'medium' }}
            >
              What are you getting financed?
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.5}
              sx={{ flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}
            >
              <Autocomplete
                id='asset-autocomplete'
                freeSolo
                options={assetTypeList}
                value={assetIdentifier}
                onChange={(event, newValue) => {
                  setAssetIdentifier(newValue || '');
                  setAssetDetails(null);
                  setSearchMessage('');
                  setAssetDisposition(null);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                  const isOption =
                    assetTypeList.includes(newInputValue) ||
                    Object.keys(knownAssets).includes(newInputValue.toUpperCase());
                  if (!isOption) {
                    setAssetIdentifier(newInputValue);
                  } else {
                    // If it matches an option exactly (case insensitive for knownAssets), update identifier
                    const upperInput = newInputValue.toUpperCase();
                    if (Object.keys(knownAssets).includes(upperInput)) {
                      setAssetIdentifier(upperInput);
                    } else if (assetTypeList.includes(newInputValue)) {
                      setAssetIdentifier(newInputValue);
                    }
                  }
                  if (event && event.type === 'change') {
                    setAssetDetails(null);
                    setSearchMessage('');
                    setAssetDisposition(null);
                  }
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant='outlined'
                    placeholder='(Enter Asset type, Registration, VIN, Serial Number OR Other)'
                  />
                )}
                sx={{ width: '240px' }} // Responsive width
              />
              <Button
                variant='contained'
                onClick={handleSearch}
                disabled={loading || !assetIdentifier}
              >
                {loading ? <CircularProgress size={24} color='inherit' /> : 'SEARCH'}
              </Button>

              <Typography variant='body2' sx={{ color: 'text.secondary', fontWeight: 'medium' }}>
                OR
              </Typography>

              <Button variant='contained' onClick={handleUploadImage}>
                UPLOAD AN IMAGE
              </Button>
              <Typography variant='body2' sx={{ color: 'text.secondary', fontWeight: 'medium' }}>
                OR
              </Typography>
              <Button variant='contained' onClick={handleUploadInvoice}>
                UPLOAD AN INVOICE
              </Button>
            </Stack>
            <Typography
              variant='caption'
              sx={{ display: 'block', mt: 0.5, color: 'text.secondary' }}
            >
              (Enter the Asset type, Registration, VIN, Serial Number OR Other)
            </Typography>
          </Box>

          {/* Results/Messages Section */}
          <Box sx={{ width: '100%', mt: 2 }}>
            {/* Display Asset Disposition (if any) - Placed above details */}
            {assetDisposition && (
              <Alert
                severity={
                  assetDisposition.disposition === 'Approve'
                    ? 'success'
                    : assetDisposition.disposition === 'Decline'
                    ? 'error'
                    : 'warning'
                }
                sx={{ mb: 2 }}
              >
                {assetDisposition.message} (Status: {assetDisposition.disposition})
              </Alert>
            )}

            {/* Display Asset Details Form (if found) */}
            {assetDetails && <ValuationForm details={assetDetails} />}

            {/* Display Search Message (e.g., "no match") */}
            {searchMessage &&
              !assetDetails && ( // Show only if no details were found
                /*                 <Alert severity='info' sx={{ mb: 2 }}>
                  {searchMessage}
                </Alert> */

                <AssetForm formData={{}} />
              )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AssetStep;
