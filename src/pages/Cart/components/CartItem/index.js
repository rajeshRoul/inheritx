import { Box, Card, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { shopActions } from "../../../../redux/slices/shop";
import IncDecField from "../IncDecField";
import classes from "./cartItem.module.css";

const CartItem = ({ data }) => {
    const dispatch = useDispatch();
    const allProducts = useSelector(store => store?.shop?.allProducts)

    const totalUnits = data.qty + (allProducts.find((prod) => prod.id === data.id)?.qty || 0);

    const percentItems = (data.qty / totalUnits) * 100

    const isDiscountAvailable = (percentItems) > 10;

    const getDiscountPercent = () => {
        if (percentItems > 90) return 20;
        if (percentItems > 50) return 10;
        if (percentItems > 10) return 50;
    }

    const getDiscountPrice = () => {
        const discountPercent = getDiscountPercent();
        const totalAmt = data.price * data.qty;
        const discountAmt = (discountPercent / 100) * (totalAmt);
        return (totalAmt - discountAmt)?.toFixed(2);
    }

    const handleInc = () => {
        dispatch(shopActions.incCartItem(data.id));
    }

    const handleDec = () => {
        dispatch(shopActions.decCartItem(data.id));
    }

    return (
        <Card className={classes.container} elevation={3}>
            <Box display="flex" flexDirection="column" gap={1}>
                <Typography variant="h6" color="primary">{data.title}</Typography>
                <Typography variant="body2" color="GrayText">
                    {data.desc}
                </Typography>
            </Box>

            <Box display="flex" flexDirection="column" alignItems="flex-end" gap={2}>
                <Typography
                    variant="h6"
                    className={isDiscountAvailable ? classes.strikeThrough : ""}>
                    Total Price: Rs.{data.price * data.qty}
                </Typography>
                <IncDecField count={data.qty} onInc={handleInc} onDec={handleDec} />
                {isDiscountAvailable && <Typography variant="h6">Discounted Price: {getDiscountPrice()}</Typography>}
            </Box>
        </Card>
    )
}

export default CartItem;