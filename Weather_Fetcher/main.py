"""Fetches weather data from OpenWeather's API"""

from doctest import ELLIPSIS_MARKER
import json
import requests

KEY_FILE = "api.json"
BASE_URL = "http://api.openweathermap.org/data/2.5/weather"

with open("api.json", "r", encoding="utf-8") as f:
    saved_key = json.load(f)

key = saved_key["key"]

city = input("Enter a city name")

request_url = f"{BASE_URL}?appid={key}&q={city}"
response = requests.get(request_url)

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print("An error ocurred.")
