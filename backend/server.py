import json
from functools import wraps

from flask import Flask, request, Response, make_response, jsonify
from flask_cors import CORS, cross_origin

from mongo_dal import MongoDal, KisserNotExist, KisserAlreadyExist

app = Flask(__name__, static_folder="dist/")
CORS(app)
mongo_connection = None


def add_cors_preflight_headers(response):
    response.headers['Access-Control-Allow-Origin'] = "*"
    return response


def handle_cors(func):
    @wraps(func)
    def decorator(*args, **kwargs):
        if request.method == 'OPTIONS':
            response = Response()
        else:
            response = func(*args, **kwargs)
        response = add_cors_preflight_headers(response)
        return response

    return decorator


@app.errorhandler(404)
@handle_cors
@cross_origin(supports_credentials=True)
def not_found(e):
    return app.send_static_file('index.html')


@app.route('/')
@handle_cors
@cross_origin(supports_credentials=True)
def index():
    return app.send_static_file("index.html")


@app.route('/<path:path>', methods=['GET'])
@handle_cors
@cross_origin(supports_credentials=True)
def static_proxy(path):
    return app.send_static_file(path)


@app.route('/test', methods=['POST'])
@handle_cors
@cross_origin(supports_credentials=True)
def add_kisser():
    try:
        return "OK"
    except KisserAlreadyExist as err:
        return str(err)
    except KeyError as err:
        return f"Error - {err}"



if __name__ == '__main__':
    mongo_connection = MongoDal()
    app.run(host="0.0.0.0", port=80)