from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.decorators import api_view
from rest_framework.response import Response
from ..serializers.UserSerializer import UserProfileSerializer
from ..models.Usermodel import UserProfile
from django.shortcuts import get_object_or_404
    
@api_view(['POST'])
def register(request):
    try:
        if request.method == 'POST':
            serializer = UserProfileSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Exception as error:
        return Response({'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class User(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

@api_view(['GET'])
def get_user_by_id(request, id):
    try:
        user_profile = get_object_or_404(UserProfile, user_id=id)
        serializer = UserProfileSerializer(user_profile)
        return Response(serializer.data)
    except Exception as error:
        return Response({'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['PUT'])
def edit_user(request, user_id):
    user_profile = get_object_or_404(UserProfile, user_id=user_id)
    serializer = UserProfileSerializer(user_profile, data=request.data)
    
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)