import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";

import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Button } from "@mui/material";
import Form from "./Form";
import FormDialog from "./FormDialog";
import UpdateDialog from "./UpdateDialog";

import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Tables() {
  const [events, setEvents] = useState([]);

  const fetchData = () => {
    axios
      .get("http://localhost:8080/getEvents")
      .then((res) => {
        setEvents(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletePost = (id) => {
    axios.delete(`http://localhost:8080/deleteById/${id}`);
  };

  const article = { title: "React Hooks PUT Request Example" };

  useEffect(() => {
    // DELETE request using axios with async/await

    deletePost();
  }, []);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="right">NAME</StyledTableCell>
              <StyledTableCell align="right">DESCRIPTION</StyledTableCell>
              <StyledTableCell align="right">ORGANIZER</StyledTableCell>
              <StyledTableCell align="right">DATE</StyledTableCell>
              <StyledTableCell align="right">TYPE</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event) => (
              <StyledTableRow
                key={event.eventId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {event.eventId}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {event.eventName}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {event.eventDescription}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {event.eventOrganizer}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {event.eventDate}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {event.eventType}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button onClick={() => deletePost(event.eventId)}>
                    delete
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <UpdateDialog eventId={event.eventId} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
