from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from ..models.PlaylistModel import Playlist
from ..serializers.PlaylistSerializer import PlaylistSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

class PlaylistViews(APIView):
    # authentication_classes = [JWTAuthentication]
    # permission_classes = [IsAuthenticated]

    # "detail": "Authentication credentials were not provided."
    def post(self, request):
        try:
            serializer = PlaylistSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as error:
            return Response({'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    # works without authentication 
    @api_view(['GET'])
    def get_all_playlists(request):
        try:
            playlists = Playlist.objects.all()
            serializer = PlaylistSerializer(playlists, many=True)
            return Response(serializer.data)
        except Exception as error:
            return Response({'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
    # works without authentication
    @api_view(['GET'])
    def get_playlist_by_id(request, id):
        try:
            playlist = Playlist.objects.get(pk=id)
            serializer = PlaylistSerializer(playlist)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Playlist.DoesNotExist:
            return Response({'message': 'Playlist not found.'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as error:
            return Response({'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
    # works without authentication
    @api_view(['DELETE'])
    def delete_playlist(request, id):
        try:
            playlist = Playlist.objects.get(pk=id)
        except Playlist.DoesNotExist:
            return Response({'message': 'Playlist not found.'}, status=status.HTTP_404_NOT_FOUND)
        playlist.delete()
        return Response({'message': 'Playlist successfully deleted.'}, status=status.HTTP_204_NO_CONTENT)
    

    