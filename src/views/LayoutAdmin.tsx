import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme: any) => ({
  button: {
    ...theme.myButton,
  },
}));

const LayoutAdmin = () => {
  const classes = useStyles();
  return (
    <div>
      <Button className={classes.button}>Layout Admin</Button>
    </div>
  );
};

export default LayoutAdmin;
