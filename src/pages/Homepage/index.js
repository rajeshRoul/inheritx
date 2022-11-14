import { Box, Button, Typography } from "@mui/material";
import Header from "../../components/Header";
import classes from "./homepage.module.css";
import AddIcon from '@mui/icons-material/Add';
import ProductCard from "./components/ProductCard";
import { useState } from "react";
import NewProductForm from "./components/NewProductForm";
import { useSelector } from "react-redux";

const HomePage = () => {
    const allProducts = useSelector(store => store?.shop?.allProducts)
    const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);

    const toggleAddPopup = () => {
        setIsAddPopupOpen(prev => !prev);
    }

    return (
        <Box className={classes.container}>
            <Header />
            {isAddPopupOpen && <NewProductForm onClose={toggleAddPopup} />}
            <Box className={classes.mainContent}>
                <Box className={classes.heading}>
                    <Typography variant="h5">All Products</Typography>
                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={toggleAddPopup}>
                        Add New Product
                    </Button>
                </Box>
                <Box className={classes.allProductsCtr}>
                    {allProducts?.map((product) => (
                        <ProductCard data={product} key={product.id}/>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default HomePage;