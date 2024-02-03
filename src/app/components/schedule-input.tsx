'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRange } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { SingleInputTimeRangeField } from '@mui/x-date-pickers-pro/SingleInputTimeRangeField';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CourseName />
    <Professor />
    <TimePicker />
  </React.Fragment>
);

export default function ScheduleInput() {
  const [cards, setCards] = React.useState([card]);

  const handleAddClass = () => {
    setCards([...cards, card]);
  };

  const handleRemoveClass = () => {
    setCards(cards.slice(0, -1));
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      {cards.map((card, index) => (
        <Card key={index} variant="outlined">
          {card}
        </Card>
      ))}
      <Card variant="outlined">
        <React.Fragment>
          <CardActions>
            <Button size="small" onClick={handleAddClass}>
              Add class
            </Button>
            {cards.length > 1 && (
              <Button size="small" onClick={handleRemoveClass}>
                Delete
              </Button>
            )}
            <Button size="small">
              Submit
            </Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}

export function CourseName() {
    const [courseName, setCourseName] = useState<string>('');

    const handleCourseNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedCourseName = e.target.value.replace(/\s/g, '').toUpperCase();
        setCourseName(formattedCourseName);
    };

    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '& > :not(style)': { m: 1, width: '95%' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="CourseName"
                label="Course Name"
                variant="outlined"
                value={courseName}
                onChange={handleCourseNameChange}
            />
        </Box>
    );
}

export function Professor() {
    const [professorName, setProfessorName] = useState<string>('');

    const handleProfessorNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfessorName(e.target.value);
    };

    const capitalizeFirstLetter = (str: string) => {
        return str.replace(/\b\w/g, (char) => char.toUpperCase());
    };

    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '& > :not(style)': { m: 1, width: '95%' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="ProfessorName"
                label="Professor Name"
                variant="outlined"
                value={capitalizeFirstLetter(professorName)}
                onChange={handleProfessorNameChange}
            />
        </Box>
    );
}

export function TimePicker() {
  const [value, setValue] = React.useState<DateRange<Dayjs>>(() => [
    dayjs(null),
    dayjs(null),
  ]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '& > :not(style)': { m: 1, width: '95%' },
        }}
      >
        <SingleInputTimeRangeField
          label="Course Time"
          defaultValue={[dayjs(null), dayjs(null)]}
        />
      </Box>
    </LocalizationProvider>
  );
}