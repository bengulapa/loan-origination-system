import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';
import TaskIcon from '@mui/icons-material/Task';
import {
  Box,
  Button,
  Card,
  CardContent,
  Collapse,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import React from 'react';
import { Deal } from '../models/application.model';
import { formatCurrency } from '../utils/formatters';

const guarantors = [
  {
    name: 'Spike Spiegel',
    email: 'spike@bebop.com',
    phone: '123-456-7890'
  },
  {
    name: 'Jet Black',
    email: 'jet@bebop.com',
    phone: '123-456-7890'
  }
];

const deals: Deal[] = [
  {
    number: 'CA00044103',
    borrower: 'The Bebop',
    loanAmount: 44200,
    decision: 'Review',
    status: 'Pending - More Info Requested',
    tasks: 2,
    guarantors
  },
  {
    number: 'CA00044102',
    borrower: 'Jet & Spike PartnerShip',
    loanAmount: 95400.12,
    decision: 'Conditionally Approved',
    status: 'Pending - More Info Requested',
    tasks: 0,
    guarantors
  },
  {
    number: 'CA00044101',
    borrower: 'John Doe',
    loanAmount: 6550042,
    decision: 'Declined',
    status: 'Decisioned',
    tasks: 0,
    guarantors
  }
];

function Row(props: { row: Deal }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell component='th' scope='row'>
          {row.number}
        </TableCell>
        <TableCell>{row.borrower}</TableCell>
        <TableCell>{formatCurrency(row.loanAmount)}</TableCell>
        <TableCell>{row.decision}</TableCell>
        <TableCell>{row.status}</TableCell>
        <TableCell>
          {row.tasks > 0 ? (
            <>
              {row.tasks} <TaskIcon />
            </>
          ) : (
            '-'
          )}
        </TableCell>
        <TableCell>
          <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Guarantor</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell align='right'>Phone</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.guarantors.map((gr) => (
                    <TableRow key={gr.name}>
                      <TableCell component='th' scope='row'>
                        {gr.name}
                      </TableCell>
                      <TableCell>{gr.email}</TableCell>
                      <TableCell align='right'>{gr.phone}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const MyDeals = () => {
  return (
    <>
      <Card variant='outlined' className='mb-2'>
        <CardContent sx={{ pt: 1 }}>
          <div className='flex items-center justify-between mb-2'>
            <div className='flex gap-4'>
              <Button variant='contained' color='secondary'>
                Active (3)
              </Button>
              <Button variant='outlined' color='primary'>
                Draft (1)
              </Button>
              <Button variant='outlined' color='primary'>
                Archived (12)
              </Button>
            </div>

            <div className='flex justify-between items-center ml-5'>
              <FormControl variant='standard' sx={{ m: 1, mt: 3, width: '25ch' }}>
                <Input
                  endAdornment={
                    <InputAdornment position='end'>
                      <SearchIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
          </div>

          <TableContainer component={Paper}>
            <Table size='small'>
              <TableHead>
                <TableRow>
                  <TableCell>CA</TableCell>
                  <TableCell>Borrower</TableCell>
                  <TableCell>Loan Amount</TableCell>
                  <TableCell>Decision</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Tasks</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {deals.map((d) => (
                  <Row key={d.number} row={d} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </>
  );
};

export default MyDeals;
