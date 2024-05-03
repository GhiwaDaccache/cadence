from .RunModel import Run;
from django.db import models;
from django.core.validators import MinValueValidator;

class Segment(models.Model):
    distance = models.IntegerField(validators=[MinValueValidator(0)])
    duration = models.IntegerField(validators=[MinValueValidator(0)])
    pace = models.IntegerField(validators=[MinValueValidator(0)])
    run = models.ForeignKey(Run, on_delete=models.CASCADE)
    
    class Meta:
        db_table = 'segments'
