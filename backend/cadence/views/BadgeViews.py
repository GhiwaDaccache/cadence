# Dependencies
from rest_framework import status;
from rest_framework.views import APIView;
from rest_framework.response import Response;
from rest_framework.permissions import IsAuthenticated;
from rest_framework_simplejwt.authentication import JWTAuthentication;

# models
from ..models.BadgeModel import Badge;

# Serializers
from ..serializers.BadgeSerializer import BadgeSerializer;



class BadgeViews(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            serializer = BadgeSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'Badge added successfully', 'data': serializer.data}, status=status.HTTP_201_CREATED)
            return Response({'message': 'Failed to add badge'}, serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as error:
            return Response({'message': 'Failed to add badge', 'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        

    def get(self, request):
        try:
            badges = Badge.objects.all()
            serializer = BadgeSerializer(badges, many=True)
            return Response({'message': 'Success.', 'data': serializer.data}, status=status.HTTP_200_OK)
        except Exception as error:
            return Response({'message': 'failed to get badges', 'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
