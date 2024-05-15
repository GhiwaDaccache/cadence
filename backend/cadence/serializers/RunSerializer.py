from rest_framework import serializers
from ..models.RunModel import Run
from ..serializers.PlanRunSerializer import PlanRunSerializer

class RunSerializer(serializers.ModelSerializer):
    class Meta:
        model = Run
        fields = ['id', 'playlist', 'avg_pace', 'duration', 'distance']

class RunPlanSerializer(serializers.Serializer):
    run = RunSerializer()
    plan_run = PlanRunSerializer()