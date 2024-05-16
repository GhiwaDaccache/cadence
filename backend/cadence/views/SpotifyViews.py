# Dependencies
import requests;
import json; 
import base64;
from urllib.parse import urlencode;
from django.http import JsonResponse;
from rest_framework import status;
from rest_framework.views import APIView;
from rest_framework.permissions import IsAuthenticated;
from rest_framework_simplejwt.authentication import JWTAuthentication;


class SpotifyViews(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    
    def create_spotify_token(request):
        try:
            client_id = "220bc6fbfe2c4df28c4bad2b9095b391"
            client_secret = "0bbb4cbabbdc4b229e9220c34c180758"

            credentials = f"{client_id}:{client_secret}"
            credentials_bytes = credentials.encode('utf-8')

            encoded_credentials = base64.b64encode(credentials_bytes).decode('utf-8')

            print("AAAAAAAAAAAAAAAAAAAAAAAAA")
            print(encoded_credentials)

            url = 'https://accounts.spotify.com/api/token'
            headers = {
                "content-type": "application/x-www-form-urlencoded",
                "Authorization": 'Basic ' + encoded_credentials
            }
            data = {
                "code": "AQDtDVW6RSLKO6-i_HZ2w1EK9Oy_FrCjjYeIfr9trLNy9mYjhRbZI873sTZZJZ4rNdKg5okjzyNgl_rz0-cOBHz4sS35pJx8G9Ktgucfdguuh4hleyWK2kmeHQaxr617pnHBRQL8mRtF3XBjkmbS3jV3n-_J2XVnE3idO264eh1CGxGw7P1BsxSyAm0SWQsBQPgbWibAs4x8zXIT0VRLMQfXoJ_EYx-eeVGtiq6_x-IorR7Lm3bQq9-yFHsD2JseiA8aNp1yCCuEdbizWtJZ1G6FMHv7DRzcELlJz3i5g1VosM7i7HqWFczqT30bCjyJZ5Ibr7Aj5bCVQ6rwtoLv73cnoYOs9yLTT8XNj6lt4QcIdbwB-XRK9_ZL42jiBZxCgwWV_ENQNih7aJUYY_eedZw-W8o2q15NMnpGRe_pvKjy2dfu7Vv995Mn8-q4nqAUmTUDn-uyseWih8qEo3UU7TVeZKfiUW83hzuLzZq6cKg5iNCf3-9ucLkoCQVauIqE78npuxHVqnCxPESsxIPU7YMJa56mi9JJASN3w94XDcca34JqHa9DZaw7a24Wxt_IB3BOSeIXoEvXb1vCDi4",
                "grant_type": "authorization_code",
                "redirect_uri": "exp://192.168.232.108:8081"
            }
#                   "client_id": "220bc6fbfe2c4df28c4bad2b9095b391",
#                   "client_secret": "0bbb4cbabbdc4b229e9220c34c180758",
            encoded_data = urlencode(data)
            response = requests.post(url, headers=headers, data=encoded_data)
            print(response)
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

