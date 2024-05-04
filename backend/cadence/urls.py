from django.urls import path
from .views.UserViews import *

urlpatterns = [
    path('', User.as_view()), 
    path('api/user/create/', create_user, name='create_user'),
    path('api/user/<int:user_id>/', get_user_by_id, name='get_user_by_id'),
    path('api/user/<int:user_id>/edit/', edit_user, name='edit_user'),
]