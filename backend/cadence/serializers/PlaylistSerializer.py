from rest_framework import serializers
from ..models.PlaylistModel import Playlist

class PlanylistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Playlist
        fields = ['id', 'name']
