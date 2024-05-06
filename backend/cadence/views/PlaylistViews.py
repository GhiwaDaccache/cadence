from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from ..serializers import PlaylistSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication


class PlaylistViews(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

# detail": "Authentication credentials were not provided."
    @csrf_exempt
    class PlaylistViews(APIView):
        def post(self, request):
            try:
                serializer = PlaylistSerializer(data=request.data)
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data, status=status.HTTP_201_CREATED)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except Exception as error:
                return Response({'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)