# Dependencies
from rest_framework import status;
from rest_framework.views import APIView;
from rest_framework.response import Response;
from django.shortcuts import get_object_or_404;
from rest_framework.permissions import IsAuthenticated;
from rest_framework_simplejwt.authentication import JWTAuthentication;

# Models
from ..models.PlaylistModel import Playlist;
from ..models.SpotifySongModel import SpotifySong;

# Serializers
from ..serializers.PlaylistSerializer import PlaylistSerializer;
from ..serializers.SpotifySongSerializer import SpotifySongSerializer;

class PlaylistInfo(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, pk):
        try:
            playlist = get_object_or_404(Playlist, pk=pk)
            songs = SpotifySong.objects.filter(playlist=playlist)
            playlist_serializer = PlaylistSerializer(playlist)
            songs_serializer = SpotifySongSerializer(songs, many=True)

            playlist_data = {
                'playlist': playlist_serializer.data,
                'songs': songs_serializer.data
            }
            return Response(playlist_data)
        
        except Playlist.DoesNotExist:
            return Response({'message': 'Playlist not found.'}, status=status.HTTP_404_NOT_FOUND)
        
        except Exception as error:
            return Response({'message': 'Failed to get playlist.', 'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            