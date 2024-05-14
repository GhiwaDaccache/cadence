# Dependencies
from rest_framework import status;
from rest_framework.views import APIView;
from rest_framework.response import Response;
from rest_framework.permissions import IsAuthenticated;
from rest_framework_simplejwt.authentication import JWTAuthentication;

# Models
from ..models.EarnedBadgeModel import EarnedBadge;

# Serializers
from ..serializers.EarnedBadgeSerializer import EarnedBadgeSerializer;
from ..serializers.RecordedRunSerializer import RecordedRunSerializer;


class EarnedBadgeViews(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            serializer = EarnedBadgeSerializer(data=request.data)

            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'Earned badge added successfully', 'data': serializer.data}, status=status.HTTP_201_CREATED)
            return Response({'message': 'Failed to add earned badge', 'error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        
        except Exception as error:
            return Response({'message': 'Failed to add earned badge', 'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
    def get(self, request):
        try:
            user_id = request.user.id
            earned_badges = EarnedBadge.objects.filter(recorded_run__user_id = user_id)
            run_data = []

            for badge in earned_badges:
                earned_badge = EarnedBadgeSerializer(badge).data
                recorded_run = RecordedRunSerializer(badge.recorded_run).data
                earned_badge['recorded_run'] = recorded_run
                run_data.append(earned_badge)

            return Response({'message': 'Success', 'data': run_data}, status=status.HTTP_200_OK)
        
        except Exception as error:
            return Response({'message': 'Failed to get badges', 'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, request):
        try:
            user_id = request.user.id
            badge_id = request.data.get('badge')
            earned_badge = EarnedBadge.objects.filter(recorded_run__user_id = user_id, badge_id = badge_id).first()

            if earned_badge:
                earned_badge.delete()  
                return Response({'message': 'Badge removed.'}, status=status.HTTP_204_NO_CONTENT)
            else:
                return Response({'message': 'Badge not found'}, status=status.HTTP_404_NOT_FOUND)
            
        except Exception as error:
            return Response({'message': 'Failed to delete badge', 'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
    
