import { Box, Button, Card, Typography } from "@mui/material"
import classes from "./productCard.module.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ProductCard = () => {
    return (
        <Card className={classes.container}>
            <Box display="flex" justifyContent="space-between">
                <Typography variant="h6" color="primary">dxiojxiowejocij</Typography>
                <Typography variant="h6">Rs.1899</Typography>
            </Box>
            <Typography variant="body2" color="GrayText">
                dnewiuhdci uwehciudhfevf evervververvvvvvv vvvvvvvvvvvvvvvvvv vvvvvvvvvvvvvvv vvvvvvvvvvvvvvvvvvvv vvvvvvvv vvvvvwecfwec evefewfwef
            </Typography>
            <Box  display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="body2">Qty Units: 4</Typography>
                <Button startIcon={<ShoppingCartIcon/>}>
                    Add to Cart
                </Button>
            </Box>
        </Card>
    )
}

export default ProductCard;