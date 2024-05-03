from .RunModel import Run;
from .Usermodel import User;
from django.db import models;
from django.core.validators import MinValueValidator;

class RecordedRun(models.Model):
    recorded_on = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    real_pace = models.IntegerField(validators=[MinValueValidator(0)])
    real_distance = models.IntegerField(validators=[MinValueValidator(0)])
    real_duration = models.IntegerField(validators=[MinValueValidator(0)])
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    run = models.ForeignKey(Run, on_delete=models.CASCADE, null=True)

    
    class Meta:
        db_table = 'recorded_runs'
