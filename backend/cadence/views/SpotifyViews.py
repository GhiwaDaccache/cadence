# Dependencies
import requests;
import json; 
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
            url = 'https://accounts.spotify.com/authorize?response_type=code&client_id=220bc6fbfe2c4df28c4bad2b9095b391&scope=user-modify-playback-state&redirect_uri=cadence://profile&state=state'

            headers = {
                'Cookie': 'sp_landing=https%3A%2F%2Fopen.spotify.com%2Falbum%2F0tGPJ0bkWOUmH7MEOR77qc%3Fsp_cid%3D506d19abc0c59f1a316f6a2947031fe0%26device%3Ddesktop; sp_t=506d19abc0c59f1a316f6a2947031fe0; __Host-device_id=AQBzMMiya3K9hGyUeEdmTFizoqoYW6UDJ3R9K1dwsesnGRmo8idHMaoSa0X3Refutlqmf5JAhuRajMHlX3_PnyIYio-fRc4xNU4; __Host-sp_csrf_sid=ba8cdd35100ca9c2e34eeb43da4e15838f99e96f8221d3692af128ffd801624c; __Secure-TPASESSION=AQAcUEplrH6LS5A9xTwO5ybkWytQWHb1kOEbkWC14xfpec2oIK2nUxrkKC7UG/0sfWME8sMq6Ef/78AJqaA233tWqkwuw3KK7Kw=; inapptestgroup=; sp_sso_csrf_token=013acda7197df5ba047e69110b70d82a8e520e952f31373135363330363934353936; sp_tr=false'
            }

            response = requests.get(url, headers=headers)

            print(response.text)

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
     

    def generate_playlist(request):
        try:
            token_response = SpotifyViews.create_spotify_token(request).content
            response_data = token_response.decode('utf-8') 
            token = json.loads(response_data)["access_token"]
            print("token", token)
            url = 'https://api.spotify.com/v1/recommendations'
            headers = {
                "Authorization": f"Bearer {token}"
            }
            params = {
                "limit": 5,
                "seed_artists": "4NHQUGzhtTLFvgF5SZesLK",
                "seed_genres": "classical",
                "seed_tracks": "0c6xIDDpzE81m2q797ordA",
                "min_tempo": 120,
                "max_tempo": 150
            }

            response = requests.get(url, headers=headers, params=params)

            if response.status_code == 200:
                return JsonResponse(response.json())
            else:
                return JsonResponse({"error": "Failed to fetch playlists"}, status=response.status_code)
            
        except Exception as e:
            return JsonResponse({"error": e}, status=500)

