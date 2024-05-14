# Dependencies
from datetime import time;
from django.db.models import Max;
from rest_framework import status;
from rest_framework.views import APIView;
from rest_framework.response import Response;
from rest_framework.permissions import IsAuthenticated;
from rest_framework_simplejwt.authentication import JWTAuthentication;

# Models
from ..models.BadgeModel import Badge;
from ..models.RecordedRunModel import RecordedRun;
from ..models.EarnedBadgeModel import EarnedBadge;

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
                recorded_run = serializer.save()

                user_run_count = RecordedRun.objects.filter(user=user_id).count()
                if user_run_count == 1:
                    first_badge = Badge.objects.get(name='First Run')
                    EarnedBadge.objects.create(badge=first_badge, recorded_run=recorded_run)

                longest_distance = RecordedRun.objects.filter(user=user_id).aggregate(max_distance=Max('real_distance'))['max_distance']
                if longest_distance == recorded_run.real_distance:
                    longest_distance_badge = Badge.objects.get(name='Longest Distance')
                    EarnedBadge.objects.filter(badge=longest_distance_badge, recorded_run__user=user_id).delete()
                    EarnedBadge.objects.create(badge=longest_distance_badge, recorded_run=recorded_run)

                longest_duration = RecordedRun.objects.filter(user=user_id).aggregate(max_duration=Max('real_duration'))['max_duration']
                if longest_duration == recorded_run.real_duration:
                    longest_duration_badge = Badge.objects.get(name='Longest Duration')
                    EarnedBadge.objects.filter(badge=longest_duration_badge, recorded_run__user=user_id).delete()
                    EarnedBadge.objects.create(badge=longest_duration_badge, recorded_run=recorded_run)

                if recorded_run.start_time < time(7, 30):
                    early_bird_badge = Badge.objects.get(name='Early Bird')
                    EarnedBadge.objects.create(badge=early_bird_badge, recorded_run=recorded_run)


                return Response({'message': 'Run added successfully', 'data': serializer.data}, status=status.HTTP_201_CREATED)
            return Response({'message': 'Failed to add run', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        
        except Exception as error:
            return Response({'message': 'Failed to add run', 'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def get(self, request):
        try:
            user = request.user
            recorded_runs = RecordedRun.objects.filter(user=user)
            serializer = RecordedRunSerializer(recorded_runs, many=True)
            return Response(serializer.data)

        except Exception as error:
            return Response({'message': 'Failed to retrieve runs', 'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
