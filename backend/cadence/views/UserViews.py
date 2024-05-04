from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.decorators import api_view
from rest_framework.response import Response
from ..serializers.UserSerializer import UserProfileSerializer
from ..models.Usermodel import UserProfile
from django.http import JsonResponse
from django.shortcuts import get_object_or_404

class User(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        content = {'message': 'Hello, World!'}
        return Response(content)
    
@api_view(['POST'])
def create_user(request):
    if request.method == 'POST':
        serializer = UserProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
def get_user_by_id(request, user_id):
    user_profile = get_object_or_404(UserProfile, user_id=user_id)
    
    serializer = UserProfileSerializer(user_profile)
    
    return Response(serializer.data)
