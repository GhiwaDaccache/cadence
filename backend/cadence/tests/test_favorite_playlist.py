from django.test import TransactionTestCase
from django.contrib.auth.models import User
from ..models.PlaylistModel import Playlist
from ..models.FavoritePlaylistModel import FavoritePlaylist

class FavoritePlaylistModelTestCase(TransactionTestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', email='testuser@example.com', password='testpass123')
        self.playlist = Playlist.objects.create(
            name='Test Playlist',
            image='test_image.jpg',
            level='beginner',
            time='5:00'
        )

        self.favorite_playlist = FavoritePlaylist.objects.create(
            user=self.user,
            playlist=self.playlist
        )

    def test_favorite_playlist_creation(self):
        favorite_playlist = FavoritePlaylist.objects.get(user=self.user, playlist=self.playlist)
        
        self.assertEqual(favorite_playlist.user, self.user)
        self.assertEqual(favorite_playlist.playlist, self.playlist)
