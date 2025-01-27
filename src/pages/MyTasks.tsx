import AttachFileIcon from '@mui/icons-material/AttachFile';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import TaskIcon from '@mui/icons-material/Task';
import {
  Card,
  CardContent,
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
  Tooltip
} from '@mui/material';
import CardTitleHeader from '../components/CardTitleHeader';
import { Task, TaskStatus, TaskType } from '../models/task.model';
import { Color } from '../styles/colors';

const tasks: Task[] = [
  {
    task: 'Upload doc',
    status: TaskStatus.InProgress,
    assignedTo: 'Klein Moretti',
    dateCreated: new Date().toLocaleDateString(),
    sla: '1 day to go',
    attachments: [
      {
        name: 'medicare.pdf',
        dateUploaded: new Date().toLocaleDateString(),
        type: 'pdf'
      }
    ],
    taskType: TaskType.Internal
  },
  {
    task: 'Request bank statement',
    status: TaskStatus.NotStarted,
    assignedTo: 'Klein Moretti',
    dateCreated: new Date().toLocaleDateString(),
    sla: '9 days overdue',
    attachments: [
      {
        name: 'medicare.pdf',
        dateUploaded: new Date().toLocaleDateString(),
        type: 'pdf'
      },
      {
        name: 'medicare.pdf',
        dateUploaded: new Date().toLocaleDateString(),
        type: 'pdf'
      }
    ],
    taskType: TaskType.Internal
  },
  {
    task: 'Confirm applicant address',
    status: TaskStatus.Done,
    assignedTo: 'Klein Moretti',
    dateCreated: new Date().toLocaleDateString(),
    sla: '',
    attachments: [],
    taskType: TaskType.Internal
  },
  {
    task: 'Condition 1',
    status: TaskStatus.Done,
    assignedTo: 'Klein Moretti',
    dateCreated: new Date().toLocaleDateString(),
    sla: '',
    attachments: [],
    taskType: TaskType.CreditCondition,
    conditionMet: true
  },
  {
    task: 'Condition 2',
    status: TaskStatus.InProgress,
    assignedTo: 'Klein Moretti',
    dateCreated: new Date().toLocaleDateString(),
    sla: '1 day to go',
    attachments: [],
    taskType: TaskType.CreditCondition,
    conditionMet: false
  },
  {
    task: 'Condition 3',
    status: TaskStatus.InProgress,
    assignedTo: 'Klein Moretti',
    dateCreated: new Date().toLocaleDateString(),
    sla: '1 day to go',
    attachments: [],
    taskType: TaskType.CreditCondition,
    conditionMet: false
  },
  {
    task: 'Condition 4',
    status: TaskStatus.InProgress,
    assignedTo: 'Klein Moretti',
    dateCreated: new Date().toLocaleDateString(),
    sla: '1 day to go',
    attachments: [],
    taskType: TaskType.CreditCondition,
    conditionMet: false
  }
];

const MyTasks = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case TaskStatus.NotStarted:
        return Color.red;
      case TaskStatus.InProgress:
        return Color.darkOrange;
      case TaskStatus.Done:
        return Color.green;
    }
  };

  const getSLAColor = (sla: string) => {
    if (sla.includes('overdue')) {
      return Color.red;
    } else if (sla.includes('to go')) {
      return Color.darkOrange;
    } else {
      return 'inherit';
    }
  };

  return (
    <>
      <Card variant='outlined' className='mb-2'>
        <CardContent sx={{ pt: 1 }}>
          <div className='flex items-center justify-between mb-2'>
            <div className='flex items-center'>
              <CardTitleHeader title='My Tasks' />

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
            <TaskIcon color='primary' />
          </div>

          <TableContainer component={Paper}>
            <Table size='small'>
              <TableHead>
                <TableRow>
                  <TableCell>Task</TableCell>
                  <TableCell></TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Assigned</TableCell>
                  <TableCell>Date created</TableCell>
                  <TableCell>SLA</TableCell>
                  <TableCell>Attachments</TableCell>
                  <TableCell>Condition Met</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tasks.map((t, index) => (
                  <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component='th' scope='row'>
                      {t.task}
                    </TableCell>
                    <TableCell>
                      <Tooltip title='Edit task'>
                        <IconButton color='secondary'>
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: getStatusColor(t.status)
                      }}
                    >
                      {t.status}
                    </TableCell>
                    <TableCell>{t.assignedTo}</TableCell>
                    <TableCell>{t.dateCreated}</TableCell>
                    <TableCell
                      sx={{
                        color: getSLAColor(t.sla)
                      }}
                    >
                      {t.sla}
                    </TableCell>
                    <TableCell>
                      {t.attachments.map((_, i) => (
                        <AttachFileIcon key={i} />
                      ))}
                    </TableCell>
                    <TableCell>
                      {t.taskType === TaskType.CreditCondition ? (
                        t.conditionMet ? (
                          <CheckBoxIcon />
                        ) : (
                          <CheckBoxOutlineBlankIcon />
                        )
                      ) : (
                        ''
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </>
  );
};

export default MyTasks;
