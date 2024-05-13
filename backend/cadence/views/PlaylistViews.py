# Dependencies
from rest_framework import status;
from rest_framework.views import APIView;
from rest_framework.response import Response;
from rest_framework.permissions import IsAuthenticated;
from rest_framework_simplejwt.authentication import JWTAuthentication;

# Models
from ..models.PlaylistModel import Playlist;
from ..models.SpotifySongModel import SpotifySong;

# Serializers
from ..serializers.PlaylistSerializer import PlaylistSerializer;
from ..serializers.SpotifySongSerializer import SpotifySongSerializer;

class PlaylistViews(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    
    def post(self, request):
        try:
            serializer = PlaylistSerializer(data=request.data)
            if serializer.is_valid():
                playlist = serializer.save()

                playlist_id = playlist.id
                songs_data = request.data.get('songs', []) 
                for song in songs_data:
                    song['playlist'] = playlist_id  
                    song_serializer = SpotifySongSerializer(data=song)
                    if song_serializer.is_valid():
                        song_serializer.save()
                    else:
                        return Response({'message': 'Failed to add songs.', 'error': song_serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

                return Response({'message': 'Playlist added successfully.', 'data': serializer.data}, status=status.HTTP_201_CREATED)
            return Response({'message': 'Failed to add playlist.', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        
        except Exception as error:
            return Response({'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


    def get(self, request, pk=None):  
        try:
            if pk is not None:
                playlist = Playlist.objects.get(pk=pk)
                songs = SpotifySong.objects.filter(playlist=playlist)
                playlist_serializer = PlaylistSerializer(playlist)
                songs_serializer = SpotifySongSerializer(songs, many=True)
                playlist_data = []

                playlist_info = {
                    'playlist': playlist_serializer.data,
                    'songs': songs_serializer.data
                }
                playlist_data.append(playlist_info)
                return Response({'message': 'Success.', 'data': playlist_data}, status=status.HTTP_200_OK)
            
            else:
                playlists = Playlist.objects.all()
                serializer = PlaylistSerializer(playlists, many=True)
                return Response({'message': 'success.', 'data': serializer.data}, status=status.HTTP_200_OK)
            
        except Playlist.DoesNotExist:
            return Response({'message': 'Playlist not found.'}, status=status.HTTP_404_NOT_FOUND)
        
        except Exception as error:
            return Response({'message': 'Failed to get playlist.', 'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
   
    def delete(self, request, pk):
        try:
            playlist = Playlist.objects.get(pk=pk)
            playlist.delete()
            return Response({'message': 'Playlist successfully deleted.'}, status=status.HTTP_204_NO_CONTENT)
        
        except Playlist.DoesNotExist:
            return Response({'message': 'Playlist not found.'}, status=status.HTTP_404_NOT_FOUND)
        
    
        
        