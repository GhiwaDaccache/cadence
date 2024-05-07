# Dependencies
import requests; 
from urllib.parse import urlencode;
from django.http import JsonResponse;
from rest_framework.views import APIView;
from rest_framework.permissions import IsAuthenticated;
from rest_framework_simplejwt.authentication import JWTAuthentication;


class SpotifyViews(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def create_spotify_token(self, request):
        url = 'https://accounts.spotify.com/api/token'
        headers = {
            "content-type": "application/x-www-form-urlencoded"
        }
        data = {
            "grant_type": "client_credentials",
            "client_id": "220bc6fbfe2c4df28c4bad2b9095b391",
            "client_secret": "0bbb4cbabbdc4b229e9220c34c180758"
        }

        encoded_data = urlencode(data)
        response = requests.post(url, headers=headers, data=encoded_data)

        if response.status_code == 200:
            return response.json()["access_token"]
        else:
            return JsonResponse({"error": "Failed to get Spotify token"}, status=500)
            

    