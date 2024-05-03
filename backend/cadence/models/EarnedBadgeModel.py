from django.db import models;
from .BadgeModel import Badge;
from .RecordedRunModel import RecordedRun;

class EarnedBadge(models.Model):
    badge = models.ForeignKey(Badge, on_delete=models.CASCADE)
    recorded_run = models.ForeignKey(RecordedRun, on_delete=models.CASCADE)

    class Meta:
        db_table = 'earned_badges'
