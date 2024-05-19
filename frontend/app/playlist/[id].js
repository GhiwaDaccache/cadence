// Dependencies
import React from "react";
import { Button, View } from "react-native";

// Components
import PrimaryButton from "../../components/PrimaryButton";
import OutlineButton from "../../components/OutlineButton";

// Custom hooks
 import { usePlaylistLogic } from "./playlist-logic";

export default function playlistDetails() { 
    const { renderPlaylist, renderSongs } = usePlaylistLogic();

    return (
        <View className='h-full bg-white px-7 pt-10'>
            <View className='pb-5'>
                {renderPlaylist()}
            </View>

            <View className='flex flex-row justify-around'>
                <OutlineButton
                    title={'Remove'}
                    width={'w-[130]'}
                />
                <PrimaryButton
                    // handlePress={playSpotify}
                    title={'Start'}
                    width={'w-[130]'}
                />
            </View>
            {renderSongs()}
        </View>

    )
}


