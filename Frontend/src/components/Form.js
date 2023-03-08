import dayjs from "dayjs";
import React, { useState } from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { Box } from "@mui/system";

import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import axios from "axios";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  NativeSelect,
  FormLabel,
  Button,
} from "@mui/material";

export default function Form() {
  let [eventName, setName] = useState();
  let [eventType, setType] = useState();
  let [eventOrganizer, setOrg] = useState();
  let [eventDate, setDate] = useState(dayjs("2022-04-17"));
  let [eventDescription, setDesc] = useState();

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleType = (event) => {
    setType(event.target.value);
  };
  const handleOrg = (event) => {
    setOrg(event.target.value);
  };
  const handleDesc = (event) => {
    setDesc(event.target.value);
  };
  const handleDate = (date) => {
    setDate(date);
  };

  const postData = () => {
    axios
      .post("http://localhost:8080/", {
        // pass data as object
        eventName: eventName,
        eventDescription: eventDescription,
        eventType: eventType,
        eventOrganizer: eventOrganizer,
        eventDate: eventDate.format("YYYY-MM-DD"),
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <FormControl>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            p: 1,
            m: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
          }}
        >
          <Box>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Name"
              variant="standard"
              sx={{ width: 300 }}
              onChange={handleName}
            />
            <br />
            <br />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker", "DatePicker"]}>
                <DatePicker
                  label="Uncontrolled picker"
                  defaultValue={dayjs("2022-04-17")}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Box>
          <Box sx={{ marginLeft: 10 }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Organizer"
              variant="standard"
              sx={{ width: 300 }}
              onChange={handleOrg}
            />
            <br />
            <br />

            <br />
            <NativeSelect
              defaultValue={30}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
              onChange={handleType}
              sx={{ marginLeft: 4, marginTop: 3, marginBottom: 6, width: 300 }}
            >
              <option value={"workshop"}>Workshop</option>
              <option value={"Hackathon"}>Hackathon</option>
              <option value={"Culturals"}>Culturals</option>
            </NativeSelect>
            <br />
            <FormLabel sx={{ marginLeft: 4 }}>Description</FormLabel>
            <TextField
              id="filled-multiline-static"
              label="Multiline"
              multiline
              rows={5}
              variant="filled"
              sx={{ marginTop: 3, marginLeft: 4, width: 300 }}
              onChange={handleDesc}
            />
          </Box>
        </Box>
        <Button onClick={postData} type="submit">
          post it
        </Button>
      </FormControl>
    </div>
  );
}
