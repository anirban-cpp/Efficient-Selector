import React from "react";
import { Button } from "@mantine/core";
import { useDispatch } from 'react-redux'
import { doNothing } from "../redux/store";

const DoNothingButton = () => {
    const dispatch = useDispatch()
    return(
        <Button size="xl" onClick={() => dispatch(doNothing())}>Do Nothing</Button>
    )
}

export default DoNothingButton;
