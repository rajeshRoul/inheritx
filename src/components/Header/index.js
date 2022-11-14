import { Badge, Box, IconButton, Typography } from "@mui/material";
import classes from "./header.module.css";
import InheritXLogo from "../../assets/icons/InheritXLogo.jpg";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <Box className={classes.container} onClick={() => navigate("/home")}>
            <Box className={classes.logoCtr}>
                <img src={InheritXLogo} alt="" className={classes.logo} />
                <Typography>inheritx</Typography>
            </Box>
            <Box onClick={() => navigate("/cart")}>
                <Badge badgeContent={0} color="primary">
                    <IconButton sx={{ p: 0 }}>
                        <ShoppingCartIcon sx={{height: 26, width: 26}}/>
                    </IconButton>
                </Badge>
            </Box>
        </Box>
    )
}

export default Header;