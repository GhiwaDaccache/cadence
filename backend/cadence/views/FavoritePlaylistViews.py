# Dependencies
from rest_framework import status;
from rest_framework.views import APIView;
from rest_framework.response import Response;
from rest_framework.permissions import IsAuthenticated;
from rest_framework_simplejwt.authentication import JWTAuthentication;

# Models
from ..models.PlaylistModel import Playlist;
from ..models.SpotifySongModel import SpotifySong;
from ..models.FavoritePlaylistModel import FavoritePlaylist;

# Serializers
from ..serializers.PlaylistSerializer import PlaylistSerializer;
from ..serializers.SpotifySongSerializer import SpotifySongSerializer;
from ..serializers.FavoritePlaylistSerializer import FavoritePlaylistSerializer;


class FavoritePlaylistViews(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            user_id = request.user.id
            playlist_id = request.data.get('playlist')
            if FavoritePlaylist.objects.filter(user=user_id, playlist_id=playlist_id).exists():
                return Response({'message': 'Playlist is already added to favorites'}, status=status.HTTP_400_BAD_REQUEST)

            request.data['user'] = user_id
            serializer = FavoritePlaylistSerializer(data=request.data)

            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'Playlist added to favorites', 'data': serializer.data}, status=status.HTTP_201_CREATED)
            
            return Response({'message': 'Failed to add to favorites', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        
        except Exception as error:
            return Response({'message': 'Failed to add to favorites', 'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


    def get(self, request):
        try:
            user_id = request.user.id
            favorite_playlists = FavoritePlaylist.objects.filter(user_id=user_id)
            playlist_ids = favorite_playlists.values_list('playlist_id', flat=True)
            playlists = Playlist.objects.filter(id__in=playlist_ids)
            playlist_data = []
            
            for playlist in playlists:
                songs = SpotifySong.objects.filter(playlist=playlist)
                playlist_serializer = PlaylistSerializer(playlist)
                songs_serializer = SpotifySongSerializer(songs, many=True)

                playlist_info = {
                    'playlist': playlist_serializer.data,
                    'songs': songs_serializer.data
                }
                playlist_data.append(playlist_info)

            if len(playlist_data) >= 1:
                return Response({'message':'Success', 'data': playlist_data}, status=status.HTTP_200_OK)
            else:
                return Response({'message':'No data', 'data': playlist_data}, status=status.HTTP_200_OK)
            
        except Exception as error:
            return Response({'message': 'Failed to get playlists', 'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        
    def delete(self, request):
        try:
            user_id = request.user.id
            playlist_id = request.data.get('playlist')
            favorite_playlist = FavoritePlaylist.objects.filter(user=user_id, playlist_id=playlist_id).first()
            if favorite_playlist:
                favorite_playlist.delete()  
                return Response({'message': 'Playlist removed from favorites'}, status=status.HTTP_204_NO_CONTENT)
            else:
                return Response({'message': 'Playlist not found'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as error:
            return Response({'message': 'Failed to remove playlist', 'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
