import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import React from 'react';
import Guarantor from './Guarantor';

const GuarantorsStep = () => {
  const [activeTab, setActiveTab] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <TabContext value={activeTab}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label='lab API tabs example'>
            <Tab label='Guarantor One' value='1' />
            <Tab label='Guarantor Two' value='2' />
          </TabList>
        </Box>
        <TabPanel value='1'>
          <Guarantor />
        </TabPanel>
        <TabPanel value='2'>Guarantor Two</TabPanel>
      </TabContext>
    </>
  );
};

export default GuarantorsStep;
