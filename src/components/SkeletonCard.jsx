import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";

export const SkeletonCard = () => {
  return (
    <Grid item xs={10} sm={5.5} md={3.5} lg={2.5} sx={{ height: 350 }}>
      <Skeleton
        variant="rounded"
        width="100%"
        height="75%"
        animation="wave"
        sx={{ marginBottom: 1 }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: "25%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "75%",
          }}
        >
          <Skeleton
            variant="rounded"
            width="100%"
            height={20}
            animation="wave"
            sx={{ marginBottom: 1 }}
          />
          <Skeleton
            variant="rounded"
            width="40%"
            height={20}
            animation="wave"
          />
        </Box>
        <Skeleton variant="rounded" width="15%" height={40} animation="wave" />
      </Box>
    </Grid>
  );
};
