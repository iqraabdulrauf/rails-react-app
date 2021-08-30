import React, { Component } from "react";
import { TextField ,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default class App extends Component {
    
  render() {
    return (
      <>
       <form  noValidate autoComplete="off">
       <h1>Hello world, this is your app speaking</h1>
       <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
       <Button variant="contained" color="primary">
          Hello World
        </Button>
       </form>
        
      </>
    );
  }
}
