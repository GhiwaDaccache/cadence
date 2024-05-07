# Dependencies
from rest_framework import status;
from rest_framework.views import APIView;
from rest_framework.response import Response;
from rest_framework.permissions import IsAuthenticated;
from rest_framework_simplejwt.authentication import JWTAuthentication;

# Models
from ..models.RecordedRunModel import RecordedRun;

# Serializers
from ..serializers.RecordedRunSerializer import RecordedRunSerializer;


class RecordedRunViews(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            user_id = request.user.id
            request.data['user'] = user_id
            serializer = RecordedRunSerializer(data=request.data)
            
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'Run added successfully', 'data': serializer.data}, status=status.HTTP_201_CREATED)
            return Response({'message': 'Failed to add run', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        
        except Exception as error:
            return Response({'message': 'Failed to add run', 'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def get(self, request):
        user = request.user
        recorded_runs = RecordedRun.objects.filter(user=user)
        serializer = RecordedRunSerializer(recorded_runs, many=True)
        return Response(serializer.data)
