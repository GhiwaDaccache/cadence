# Dependencies
import requests; 
from urllib.parse import urlencode;
from django.http import JsonResponse;
from rest_framework import status;
from rest_framework.views import APIView;
from rest_framework.permissions import IsAuthenticated;
from rest_framework_simplejwt.authentication import JWTAuthentication;
from rest_framework.decorators import api_view, throttle_classes

class SpotifyViews(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def create_spotify_token(request):
        try:
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
                return JsonResponse(response.json())
            else:
                return JsonResponse({"error": "Failed to get Spotify token"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
        except Exception as error:
            return JsonResponse({"error": str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        
                


