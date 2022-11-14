import { Box, Button, Card, Typography } from "@mui/material"
import classes from "./productCard.module.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch } from "react-redux";
import { shopActions } from "../../../../redux/slices/shop";

const ProductCard = ({ data }) => {
const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(shopActions.addToCart(data.id));
    }

    return (
        <Card className={classes.container}>
            <Box display="flex" justifyContent="space-between">
                <Typography variant="h6" color="primary">{data.title}</Typography>
                <Typography variant="h6">Rs.{data.price}</Typography>
            </Box>
            <Typography variant="body2" color="GrayText">
                {data.desc}
            </Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="body2">Qty Units: {data.qty}</Typography>
                <Button startIcon={<ShoppingCartIcon />} onClick={addToCart}>
                    Add to Cart
                </Button>
            </Box>
        </Card>
    )
}

export default ProductCard;