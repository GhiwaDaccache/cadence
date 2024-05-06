from rest_framework import serializers
from ..models.SpotifySongModel import SpotifySong

class SpotifySongSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpotifySong
        fields = ['id', 'name', 'playlist']
