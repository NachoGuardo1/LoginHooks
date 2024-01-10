import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      Somethig went wrong
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Go Home
      </Button>
    </div>
  );
};
