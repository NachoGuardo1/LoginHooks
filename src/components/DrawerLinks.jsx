import {
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { CategoriesReducer } from "../reducers/CategoriesReducer";
import { ProductsService } from "../services/ProductsService";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export const MenuDrawerLinks = () => {
  const [state, dispatch] = CategoriesReducer();
  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = async () => {
    try {
      const response = await ProductsService.GET_CATEGORIES();
      dispatch({ type: "FETCH_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR" });
      navigate("/error");
    }
  };
  //DRAWER
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 0.5 }}
        onClick={() => setDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        variant="temporary"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List
          sx={{
            width: { xs: 150, sm: 200 },
          }}
        >
          <ListItem>
            <Typography variant="h6" fontWeight={650} fontSize="18px">
              MENU
            </Typography>
          </ListItem>
          <Divider />
          {state.loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <ListItem key={index}>
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem", width: 100 }}
                  />
                </ListItem>
              ))
            : state.categories.map((category, index) => (
                <ListItem key={index}>
                  <Button
                    onClick={() => navigate(`/category/${category.toString()}`)}
                  >
                    <Typography
                      variant="body2"
                      fontWeight={600}
                      sx={{
                        fontFamily: "monospace",
                        textAlign: "start",
                        fontSize: "14px",
                      }}
                      color={"text.primary"}
                    >
                      {category.toUpperCase()}
                    </Typography>
                  </Button>
                </ListItem>
              ))}
        </List>
      </Drawer>
    </>
  );
};
