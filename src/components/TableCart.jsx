import React, { useContext } from "react";
import { productsContext } from "../context/ProductsContext";
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const TableCart = () => {
  const { cart, addToCart, removeFromCart, deductProduct } =
    useContext(productsContext);
  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    }
    return title;
  };
  return (
    <Table container component={Paper}>
      <Table size="medium">
        <TableBody>
          {cart.map((itemCart) => (
            <TableRow key={itemCart.id} hover>
              <Grid
                container
                display="flex"
                flexDirection="row"
                alignItems="end"
              >
                {/* IMAGEN */}
                <TableCell
                  width="20%"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Avatar src={itemCart.image} variant="rounded" />
                </TableCell>
                {/* TIULO Y PRECIO */}
                <TableCell width="45%">
                  <Typography
                    variant="h3"
                    textAlign="start"
                    color="text.secondary"
                    fontSize="14px"
                    fontWeight={600}
                    gutterBottom
                  >
                    {truncateTitle(itemCart.title, 20)}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="error"
                    fontSize="14px"
                    fontWeight={600}
                  >
                    ${itemCart.price * itemCart.quantity}
                  </Typography>
                </TableCell>
                {/* CANTIDAD  */}
                <TableCell
                  width="25%"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 0.5,
                  }}
                >
                  <IconButton
                    onClick={() => {
                      deductProduct(itemCart);
                    }}
                    size="small"
                    color="text.secondary"
                    fontWeight={600}
                  >
                    <RemoveIcon fontSize="small" />
                  </IconButton>
                  <Typography
                    color="text.secondary"
                    fontSize="14px"
                    fontWeight={600}
                  >
                    {itemCart.quantity}
                  </Typography>
                  <IconButton
                    onClick={() => {
                      addToCart(itemCart);
                    }}
                    size="small"
                    color="text.secondary"
                    fontWeight={600}
                  >
                    <AddIcon fontSize="small" />
                  </IconButton>
                </TableCell>
                {/* REMOVE */}
                <TableCell
                  width="10%"
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    paddingRight: 1,
                  }}
                >
                  <IconButton
                    color="error"
                    size="small"
                    onClick={() => {
                      removeFromCart(itemCart.id);
                    }}
                  >
                    <DeleteOutlineIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </Grid>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Table>
  );
};
