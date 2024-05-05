from django.urls import path
from .views.UserViews import *
from .views.PlanViews import *

urlpatterns = [
    path('', User.as_view()), 
    path('api/user/create/', create_user, name='create_user'),
    path('api/user/<int:user_id>/', get_user_by_id, name='get_user_by_id'),
    path('api/user/<int:user_id>/edit/', edit_user, name='edit_user'),
    path('api/plan/add_plan/', PlanViews.as_view(), name='add_plan'),
    path('api/plan/get_all_plans/', PlanViews.get_all_plans,),
    path('api/plan/delete_plan/<int:id>', PlanViews.delete_plan,),
]