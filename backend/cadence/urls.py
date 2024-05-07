# Dependencies
from django.urls import path

# Views
from .views.RunViews import *
from .views.PlanViews import *
from .views.UserViews import *
from .views.BadgeViews import *
from .views.PlanRunViews import *
from .views.PlaylistViews import *
from .views.EarnedBadgeViews import *
from .views.RecordedRunViews import *
from .views.FavoritePlaylistViews import *

urlpatterns = [
    # User
    path('api/user/register/', RegistrationViews.as_view(), name='register'),
    path('api/user/', UserViews.as_view(), name='user'),

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
    

    path('', PlaylistViews.as_view()),

    path('api/playlist/', PlaylistViews.as_view(), name='add_playlist'),
    # path('api/playlist/get_all_playlists/', PlaylistViews.get_all_playlists, name='get_all_playlists'),
    # path('api/playlist/delete_playlist/<int:id>', PlaylistViews.delete_playlist, name='delete_playlist'),
    # path('api/playlist/get_playlist_by_id/<int:id>', PlaylistViews.get_playlist_by_id, name='get_playlist_by_id'),
    
    path('api/run/', RunViews.as_view()),
    path('api/run/<int:id>', RunViews.as_view()),
    path('api/recorded_run/', RecordedRunViews.as_view()),
    
]

