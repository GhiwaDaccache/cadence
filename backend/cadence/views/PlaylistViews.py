# Dependencies
from rest_framework import status;
from rest_framework.views import APIView;
from rest_framework.response import Response;
from rest_framework.permissions import IsAuthenticated;
from rest_framework_simplejwt.authentication import JWTAuthentication;

# Models
from ..models.PlaylistModel import Playlist;

# Serializers
from ..serializers.PlaylistSerializer import PlaylistSerializer;

class PlaylistViews(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    
    def post(self, request):
        try:
            serializer = PlaylistSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'Playlist added successfully.', 'data': serializer.data}, status=status.HTTP_201_CREATED)
            return Response({'message': 'Failed to add playlist.', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        
        except Exception as error:
            return Response({'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def get(self, request, pk=None):  
        try:
            if pk is not None:
                playlist = Playlist.objects.get(pk=pk)
                serializer = PlaylistSerializer(playlist)
                return Response({'message': 'Success.', 'data': serializer.data}, status=status.HTTP_200_OK)
            
            else:
                playlists = Playlist.objects.all()
                serializer = PlaylistSerializer(playlists, many=True)
                return Response({'message': 'success.', 'data': serializer.data}, status=status.HTTP_200_OK)
            
        except Playlist.DoesNotExist:
            return Response({'message': 'Playlist not found.'}, status=status.HTTP_404_NOT_FOUND)
        
        except Exception as error:
            return Response({'message': 'Failed to get playlist.', 'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
   
    # def delete_playlist(request, id):
    #     try:
    #         playlist = Playlist.objects.get(pk=id)
    #     except Playlist.DoesNotExist:
    #         return Response({'message': 'Playlist not found.'}, status=status.HTTP_404_NOT_FOUND)
    #     playlist.delete()
    #     return Response({'message': 'Playlist successfully deleted.'}, status=status.HTTP_204_NO_CONTENT)
    

    