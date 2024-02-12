from flask import Flask
app = Flask(__name__)

@app.route("/api/numbers")
def hello_world():
    print('hey! it worked')
    return [2, 1]