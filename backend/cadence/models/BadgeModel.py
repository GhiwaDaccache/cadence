from django.db import models;

class Badge(models.Model):
    name = models.CharField(max_length=255)

    class Meta:
        db_table = 'badges'
