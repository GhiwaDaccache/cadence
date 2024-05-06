from rest_framework import serializers
from ..models.BadgeModel import Badge

class BadgeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Badge
        fields = ['id', 'name']
