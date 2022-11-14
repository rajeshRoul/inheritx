import { Box, Button, Typography } from "@mui/material";
import Header from "../../components/Header";
import classes from "./homepage.module.css";
import AddIcon from '@mui/icons-material/Add';
import ProductCard from "./components/ProductCard";

const HomePage = () => {
    return (
        <Box className={classes.container}>
            <Header />
            <Box className={classes.mainContent}>
                <Box className={classes.heading}>
                    <Typography variant="h5">All Products</Typography>
                    <Button variant="contained" startIcon={<AddIcon/>} >Add New Product</Button>
                </Box>
                <Box className={classes.allProductsCtr}>
<ProductCard/>
                </Box>
            </Box>
        </Box>
    )
}

export default HomePage;