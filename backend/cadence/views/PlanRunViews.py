# Dependencies
from rest_framework import status;
from rest_framework.views import APIView;
from rest_framework.response import Response;
from rest_framework.permissions import IsAuthenticated;
from rest_framework_simplejwt.authentication import JWTAuthentication;

# Models
from ..models.RunModel import Run;
from ..models.PlanRunModel import PlanRun;
from ..models.RecordedRunModel import RecordedRun;

# Serializers
from ..serializers.RunSerializer import RunSerializer;
from ..serializers.PlanRunSerializer import PlanRunSerializer;
from ..serializers.RecordedRunSerializer import RecordedRunSerializer;


class PlanRunViews(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            serializer = PlanRunSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'Added successfully', 'data': serializer.data}, status=status.HTTP_201_CREATED)
            return Response({'message': 'Failed to add', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as error:
            return Response({'message': 'Failed to add', 'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
    def put(self, request, pk):
        try:
            plan_run = PlanRun.objects.get(pk=pk)
            serializer = PlanRunSerializer(plan_run, data=request.data)

            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'Updated successfully', 'data': serializer.data}, status=status.HTTP_200_OK)
            return Response({'message': 'Failed to update', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        
        except Exception as error:
            return Response({'message': 'Failed to update', 'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
    def get(self, request):
        try:
            user = request.user
            recorded_runs = RecordedRun.objects.filter(user = user, run__isnull = False).order_by('-recorded_on')
            run_ids = recorded_runs.values_list('run_id', flat=True)
            last_recorded_run = recorded_runs.first()

            plan_runs = PlanRun.objects.get(run_id__in = run_ids)
            current_plan_run = PlanRun.objects.get(run_id = last_recorded_run.run_id)
            week = current_plan_run.week
            plan_id = current_plan_run.plan_id

            runs = Run.objects.filter(planrun__plan_id = plan_id)
            run_serializer = RunSerializer(runs, many = True)
            plan_runs = PlanRun.objects.filter(plan_id = plan_id, week = week)
            plan_run_serializer = PlanRunSerializer(plan_runs, many = True)
            recorded_runs_serializer = RecordedRunSerializer(recorded_runs, many = True)

            data = {
                'recorded_runs': recorded_runs_serializer.data,
                'runs': run_serializer.data,
                'plan_runs': plan_run_serializer.data
            }
            
            return Response({'message': 'Success', 'data': data}, status=status.HTTP_200_OK)
        
        except Exception as error:
            return Response({'message': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
   