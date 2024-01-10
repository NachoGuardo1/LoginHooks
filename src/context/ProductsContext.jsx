import { createContext, useState } from "react";

const productsContext = createContext();
const localCart = JSON.parse(localStorage.getItem("cart")) || [];
const localFavs = JSON.parse(localStorage.getItem("favs")) || [];

const ProductsProvider = ({ children }) => {
  const [cart, setCart] = useState(localCart);
  const [favs, setFavs] = useState(localFavs);

  const addToCart = (item) => {
    const inCart = cart.find((i) => i.id === item.id);
    if (inCart) {
      const newCart = cart.map((product) => {
        if (product.id === item.id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      const newCart = [...cart, { ...item, quantity: 1 }];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };
  const removeFromCart = (productId) => {
    const newCart = cart.filter((p) => p.id !== productId);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  const cleanCart = () => {
    setCart([]);
    localStorage.removeItem("carrito");
  };
  const addToFavs = (item) => {
    const newFavs = [...favs, item];
    setFavs(newFavs);
    localStorage.setItem("favs", JSON.stringify(newFavs));
  };
  const removeFromFavs = (productId) => {
    const newFavs = favs.filter((item) => item.id !== productId);
    setFavs(newFavs);
    localStorage.setItem("favs", JSON.stringify(newFavs));
  };

  const deductProduct = (item) => {
    const selectedItem = cart.find((i) => i.id === item.id);
    if (selectedItem) {
      const newCart = cart.map((product) => {
        if (product.id === item.id && product.quantity > 1) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  const total = cart.reduce((acumulador, product) => {
    return acumulador + product.price * product.quantity;
  }, 0);

  return (
    <productsContext.Provider
      value={{
        addToCart,
        removeFromCart,
        cleanCart,
        cart,
        favs,
        addToFavs,
        removeFromFavs,
        deductProduct,
        total,
        setCart,
        setFavs,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};

export { productsContext, ProductsProvider };
