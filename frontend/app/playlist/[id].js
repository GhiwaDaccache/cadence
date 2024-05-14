// Dependencies
import React from "react";
import { View } from "react-native";

// Components
import PrimaryButton from "../../components/PrimaryButton";

// Custom hooks
 import { usePlaylistLogic } from "./playlist-logic";

export default function playlistDetails() { 
    const { renderPlaylist, renderSongs } = usePlaylistLogic();

    return (
        <View className='h-full bg-white px-7'>
            <View>
                {renderPlaylist()}
            </View>

            {renderSongs()}

            <View className='absolute self-center top-[580]'>
                <PrimaryButton
                // handlePress={playSpotify}
                title={'Start'}
                width={'w-[170]'}
                />
            </View>
        </View>

    )
}


