import os
from openai import OpenAI
from dotenv import load_dotenv
from django.conf import settings



def main():
    load_dotenv()
    api_key = os.getenv("OPENAI_KEY", None)

    print(1)
    # Pass the API key to the OpenAI client constructor
    client = OpenAI(api_key=api_key)
    print(client)

    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": "count 1 to 10"}])
    print(3)

    print(completion)
    print(completion.choices[0].message)

if __name__ == "__main__":
    main()