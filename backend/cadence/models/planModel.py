from django.db import models;
from django.core.validators import MinValueValidator;

class Plan(models.Model):
    name = models.CharField(max_length=255)
    duration = models.IntegerField(validators=[MinValueValidator(0)])
    level = models.CharField(max_length=100)
    image = models.CharField(max_length=255)

