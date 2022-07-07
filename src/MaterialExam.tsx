import React from "react";
import { Button, Container, Input, Paper } from "@mui/material";
import _Button, { _ButtonDiv, _HoverMidButton } from "./components/UI/_Button";

const MaterialExam = () => {
  return (
    <Container maxWidth="xs">
      <Paper
        sx={{
          marginTop: "2rem",
          padding: "1rem",
        }}
      >
        <Input fullWidth placeholder="Fist name"></Input>
        <Input fullWidth placeholder="Last name"></Input>
        <Input fullWidth placeholder="Email"></Input>
        <Input fullWidth placeholder="Website"></Input>
        <Button variant="contained" color="secondary">
          Text button
        </Button>
        <_Button>Custom button</_Button>
        <_HoverMidButton>Hover button</_HoverMidButton>
        <_ButtonDiv is-me="true">Button div</_ButtonDiv>
      </Paper>
    </Container>
  );
};

export default MaterialExam;
