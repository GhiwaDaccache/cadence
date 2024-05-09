// Dependencies
import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

const IntervalInput = () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    return (
        <View>
            <TextInput
                keyboardType="numeric"
                className='font-urbanist text-base h-7 w-20 bg-darkGrey rounded-md flex justify-center px-2'/>
        </View>
    )
}

export default IntervalInput;