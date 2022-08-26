import json
import requests

KEY_FILE = "api.json"
BASE_URL = "http://api.openweathermap.org/data/2.5/weather"

with open("api.json", "r", encoding="utf-8") as f:
    saved_key = json.load(f)

key = saved_key["key"]

city = input("Enter a city name")

