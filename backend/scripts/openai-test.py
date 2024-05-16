import os
import django

# Set the DJANGO_SETTINGS_MODULE environment variable
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
django.setup()

# Now you can import settings safely
from django.conf import settings
from openai import OpenAI

def main():
    # Retrieve OpenAI API key from settings
    api_key = settings.OPENAI_API_KEY

    print(1)
    # Pass the API key to the OpenAI client constructor
    client = OpenAI(api_key=api_key)
    print(2)

    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": "count 1 to 10"}])
    print(3)

    print(completion)
    print(completion.choices[0].message)

if __name__ == "__main__":
    main()
