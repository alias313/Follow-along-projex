"""Fetches weather data from OpenWeather's API"""

import json
import requests

KEY_FILE = "api.json"
BASE_URL = "http://api.openweathermap.org/data/2.5/weather"

with open("api.json", "r", encoding="utf-8") as f:
    saved_key = json.load(f)

key = saved_key["key"]

city = input("Enter a city name: ")

#request_url = f"{BASE_URL}?appid={key}&q={city}&units=metric"
request_url = f"{BASE_URL}?appid={key}&q={city}&units=metric"
response = requests.get(request_url)

if response.status_code == 200:
    data = response.json()
    weather = data["weather"][0]["description"]
    print("Weather:", weather)
    temperature = round(data["main"]["temp"], 2)
    print("Temperature:", temperature, "C")
    humidity = data["main"]["humidity"]
    print("Humidity:", humidity, "%")
    wind_speed = data["wind"]["speed"]
    print("Wind speed:", wind_speed, "m/s")
    timezone = data["timezone"]
    print("Timezone:", timezone//3600-2, "h from Spain")
else:
    print("An error ocurred.")
