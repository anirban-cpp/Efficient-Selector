import React from 'react'
import { Text } from '@mantine/core'
import { useSelector } from 'react-redux/es/exports'
import { RootState } from '../redux/store'

const FirstValue = () => {

    const { firstNumber } = useSelector((store: RootState) => store)

    return <Text>First Value: {firstNumber}</Text>
}

export default FirstValue