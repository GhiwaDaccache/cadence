from rest_framework import serializers
from ..models.FavoritePlaylistModel import FavoritePlaylist

class FavoritePlaylistSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavoritePlaylist
        fields = ['id', 'user', 'playlist']
