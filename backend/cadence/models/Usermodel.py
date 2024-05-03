from .PlanModel import Plan;
from django.db import models;
from rest_framework import serializers;
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User;

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_photo = models.CharField(max_length=255, null=True)
    cover_photo = models.CharField(max_length=255, null=True)
    plan = models.ForeignKey(Plan, on_delete=models.CASCADE, null=True)

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model = User
        fields = ('username', 'password', 'first_name', 'last_name', 'email')

class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=True)
    class Meta:
        model = UserProfile
        fields = ['user', 'profile_photo', 'cover_photo', 'plan']

    def create(self, validated_data):
        # validated_data['password'] = make_password(validated_data.pop('password', None))
        # password = validated_data.pop('password', None)
        user_data = validated_data.pop('user')
        user = User.objects.create(**user_data)

        user.password = make_password(validated_data.pop('password', None))  # Set and hash the password
        user.save()
        profile = UserProfile.objects.create(user=user, **validated_data)
        return profile