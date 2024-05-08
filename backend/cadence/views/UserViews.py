from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.decorators import api_view
from rest_framework.response import Response
from ..serializers.UserSerializer import UserProfileSerializer
from ..models.Usermodel import UserProfile
import time
    
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
        try:
            user_profile = request.user.userprofile
            serializer = UserProfileSerializer(user_profile)
            return Response(serializer.data)
        except Exception as error:
            return Response({'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
    @api_view(['POST'])
    def upload_image(request):
        try:
            user_profile = request.user.userprofile
            image_file = request.data.get('image')

            if image_file:
                image_name = image_file.name
                with open('cadence/media/profile_images/' + image_name, 'wb+') as destination:
                    for chunk in image_file.chunks():
                        destination.write(chunk)
                
                user_profile.profile_photo_name = image_name
                user_profile.save()
                
                return Response({'message': 'Image uploaded successfully'}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'No image found'}, status=status.HTTP_400_BAD_REQUEST)
            
        except Exception as error:
            return Response({'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR) 

    # def put(self, request):
    #     user_profile = request.user.userprofile
    #     serializer = UserProfileSerializer(user_profile, data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)