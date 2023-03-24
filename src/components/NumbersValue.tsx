import React from 'react'
import { Text } from '@mantine/core'
import { useSelector, shallowEqual } from 'react-redux/es/exports'
import { RootState } from '../redux/store'

const NumbersValue = () => {

    const numbers = useSelector((store: RootState) => store.numbers, shallowEqual)

    return <Text>Numbers: {numbers.join('')}</Text>
}

export default NumbersValue