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
                "code": "AQAUc4OIvOnjQQV4AClYLXkl5LlJ3Sjj_qlY06aeagHd8Ysy84oFYKvVADx02087LKgpS4KKYSNcOU9xb-u3S5oTSkhlCNZ-vABrsHGSq5Juzn3W4ClhfVtl5oEBi2Tg7VTIgX1_sjEoQKP7jKu9gIGpywUxK4C6hz0kfWVlbxr085BwfMlO4uAw2tzQxFYy3kxlLKOWJyxQzALA9LOauafgnYx3glMxT67XmkGkfBF-0ybVbEfKpxQyAtjFxGlWsvAgUKKguCP8gp88gFR49eZx1btQ09kzODhOYKLqLCk79mda9ab0mGDgZ-9PyYtGLH3LGcPlmfEPscCrSsen8HefpO-JwcmvrzPcYASbzWgIYM7zLybq0DO1K1JqXQIlxrlAiE1wNMOzRV9cFcLAQ5qpNDtGkIj92-bkRrvO_r01e3f9SXg4pGoZyF_oB_PtJf-fydWqI8hJes5Oz6yGS9EwB7eKGUGALN4EkpJZ_8purXhkhnlMoI6hvWG4N4Z6lpi5J20AY-tpkBFBEuFXqY8mnd5e4LXvJwmHFFwWul_qkdXxn_pqKDV9Em1FUoO_4CjH3bIIQLXRZeQ8N-E",
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

