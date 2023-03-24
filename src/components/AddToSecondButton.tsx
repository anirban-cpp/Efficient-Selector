import React from "react";
import { Button } from "@mantine/core";
import { useDispatch } from 'react-redux'
import { addToSecond } from "../redux/store";

const AddToSecondButton = () => {
    const dispatch = useDispatch()
    return(
        <Button size="xl" onClick={() => dispatch(addToSecond())}>Add to Second</Button>
    )
}

export default AddToSecondButton;
