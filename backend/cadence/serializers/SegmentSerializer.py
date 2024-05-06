from rest_framework import serializers
from ..models.SegmentModel import Segment

class SegmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Segment
        fields = ['id', 'distance', 'duration', 'pace', 'run']
