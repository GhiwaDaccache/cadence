# Dependencies
import os;
from openai import OpenAI;
from dotenv import load_dotenv;
from rest_framework import status;
from rest_framework.views import APIView;
from rest_framework.response import Response;


def main():

    load_dotenv()
    api_key = os.getenv("OPENAI_KEY", None)
    if not api_key:
        raise ValueError("OpenAI API key not found.")
    client = OpenAI(api_key=api_key)
    print(client)

    user_input = input("Please enter your message: ")

    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a running coach with 10 years of experience. You help runners with their inquiries, especially concerning pace, cadence, stride, and how music, rhythm, and tempo can enhance their performance."},
            {"role": "user", "content": user_input}
        ]
    )

    assistant_response = completion.choices[0].message
    print("Assistant: ", assistant_response)

if __name__ == "__main__":
    main()