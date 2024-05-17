# Dependencies
import os;
from openai import OpenAI;
from dotenv import load_dotenv;
from rest_framework import status;
from rest_framework.views import APIView;
from rest_framework.response import Response;

load_dotenv()

class ChatCompletionView(APIView):
    def post(self, request):
        api_key = os.getenv("OPENAI_KEY")
        if not api_key:
            return Response({"error": "OpenAI API key not found."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        client = OpenAI(api_key=api_key)


        user_input = request.data.get("message")
        if not user_input:
            return Response({"error": "No message provided."}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            completion = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": "You are a running coach with 10 years of experience. You help runners with their inquiries, especially concerning pace, cadence, stride, and how music, rhythm, and tempo can enhance their performance."},
                    {"role": "user", "content": user_input}
                ]
            )

            assistant_response = completion.choices[0].message
            return Response({"response": assistant_response}, status=status.HTTP_200_OK)
        
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)





    

