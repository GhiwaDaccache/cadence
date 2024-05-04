from rest_framework import serializers
from ..models.PlanModel import Plan

class PlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plan
        fields = ['id', 'name', 'duration', 'level', 'image']
