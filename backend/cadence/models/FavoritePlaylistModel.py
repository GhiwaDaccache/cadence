from django.db import models;
from .PlaylistModel import Playlist;
from django.contrib.auth.models import User;

class FavoritePlaylist(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    playlist = models.ForeignKey(Playlist, on_delete=models.CASCADE)

    class Meta:
        db_table = 'favorite_playlists'
