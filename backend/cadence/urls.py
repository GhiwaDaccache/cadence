from . import views;
from django.urls import path;

urlpatterns = [
    path('greetings/', views.greetings)
]
