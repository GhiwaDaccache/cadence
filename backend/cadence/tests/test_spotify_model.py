from ..models.SpotifySongModel import SpotifySong;
from django.test import TransactionTestCase;
from ..models.PlaylistModel import Playlist;

class SpotifySongModelTestCase(TransactionTestCase):
    def setUp(self):
        playlist = Playlist.objects.create(name='Test Playlist', image='test_image', level='beginner', time='30min')
        SpotifySong.objects.create(name='Test Song', spotify_id='test_id', playlist=playlist)

    def test_spotify_id(self):
        song = SpotifySong.objects.get(name='Test Song')
        self.assertEqual(song.spotify_id, 'test_id')
