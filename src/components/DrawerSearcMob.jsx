import { Box } from "@mui/material";
import React from "react";
import { SearchNav } from "./SearchNav";

export const DrawerSearcMob = () => {
  return (
    <Box width="100%" display="flex" justifyContent="center" padding={1}>
      <SearchNav />
    </Box>
  );
};
