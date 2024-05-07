# Dependencies
from rest_framework import status;
from rest_framework.views import APIView;
from rest_framework.response import Response;
from rest_framework.permissions import IsAuthenticated;
from rest_framework_simplejwt.authentication import JWTAuthentication;

# Models
from ..models.PlanModel import Plan;

# Serializers
from ..serializers.PlanSerializer import PlanSerializer;

class PlanViews(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            serializer = PlanSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'Plan created successfully.', 'data': serializer.data}, status=status.HTTP_201_CREATED)
            return Response({'message': 'Failed to create plan.', 'error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as error:
            return Response({'message': 'Failed to create plan.', 'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


    def get(self, request, pk=None):  
        try:
            if pk is not None:
                plan = Plan.objects.get(pk=pk)
                serializer = PlanSerializer(plan)
                return Response({'message': 'Success.', 'data': serializer.data}, status=status.HTTP_200_OK)
            
            else:
                plans = Plan.objects.all()
                serializer = PlanSerializer(plans, many=True)
                return Response({'message': 'success.', 'data': serializer.data}, status=status.HTTP_200_OK)
            
        except Plan.DoesNotExist:
            return Response({'message': 'Plan not found.'}, status=status.HTTP_404_NOT_FOUND)
        
        except Exception as error:
            return Response({'message': 'Failed to get plan.', 'error': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        

    def delete(self, request, pk):
        try:
            plan = Plan.objects.get(pk=pk)
            plan.delete()
            return Response({'message': 'Plan successfully deleted.'}, status=status.HTTP_204_NO_CONTENT)
        
        except Plan.DoesNotExist:
            return Response({'message': 'Plan not found.'}, status=status.HTTP_404_NOT_FOUND)
        
        
    

    