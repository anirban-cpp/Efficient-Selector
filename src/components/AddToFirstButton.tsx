import React from "react";
import { Button } from "@mantine/core";
import { useDispatch } from 'react-redux'
import { addToFirst } from "../redux/store";

const AddToFirstButton = () => {
    const dispatch = useDispatch()
    return(
        <Button size="xl" onClick={() => dispatch(addToFirst())}>Add to First</Button>
    )
}

export default AddToFirstButton;
