import json
import os

from flask import Flask, jsonify, abort
from flask_cors import CORS

# Directory Configurations
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
JSON_PATH = os.path.join(BASE_DIR, "pokemon.json")

app = Flask(__name__)
CORS(app)

@app.route("/pkmn", methods=["GET"])
def get_data():
    """
    When this endpoint is hit, reads the pokemon.json file and returns that data.
    """
    try:
        with open(JSON_PATH, "r", encoding="utf-8") as file:
            data = json.load(file)
        return jsonify(data)
    except (FileNotFoundError, json.JSONDecodeError):
        abort(500, description="Error reading data file.")


# By default, Flask runs on port 5000
if __name__ == "__main__":
    app.run(debug=True)
