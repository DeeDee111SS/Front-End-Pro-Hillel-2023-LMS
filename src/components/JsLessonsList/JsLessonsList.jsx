import * as React from 'react';
import { Link } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Title';
import { useGetLessonsQuery } from '../../store/lessonsApi';
import { capitalizeFirstLetter, formatDate } from "../../utils/HELPER_FUNCS";
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MUILink from '@mui/material/Link';

export default function JsLessonsList() {
  const {data, isLoading} = useGetLessonsQuery();

  if(isLoading) return <h3>Loading ...</h3>;

  function preventDefault(event) {
    event.preventDefault();
  }

  return (
    <React.Fragment>
      <Title>JS Lessons</Title>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Topic</TableCell>           
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(-10).reverse().map((row) => (
              <TableRow key={row.id}>
              <TableCell>{formatDate(row.createdAt)}</TableCell>
              <TableCell>#{row.id} {capitalizeFirstLetter(row.title)}</TableCell>
              
              <TableCell align="right">
                <Link to={`/lessons/${row.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button variant="contained" endIcon={<ArrowForwardIosIcon />}>
                        Go to lesson
                    </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <MUILink color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        <Link to={'/lessons'} style={{ textDecoration: 'none', color: 'inherit' }}>
          Go to Lessons page
        </Link>
      </MUILink>
    </React.Fragment>
  );
}