from django.db import models;
from .PlaylistModel import Playlist;

class Run(models.Model):
    playlist = models.ForeignKey(Playlist, on_delete=models.CASCADE)
    avg_pace = models.FloatField()
    duration = models.IntegerField()
    distance = models.FloatField()

    class Meta:
        db_table = 'runs'
