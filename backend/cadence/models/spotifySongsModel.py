from django.db import models;
from .playlistModel import Playlist;

class SpotifySongs(models.Model):
    name = models.CharField(max_length=255)
    spotify_id = models.CharField(max_length=255)
    playlist = models.ForeignKey(Playlist, on_delete=models.CASCADE)

    class Meta:
        db_table = 'spotify_songs'
