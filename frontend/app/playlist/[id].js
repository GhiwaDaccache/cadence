// Dependencies
import React from "react";
import { View } from "react-native";

// Components
import PrimaryButton from "../../components/PrimaryButton";

// Custom hooks
 
export default function playlistDetails() { 
    return (
        <View className='h-full bg-white px-7'>
            <View>
                {renderPlaylist()}
            </View>

            {renderSongs()}

            <View className='absolute self-center top-[560]'>
                <PrimaryButton
                // handlePress={playSpotify}
                title={'Start'}
                width={'w-[170]'}
                />
            </View>
        </View>

    )
}


