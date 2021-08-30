import React, { Component } from "react";
import {
  TextField,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  Input,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default class App extends Component {
  render() {
    return (
      <>
        <h1>Welcome to our first rails app with react</h1>

        <FormControl>
          <TextField
            id="standard-full-width"
            label="Name"
            style={{ margin: 8 }}
            placeholder=""
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="standard-full-width"
            label="Company"
            style={{ margin: 8 }}
            placeholder=""
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="standard-full-width"
            label="Email address"
            style={{ margin: 8 }}
            placeholder=""
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <br></br>
          <br></br>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </FormControl>
      </>
    );
  }
}
