from flask import Flask
from pymongo import MongoClient


app = Flask(__name__)
# Connect to the local MongoDB server
client = MongoClient('mongodb://localhost:27017/')
# Access or create a database
db = client['mydb']
# Access or create a collection
collection = db['usernames']
userdetail = []

for user in collection.find({}):
    userdetail.append(user)

names = [person['name'] for person in userdetail]




@app.route('/')
def hello():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)
