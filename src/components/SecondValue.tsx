import React from 'react'
import { Text } from '@mantine/core'
import { useSelector } from 'react-redux/es/exports'
import { RootState } from '../redux/store'

const SecondValue = () => {

    const secondNumber = useSelector((store: RootState) => store.secondNumber)

    return <Text>Second Value: {secondNumber}</Text>
}

export default SecondValue