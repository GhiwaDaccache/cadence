from .PlanModel import Plan;
from django.db import models;
from django.contrib.auth.models import User;

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_photo = models.CharField(max_length=255, null=True)
    cover_photo = models.CharField(max_length=255, null=True)
    plan = models.ForeignKey(Plan, on_delete=models.CASCADE, null=True)

