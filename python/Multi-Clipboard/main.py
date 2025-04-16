"""Save and load multiple items to our clipboard"""

import sys
import json
import clipboard

SAVED_DATA = "clipboard.json"

def save_data(filepath, copied_data):
    """Saves data on specified filepath"""
    with open(filepath, "w", encoding="utf-8") as file:
        json.dump(copied_data, file)


def load_data(filepath):
    """Loads filepath"""
    try:
        with open(filepath, "r", encoding="utf-8") as file:
            saved_data = json.load(file)
            return saved_data
    except OSError:
        return {}



if len(sys.argv) == 2:
    command = sys.argv[1]
    data = load_data(SAVED_DATA)

    if command == "save":
        key = input("Enter a key: ")
        data[key] = clipboard.paste()
        save_data(SAVED_DATA, data)
        print("Data saved succesfully.")
    elif command == "load":
        key = input("Enter a key: ")
        if key in data:
            clipboard.copy(data[key])
            print("Data copied to clipboard.")
        else:
            print("Key does not exist.")
    elif command == "list":
        print(data)
    else:
        print("Unknown command")
else:
    print("Please pass exactly one command.")
