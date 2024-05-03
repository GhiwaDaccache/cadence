from django.db import models;
from .PlaylistModel import Playlist;

class Run(models.Model):
    playlist = models.ForeignKey(Playlist, on_delete=models.CASCADE)
    avg_pace = models.IntegerField()
    duration = models.IntegerField()
    distance = models.IntegerField()

    class Meta:
        db_table = 'runs'
