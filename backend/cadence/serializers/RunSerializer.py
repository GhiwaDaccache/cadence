from rest_framework import serializers
from ..models.RunModel import Run

class RunSerializer(serializers.ModelSerializer):
    class Meta:
        model = Run
        fields = ['id', 'playlist', 'avg_pace', 'duration', 'distance']
