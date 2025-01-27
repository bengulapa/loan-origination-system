import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Card,
  CardContent,
  Checkbox,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ApplicantStep = () => {
  const { id } = useParams();
  const [type, setType] = useState('Individual');
  const [age, setAge] = useState(0);
  const [checked, setChecked] = useState([1]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  useEffect(() => {
    if (!id) {
      return;
    }

    if (id.includes('i')) {
      setType('Individual');
    }

    if (id.includes('c')) {
      setType('Company');
    }

    if (id.includes('1')) {
      setAge(1);
    } else {
      setAge(4);
    }
  }, [id]);

  return (
    <>
      <Card className='mt-4'>
        <CardContent>
          <Typography variant='h6' className='text-center mb-4'>
            Now add applicant and guarantor information
          </Typography>

          <Stack spacing={2}>
            <TextField label='ABN' fullWidth defaultValue='012345678910' />
            <TextField label='Entity name' fullWidth defaultValue='Gula Patisserie' />
            <TextField label='ABN active from' fullWidth defaultValue='15/05/1991' />

            {age < 2 && (
              <>
                <Typography variant='body1' className='text-center my-4'>
                  Previous ABN
                </Typography>

                <TextField label='Previous ABN' fullWidth />
              </>
            )}

            {type === 'Company' && (
              <>
                <Accordion defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1-content'
                    id='panel1-header'
                  >
                    <Typography component='span'>Directors</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography component='span'>
                      Select directors as guarantors (at least 2)
                    </Typography>
                    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                      {[0, 1, 2, 3].map((value) => {
                        const labelId = `checkbox-list-secondary-label-${value}`;
                        return (
                          <ListItem
                            key={value}
                            secondaryAction={
                              <Checkbox
                                edge='end'
                                onChange={handleToggle(value)}
                                checked={checked.includes(value)}
                                inputProps={{ 'aria-labelledby': labelId }}
                              />
                            }
                            disablePadding
                          >
                            <ListItemButton>
                              <ListItemAvatar>
                                <Avatar />
                              </ListItemAvatar>
                              <ListItemText
                                id={labelId}
                                primary={`Director ${value + 1}`}
                                secondary={`${value + 1} Dummy Address ${value + 1}`}
                              />
                            </ListItemButton>
                          </ListItem>
                        );
                      })}
                    </List>
                  </AccordionDetails>
                </Accordion>
              </>
            )}
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default ApplicantStep;
