# Dependencies
from django.urls import path

# Views
from .views.RunViews import *
from .views.PlanViews import *
from .views.UserViews import *
from .views.BadgeViews import *
from .views.SpotifyViews import *
from .views.PlanRunViews import *
from .views.SegmentViews import *
from .views.PlaylistViews import *
from .views.EarnedBadgeViews import *
from .views.RecordedRunViews import *
from .views.FavoritePlaylistViews import *

urlpatterns = [
    # User
    path('api/user/register/', RegistrationViews.as_view(), name='register'),
    path('api/user/', UserViews.as_view(), name='user'),
    path('api/user/upload_image/', UserViews.upload_image, name='upload_image'),
    
    # Plan
    path('api/plan/', PlanViews.as_view(), name='plans'),
    path('api/plan/<int:pk>/', PlanViews.as_view(), name='plan_id'),

    # Plan run
    path('api/plan_run/', PlanRunViews.as_view(), name='plan_runs'),
    path('api/plan_run/<int:pk>', PlanRunViews.as_view(), name='plan_run_id'),

    # Badge
    path('api/badge/', BadgeViews.as_view(), name='badge'),
    path('api/earned_badge/', EarnedBadgeViews.as_view(), name='earned_badge'),

    # Favorite playlist
    path('api/favorite_playlist/', FavoritePlaylistViews.as_view(), name='favorite_playlist'),
    
    # Playlist
    path('api/playlist/', PlaylistViews.as_view(), name='playlist'),
    path('api/playlist/<int:pk>/', PlaylistViews.as_view(), name='playlist_id'),

    # Run
    path('api/run/', RunViews.as_view(), name="run"),
    path('api/run/<int:pk>/', RunViews.as_view(), name='run_id'),

    # Reacorded run
    path('api/recorded_run/', RecordedRunViews.as_view(), name='recorded_run'),

    # Segment
    path('api/segment/', SegmentViews.as_view(), name='segment'),
    path('api/segment/<int:pk>', SegmentViews.as_view(), name='segment_id'),
    path('api/segment/<int:run_id>/', SegmentViews.as_view(), name='segment_run'),
    
    # Spotify
    path('api/spotify/create_spotify_token', SpotifyViews.create_spotify_token, name='spotify_token'),
    path('api/spotify/generate_playlist', SpotifyViews.generate_playlist, name='generate_playlist'),
]

