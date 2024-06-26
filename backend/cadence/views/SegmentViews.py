# Dependencies
from rest_framework import status;
from rest_framework.views import APIView;
from rest_framework.response import Response;
from rest_framework.permissions import IsAuthenticated;
from rest_framework_simplejwt.authentication import JWTAuthentication;

# Models
from ..models.SegmentModel import Segment;

# Serializers
from ..serializers.SegmentSerializer import SegmentSerializer;

class SegmentViews(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    
    def post(self, request):
        try:
            serializer = SegmentSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'Segment added successfully.', 'data': serializer.data}, status=status.HTTP_201_CREATED)
            return Response({'message': 'Failed to add segment.', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        
        except Exception as error:
            return Response({'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


    def get(self, request, run_id):
        try:
            segments = Segment.objects.filter(run_id=run_id)
            serializer = SegmentSerializer(segments, many=True)
            return Response({'message': 'success.', 'data': serializer.data}, status=status.HTTP_200_OK) 
       
        except Segment.DoesNotExist:
            return Response({'message': 'No segments found.'}, status=status.HTTP_404_NOT_FOUND)
        

    def delete(self, request, pk):
        try:
            segment = Segment.objects.get(pk=pk)
            segment.delete()
            return Response({'message': 'Segment successfully deleted.'}, status=status.HTTP_204_NO_CONTENT)
        
        except Segment.DoesNotExist:
            return Response({'message': 'Segment not found.'}, status=status.HTTP_404_NOT_FOUND)
        
        