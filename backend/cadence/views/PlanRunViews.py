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
            last_recorded_run = RecordedRun.objects.filter(user = user, run__isnull = False).latest('recorded_on')
            run_id = last_recorded_run.run_id

            plan_run = PlanRun.objects.get(run_id = run_id)
            week = plan_run.week
            plan_id = plan_run.plan_id

            runs = Run.objects.filter(planrun__plan_id = plan_id)
            run_serializer = RunSerializer(runs, many = True)
            plan_runs = PlanRun.objects.filter(plan_id = plan_id, week = week)
            plan_run_serializer = PlanRunSerializer(plan_runs, many = True)
            recorded_run_serializer = RecordedRunSerializer(last_recorded_run)

            data = {
                'last_recorded_run': recorded_run_serializer.data,
                'runs': run_serializer.data,
                'plan_runs': plan_run_serializer.data
            }
            
            return Response({'message': 'Success', 'data': data}, status=status.HTTP_200_OK)
        
        except Exception as error:
            return Response({'message': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
   