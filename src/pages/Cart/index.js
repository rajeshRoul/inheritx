import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import classes from "./cart.module.css";
import CartItem from "./components/CartItem";

const Cart = () => {
    const cartProducts = useSelector(store => store?.shop?.cartProducts)
    const allProducts = useSelector(store => store?.shop?.allProducts)

    const getDiscountPercent = (percentItems) => {
        if (percentItems > 90) return 20;
        if (percentItems > 50) return 10;
        if (percentItems > 10) return 50;
        return 0;
    }

    const getDiscountPrice = () => {
        let totalDiscount = 0;
        cartProducts.forEach((prod) => {
            const totalItems = prod.qty + (allProducts.find((item) => prod.id === item.id)?.qty || 0);
            const discountPercent = getDiscountPercent((prod.qty/totalItems) * 100);
            const totalAmt = prod.qty * prod.price;
            const discountAmt = (discountPercent / 100) * (totalAmt);
            totalDiscount += (totalAmt - discountAmt);
            console.log({totalItems, discountPercent, totalAmt, discountAmt, totalDiscount})
        })
        return totalDiscount?.toFixed(2);
    }

    return (
        <Box className={classes.container}>
            <Header />
            <Box className={classes.mainContainer}>
                <Typography variant="h5">Items In Your Cart</Typography>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="h6">
                        Total Price: Rs.{cartProducts.reduce((acc, curr) => (acc + (curr.qty * curr.price)), 0)}
                    </Typography>
                    <Typography variant="h6">Discounted Price: Rs.{getDiscountPrice()}</Typography>
                </Box>
                <Box className={classes.itemsCtr}>
                    {cartProducts?.map((item) => (
                        <CartItem data={item} key={item.id} />
                    ))}
                </Box>
            </Box>

        </Box>
    )
}

export default Cart;