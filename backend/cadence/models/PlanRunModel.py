from .RunModel import Run;
from .PlanModel import Plan;
from django.db import models;
from django.core.validators import MinValueValidator;

class PlanRun(models.Model):
    run = models.ForeignKey(Run, on_delete=models.CASCADE)
    plan = models.ForeignKey(Plan, on_delete=models.CASCADE)
    week = models.IntegerField(validators=[MinValueValidator(0)])
    day = models.IntegerField(validators=[MinValueValidator(0)])
    

    class Meta:
        db_table = 'plan_runs'
