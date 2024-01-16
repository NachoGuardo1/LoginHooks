import { Avatar, Grid, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
export const FooterApp = () => {
  return (
    <Grid container width="100%" bgcolor="lightgrey" padding={2} marginTop={3}>
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        marginBottom={2}
      >
        <IconButton
          href="https://www.linkedin.com/in/ignacioguardoruiz/"
          target="_blank"
        >
          <Avatar>
            <LinkedInIcon />
          </Avatar>
        </IconButton>
        <IconButton href="https://github.com/NachoGuardo1" target="_blank">
          <Avatar>
            <GitHubIcon />
          </Avatar>
        </IconButton>
      </Grid>
      <Grid item xs={12} display="flex" alignItems="center" direction="column">
        <Typography variant="body2" color="text.secondary" fontWeight={550}>
          Contact Me
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          fontWeight={550}
          gutterBottom
        >
          Ignacio Guardo Ruiz-FullStack Developer
        </Typography>
      </Grid>
    </Grid>
  );
};
