from rest_framework import serializers
from ..models.EarnedBadgeModel import EarnedBadge

class EarnedBadgeSerializer(serializers.ModelSerializer):
    class Meta:
        model = EarnedBadge
        fields = ['id', 'badge', 'recorded_run']
