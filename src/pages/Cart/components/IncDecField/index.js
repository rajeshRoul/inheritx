import { Box, styled } from "@mui/material";
import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const Container = styled(Box)(() => ({
    height: 48,
    width: 120,
    borderRadius: 6,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& .icon": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        "& svg": {
            height: 24,
            width: 24,
            margin: "0px 10px"
        }
    },
    "& .countDisplay": {
        width: 30,
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
}));

const IncDecField = ({
    count = 1,
    onInc = () => { },
    onDec = () => { }
}) => {

    return (
        <Container>
            <span onClick={onDec} className="icon">
                <RemoveIcon />
            </span>
            <div className="countDisplay">
                {count}
            </div>

            <span className="icon" onClick={onInc}>
                <AddIcon />
            </span>
        </Container>
    );
};

export default IncDecField;