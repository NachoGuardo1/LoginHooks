import { Box } from "@mui/material";
import React from "react";
import { SearcApp } from "./SearcApp";

export const DrawerSearcMob = () => {
  return (
    <Box
      width="100%"
      display={{ xs: "flex", md: "none" }}
      justifyContent="center"
      padding={1}
    >
      <SearcApp />
    </Box>
  );
};
