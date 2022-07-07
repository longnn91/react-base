import React from "react";
import { Container } from "@mui/system";
import { Button } from "@mui/material";

export default function LandingPage() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "#fff",
      }}
    >
      {/*
                Appbar
                Banner
                Promotions
                Title
                Products
                Footer
                SearchBox
                AppDrawer
            */}
      Hello world
      <Button variant="contained">Test</Button>
    </Container>
  );
}
