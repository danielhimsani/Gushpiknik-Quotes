from flask import Flask
from pymongo import MongoClient


app = Flask(__name__)
# Connect to the local MongoDB server
client = MongoClient('mongodb://localhost:27017/')
# Access or create a database
db = client['mydatabase']
# Access or create a collection
collection = db['mycollection']



@app.route('/')
def hello():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)
