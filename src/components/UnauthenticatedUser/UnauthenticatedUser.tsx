import React from "react";
import { Button, Typography, Grid } from "@mui/material";

interface UnauthenticatedUserProps {
  onClick: () => void;
}

const UnauthenticatedUser = ({ onClick }: UnauthenticatedUserProps) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h6" gutterBottom>
        Not signed in
      </Typography>
      <Button onClick={onClick} variant="contained">
        Sign in
      </Button>
    </Grid>
  );
};

export default UnauthenticatedUser;
