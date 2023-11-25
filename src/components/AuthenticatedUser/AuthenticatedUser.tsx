import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { Session } from "next-auth";

interface AuthenticatedUserProps {
  session: Session;
  onClick: () => void;
}

const AuthenticatedUser = ({ session, onClick }: AuthenticatedUserProps) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      {session.user?.image && (
        <Box
          component="img"
          src={session.user?.image}
          alt={`${session.user?.name}'s profile picture`}
          sx={{ width: 60, height: 60, borderRadius: "50%", marginBottom: 2 }}
        />
      )}
      <Typography variant="h5" gutterBottom>
        Hello, {session.user?.name}!
      </Typography>
      <Button onClick={onClick} variant="contained">
        Sign out
      </Button>
    </Grid>
  );
};

export default AuthenticatedUser;
