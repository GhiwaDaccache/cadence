from rest_framework import serializers
from ..models.RecordedRunModel import RecordedRun

class RecordedRunSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecordedRun
        fields = ['id', 'recorded_on', 'start_time', 'end_time', 'real_pace', 'real_distance', 'real_duration', 'user', 'run']
