from django.urls import path
from .views.PlanViews import *
from .views.UserViews import *
from .views.BadgeViews import *
from .views.PlaylistViews import *
urlpatterns = [
    path('', User.as_view()), 
    path('api/user/register/', register, name='create_user'),
    path('api/user/<int:user_id>/', get_user_by_id, name='get_user_by_id'),
    path('api/user/<int:user_id>/edit/', edit_user, name='edit_user'),
    path('api/plan/add_plan/', PlanViews.as_view(), name='add_plan'),
    path('api/plan/get_all_plans/', PlanViews.get_all_plans, name='get_all_plans'),
    path('api/plan/delete_plan/<int:id>', PlanViews.delete_plan, name='delete_plans'),
    path('api/plan/get_plan_by_id/<int:id>', PlanViews.get_plan_by_id, name='get_plan_by_id'),
    path('api/playlist/', PlaylistViews.as_view(), name='add_playlist'),
    path('api/playlist/get_all_playlists/', PlaylistViews.get_all_playlists, name='get_all_playlists'),
    path('api/playlist/delete_playlist/<int:id>', PlaylistViews.delete_playlist, name='delete_playlist'),
    path('api/playlist/get_playlist_by_id/<int:id>', PlaylistViews.get_playlist_by_id, name='get_playlist_by_id'),
    path('api/badge/', BadgeViews.as_view(), name='add_badge'),

]