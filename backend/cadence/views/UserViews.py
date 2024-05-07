from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.decorators import api_view
from rest_framework.response import Response
from ..serializers.UserSerializer import UserProfileSerializer
from ..models.Usermodel import UserProfile
from django.shortcuts import get_object_or_404
    
class RegistrationViews(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        try:
            serializer = UserProfileSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as error:
            return Response({'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class UserViews(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        print("request: ", request)
        try:
            user_profile = request.user.userprofile
            serializer = UserProfileSerializer(user_profile)
            return Response(serializer.data)
        except Exception as error:
            return Response({'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
# # Fix user serializer
# @api_view(['PUT'])
# def edit_user(request, user_id):
#     user_profile = get_object_or_404(UserProfile, user_id=user_id)
#     serializer = UserProfileSerializer(user_profile, data=request.data)
    
#     if serializer.is_valid():
#         serializer.save()
#         return Response(serializer.data)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)