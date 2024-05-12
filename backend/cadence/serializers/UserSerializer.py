from rest_framework import serializers;
from ..models.Usermodel import UserProfile;
from django.contrib.auth.models import User;
from django.contrib.auth.hashers import make_password;
from django.shortcuts import get_object_or_404


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'first_name', 'last_name', 'email')


class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=True)

    class Meta:
        model = UserProfile
        fields = ['user', 'profile_photo', 'cover_photo', 'plan']

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        password = user_data.pop('password', None) 
        hashed_password = make_password(password)   
        user = User.objects.create(**user_data, password=hashed_password)
        profile = UserProfile.objects.create(user=user, **validated_data)
        return profile
    
    # def update(self, instance, validated_data):
    #     instance.__dict__.update(validated_data)
    #     instance.save()
    #     # user = get_object_or_404(User, id=validated_data.)
    #     return instance

    def update(self, instance, validated_data):
        
        

        instance.save()
        user = get_object_or_404(User, id=validated_data.user_id)
        user.first_name = validated_data.first_name
        user.last_name = validated_data.last_name
        user.save()

        return instance