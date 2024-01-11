import React from "react";

import { Box, IconButton, Tab, Tabs, Typography } from "@mui/material";

export const HeaderHome = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        justifyContent: "space-around",
      }}
    >
      <IconButton>
        <Typography variant="body2" fontWeight={600}>
          WOMENS
        </Typography>
      </IconButton>
      <IconButton>
        <Typography variant="body2" fontWeight={600}>
          MENS
        </Typography>
      </IconButton>
      <IconButton>
        <Typography variant="body2" fontWeight={600}>
          JEWELERY
        </Typography>
      </IconButton>
      <IconButton>
        <Typography variant="body2" fontWeight={600}>
          ELECTRONICS
        </Typography>
      </IconButton>
    </Box>
  );
};
