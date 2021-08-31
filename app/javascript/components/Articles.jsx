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



export default class Articles extends Component {
  render() {
    return (
      <>
        <h1>BOOOOOOOOOM BOOOOM BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM</h1>

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
