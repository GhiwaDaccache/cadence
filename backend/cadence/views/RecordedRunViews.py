from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from ..models.RecordedRunModel import RecordedRun
from ..serializers.RecordedRunSerializer import RecordedRunSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication


class RecordedRunViews(APIView):
    # authentication_classes = [JWTAuthentication]
    # permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            serializer = RecordedRun(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'Run added successfully', 'data': serializer.data}, status=status.HTTP_201_CREATED)
            return Response({'message': 'Failed to add run', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as error:
            return Response({'message': 'Failed to add run', 'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    
