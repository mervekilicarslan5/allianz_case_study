from flask import Flask
from tidydata import tidy_data
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api


app = Flask(__name__)
api = Api(app)

CORS(app)

data = tidy_data("fileName")
 
@app.route("/api", methods=['GET', 'POST'])
def hello():
    return data

if __name__ == '__main__':
   app.run(host='0.0.0.0', port=5000, debug=True)