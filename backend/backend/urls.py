from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("cadence/", include("cadence.urls")),
    path('admin/', admin.site.urls),
]
