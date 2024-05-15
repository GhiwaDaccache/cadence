# Dpendencies
import time;
from django.db.models import Sum;
from rest_framework import status;
from rest_framework.views import APIView;
from rest_framework.response import Response;
from django.shortcuts import get_object_or_404;
from rest_framework.decorators import api_view;
from rest_framework.permissions import IsAuthenticated, AllowAny;
from rest_framework_simplejwt.authentication import JWTAuthentication;

# Serializers
from ..serializers.PlanSerializer import PlanSerializer;
from ..serializers.UserSerializer import UserProfileSerializer;

# Models
from ..models.PlanModel import Plan;
from ..models.PlanRunModel import PlanRun;
from ..models.Usermodel import UserProfile;

    
class RegistrationViews(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        try:
            serializer = UserProfileSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'success', 'data': serializer.data}, status=status.HTTP_201_CREATED)
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
            image_type = request.data.get('image_type')

            if image_file:
                timestamp = str(int(time.time()))
                image_name = f"{timestamp}{image_file.name}"

                with open('cadence/media/profile_images/' + image_name, 'wb+') as destination:
                    for chunk in image_file.chunks():
                        destination.write(chunk)
                
                if image_type == 'profile_photo':
                    user_profile.profile_photo_name = image_name
                elif image_type == 'cover_photo':
                    user_profile.cover_photo_name = image_name
                
                user_profile.save()
                return Response({'message': 'Image uploaded successfully'}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'No image found'}, status=status.HTTP_400_BAD_REQUEST)
            
        except Exception as error:
            return Response({'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR) 


    def put(self, request, *args, **kwargs):
        try:
            serializer = UserProfileSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'PUT request processed'}, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as error:
            return Response({'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    @api_view(['GET'])
    def get_user_plan(request, ):
        try:
            user = request.user
            user_profile = UserProfile.objects.get(user=user)

            if user_profile.plan:
                plan = user_profile.plan
                total_distance = PlanRun.objects.filter(plan=plan).aggregate(total_distance=Sum('run__distance')).get('total_distance') or 0
                plan.distance = total_distance
                serializer = PlanSerializer(plan)
                return Response({'message': 'Success', 'data': serializer.data}, status=status.HTTP_200_OK)
            else:
                return Response({'message': 'User has no plan.'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as error:
            return Response({'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



class UserUpdateAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request):
        user = request.user
        user_profile = UserProfile.objects.get(user=user)
        serializer = UserProfileSerializer(user_profile, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    
    def post(self, request):
        user = request.user
        user_profile = UserProfile.objects.get(user=user)
        plan_id = request.data.get('plan_id')  
        if not plan_id:
            return Response({'error': 'Plan not found'}, status=status.HTTP_400_BAD_REQUEST)
        
        plan = get_object_or_404(Plan, pk=plan_id)
        user_profile.plan = plan
        user_profile.save()  
        serializer = UserProfileSerializer(user_profile)

        return Response({'message': 'Plan added', 'data': serializer.data })
       
        