from rest_framework import serializers
from ..models.PlanRunModel import PlanRun

class PlanRunSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlanRun
        fields = ['id', 'run', 'plan', 'week', 'day']
