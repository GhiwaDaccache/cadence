from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from ..models.FavoritePlaylistModel import FavoritePlaylist
from ..models.PlaylistModel import Playlist
from ..serializers.FavoritePlaylistSerializer import FavoritePlaylistSerializer
from ..serializers.PlaylistSerializer import PlaylistSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication


class FavoritePlaylistViews(APIView):
    # authentication_classes = [JWTAuthentication]
    # permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            serializer = FavoritePlaylistSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'Playlist added to favorites', 'data': serializer.data}, status=status.HTTP_201_CREATED)
            return Response({'message': 'Failed to add to favorites', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as error:
            return Response({'message': 'Failed to add to favorites', 'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def get(self, request, user_id):
        try:
            favorite_playlists = FavoritePlaylist.objects.filter(user_id=user_id)
            playlist_ids = favorite_playlists.values_list('playlist_id', flat=True)
            playlists = Playlist.objects.filter(id__in=playlist_ids)
            serializer = PlaylistSerializer(playlists, many=True)
            if len(serializer.data) >= 1:
                return Response({'message':'Success', 'data': serializer.data}, status=status.HTTP_200_OK)
            else:
                return Response({'message':'No data', 'data': serializer.data}, status=status.HTTP_200_OK)
        except Exception as error:
            return Response({'message': 'Failed to get playlists', 'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
    def delete(self, request):
        try:
            user = request.data.get('user')
            playlist_id = request.data.get('playlist')
            favorite_playlist = FavoritePlaylist.objects.filter(user=user, playlist_id=playlist_id).first()
            if favorite_playlist:
                favorite_playlist.delete()  
                return Response({'message': 'Playlist removed from favorites'}, status=status.HTTP_204_NO_CONTENT)
            else:
                return Response({'message': 'Playlist not found'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as error:
            return Response({'message': 'Failed to remove playlist', 'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
