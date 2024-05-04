from rest_framework import serializers;
from ..models.Usermodel import UserProfile;
from django.contrib.auth.models import User;
from django.contrib.auth.hashers import make_password;


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

        user.password = make_password(validated_data.pop('password', None))  
        user.save()
        profile = UserProfile.objects.create(user=user, **validated_data)
        return profile