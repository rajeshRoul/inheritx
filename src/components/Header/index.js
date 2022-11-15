import { Badge, Box, IconButton, Typography } from "@mui/material";
import classes from "./header.module.css";
import InheritXLogo from "../../assets/icons/InheritXLogo.jpg";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const cartItems = useSelector(store => store?.shop?.cartProducts)

    return (
        <Box className={classes.container}>
            <Box className={classes.logoCtr} onClick={() => navigate("/home")}>
                <img src={InheritXLogo} alt="" className={classes.logo} />
                <Typography>inheritx</Typography>
            </Box>
            <Badge badgeContent={cartItems?.length} color="primary">
                <IconButton sx={{ p: 0 }} onClick={() => navigate("/cart")}>
                    <ShoppingCartIcon sx={{ height: 26, width: 26 }} />
                </IconButton>
            </Badge>
        </Box>
    )
}

export default Header;