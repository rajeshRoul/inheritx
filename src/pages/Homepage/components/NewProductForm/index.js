import { Box, Button, Dialog, DialogContent, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { shopActions } from "../../../../redux/slices/shop";
import { v4 as uuid } from 'uuid';

const NewProductForm = ({ onClose }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState(0);
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(shopActions.addNewProduct({
            id: uuid(),
            title,
            desc,
            price: parseInt(price),
            qty: parseInt(qty)
        }))
        onClose();
    }

    return (
        <Dialog open={true} onClose={onClose} maxWidth="">
            <DialogContent >
                <Box width={350} >
                    <form onSubmit={handleSubmit}>
                        <Typography variant="h6" marginBottom={2}>Add New Product</Typography>
                        <TextField
                            label="Title"
                            placeholder="Enter Title"
                            required={true}
                            fullWidth={true}
                            variant="outlined"
                            sx={{ mb: 2 }}
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <TextField
                            label="Description"
                            placeholder="Enter Description"
                            required={true}
                            fullWidth={true}
                            variant="outlined"
                            sx={{ mb: 2 }}
                            value={desc}
                            onChange={e => setDesc(e.target.value)}
                        />
                        <TextField
                            label="Price"
                            placeholder="Enter Price"
                            type="number"
                            inputProps={{ min: 1 }}
                            required={true}
                            fullWidth={true}
                            variant="outlined"
                            sx={{ mb: 2 }}
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                        <TextField
                            label="Quantity"
                            placeholder="Quantity"
                            type="number"
                            inputProps={{ min: 1 }}
                            required={true}
                            fullWidth={true}
                            variant="outlined"
                            sx={{ mb: 2 }}
                            value={qty}
                            onChange={e => setQty(e.target.value)}
                        />
                        <Box display="flex" justifyContent="center">
                            <Button type="submit" variant="contained">
                                Submit
                            </Button>
                        </Box>
                    </form>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default NewProductForm;