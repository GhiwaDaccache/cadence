from django.db import models;

class Playlist(models.Model):
    name = models.CharField(max_length=255)
    image = models.CharField(max_length=255)
    level = models.CharField(max_length=255, default='beginner')
    time = models.DurationField()

    class Meta:
        db_table = 'playlists'
