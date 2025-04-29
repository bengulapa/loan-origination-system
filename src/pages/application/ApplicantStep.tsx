import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import BusinessForm from './components/BusinessForm';

export interface BusinessDetails {
  abn: string;
  acn: string;
  gstDuration: string; // e.g., "43 months"
  entityName: string;
  entityType: string;
  timeInBusiness: string; // e.g., "43 months"
  status: string; // e.g., "Active"
  businessNames: string[]; // Can have multiple business names
  industryAnzsic: string;
}

// --- Mock Data ---
const mockBusinessDatabase: BusinessDetails[] = [
  {
    abn: '32 616 528 191',
    acn: '603 303 126',
    gstDuration: '43 months',
    entityName: 'ANGLE FINANCE PTY LTD',
    entityType: 'Australian Private Company',
    timeInBusiness: '43 months',
    status: 'Active',
    businessNames: ['ANGLE FINANCE'],
    industryAnzsic: 'Financial and Insurance Services'
  },
  {
    abn: '55 123 456 789',
    acn: '123 456 789',
    gstDuration: '120 months',
    entityName: 'EXAMPLE TRADING CO PTY LTD',
    entityType: 'Australian Private Company',
    timeInBusiness: '10 years',
    status: 'Active',
    businessNames: ['EXAMPLE TRADING', 'EXAMPLE SERVICES'],
    industryAnzsic: 'Retail Trade'
  },
  {
    abn: '98 765 432 100',
    acn: 'N/A', // Some entities might not have an ACN
    gstDuration: '24 months',
    entityName: 'SOLE TRADER SERVICES',
    entityType: 'Sole Trader',
    timeInBusiness: '2 years',
    status: 'Active',
    businessNames: ['SOLE TRADER SERVICES'],
    industryAnzsic: 'Professional, Scientific and Technical Services'
  }
];

const ApplicantStep = () => {
  // State for the search input value
  const [searchValue, setSearchValue] = useState<string>('Angle Finance'); // Default to example
  // State for loading status
  const [loading, setLoading] = useState<boolean>(false);
  // State for the found business details
  const [businessDetails, setBusinessDetails] = useState<BusinessDetails | null>(null);
  // State for search-related messages (e.g., "not found")
  const [searchMessage, setSearchMessage] = useState<string>('');

  // --- Handlers ---

  // Handle changes in the search input field
  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    // Clear results when user starts typing again
    if (businessDetails || searchMessage) {
      setBusinessDetails(null);
      setSearchMessage('');
    }
  };

  // Handle the search button click
  const handleSearch = () => {
    if (!searchValue) return; // Don't search if input is empty

    console.log('Searching for applicant:', searchValue);
    setLoading(true);
    setBusinessDetails(null); // Clear previous results
    setSearchMessage('');

    // Simulate network delay/API call
    setTimeout(() => {
      const searchTerm = searchValue.trim().toUpperCase();

      // Find business details by checking ABN, ACN, or Entity Name (case-insensitive)
      const foundBusiness = mockBusinessDatabase.find(
        (business) =>
          String(business.abn).replace(/\s/g, '') === searchTerm.replace(/\s/g, '') || // Compare ABN (ignore spaces)
          String(business.acn).replace(/\s/g, '') === searchTerm.replace(/\s/g, '') || // Compare ACN (ignore spaces)
          String(business.entityName).toUpperCase() === searchTerm // Compare Entity Name
      );

      if (foundBusiness) {
        setBusinessDetails(foundBusiness);
      } else {
        setSearchMessage(
          `No business found matching "${searchValue}". Please check the ABN, ACN, or Entity Name.`
        );
      }
      setLoading(false);
    }, 1500); // 1.5 second delay
  };

  return (
    <>
      <Card className='mt-4'>
        <CardContent>
          <Typography variant='h6' className='text-center mb-4'>
            Now add the applicant information
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: { xs: 2, sm: 4 },
              width: '100%',
              maxWidth: '800px', // Limit width
              bgcolor: 'transparent'
            }}
          >
            {/* Search Input Section */}
            <Box sx={{ width: '100%', mb: 1 }}>
              <Typography
                variant='subtitle1'
                component='label'
                htmlFor='applicant-search-input'
                sx={{ display: 'block', mb: 1, fontWeight: 'medium' }}
              >
                What are you looking for?
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} alignItems='center'>
                <TextField
                  id='applicant-search-input'
                  variant='outlined'
                  value={searchValue}
                  onChange={handleSearchInputChange}
                  placeholder='(Enter the ABN, ACN OR Entity Name)'
                  fullWidth // Take full width within the Stack item
                  sx={{
                    flexGrow: 1, // Allow text field to grow
                    '& .MuiOutlinedInput-root': {
                      bgcolor: 'white' // White background for input
                      // Skipping specific styling as requested
                    }
                  }}
                />
                {/* Search Button */}
                <Button
                  variant='contained'
                  onClick={handleSearch}
                  disabled={loading || !searchValue} // Disable if loading or input is empty
                >
                  {loading ? <CircularProgress size={24} color='inherit' /> : 'SEARCH'}
                </Button>
              </Stack>
              <Typography
                variant='caption'
                sx={{ display: 'block', mt: 0.5, color: 'text.secondary' }}
              >
                (Enter the ABN, ACN OR Entity Name)
              </Typography>
            </Box>

            {/* Results/Messages Section */}
            <Box sx={{ width: '100%', mt: 2 }}>
              {/* Display Business Details (if found) */}
              {businessDetails && <BusinessForm details={businessDetails} />}

              {/* Display Search Message (e.g., "not found") */}
              {searchMessage && !businessDetails && (
                <Alert severity='warning' sx={{ mt: 3 }}>
                  {searchMessage}
                </Alert>
              )}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default ApplicantStep;
