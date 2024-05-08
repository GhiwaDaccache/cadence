from .PlanModel import Plan;
from django.db import models;
from django.contrib.auth.models import User;

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_photo_name = models.CharField(max_length=255, null=True)
    profile_photo = models.ImageField(upload_to='profile_images/', null=True, blank=True)
    cover_photo_name = models.CharField(max_length=255, null=True)
    cover_photo = models.ImageField(upload_to='cover_images/', null=True, blank=True)
    plan = models.ForeignKey(Plan, on_delete=models.CASCADE, null=True)

