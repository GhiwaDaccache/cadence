# Dependencies
from rest_framework import status;
from rest_framework.views import APIView;
from rest_framework.response import Response;
from rest_framework.permissions import IsAuthenticated;
from rest_framework_simplejwt.authentication import JWTAuthentication;

# Models
from ..models.RunModel import Run;

# Serializers
from ..serializers.RunSerializer import RunSerializer;



class RunViews(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            serializer = RunSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'Run added successfully', 'data': serializer.data}, status=status.HTTP_201_CREATED)
            return Response({'message': 'Failed to add run', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        
        except Exception as error:
            return Response({'message': 'Failed to add run', 'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    def delete(self, request, pk):
        try:
            run = Run.objects.get(pk=pk)
            run.delete()
            return Response({'message': 'Run successfully deleted.'}, status=status.HTTP_204_NO_CONTENT)
        
        except Run.DoesNotExist:
            return Response({'message': 'Run not found.'}, status=status.HTTP_404_NOT_FOUND)
        
   