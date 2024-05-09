// Dependencies
import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const IntervalInput = ({ value, handleChange }) => {

    return (
        <View>
            <TextInput
                keyboardType="numeric"
                value={value}
                onChangeText={handleChange}
                className='font-urbanist text-base h-7 w-20 bg-darkGrey rounded-md flex justify-center px-2'
            />
        </View>
    )
}

export default IntervalInput;