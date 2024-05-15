from rest_framework import serializers
from ..models.PlaylistModel import Playlist
from .SpotifySongSerializer import SpotifySongSerializer

class PlaylistSerializer(serializers.ModelSerializer):
    songs = SpotifySongSerializer(many=True, read_only=True)

    class Meta:
        model = Playlist
        fields = ('id', 'name', 'songs', 'level', 'image')