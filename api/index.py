from flask import Flask, request, jsonify
import joblib
import os
import sys
import pandas as pd

# Initialize Flask app
app = Flask(__name__)

@app.route('/api/',  methods=['GET'])
def home():
    return "<p>Hey there!</p>"

# Define the route for model prediction
@app.route('/api/adolescent/predict', methods=['POST'])
def predictAdolescent():
    # Load the model
    this_dir = os.path.dirname(__file__)
    joblib_path = os.path.join(this_dir, 'adolescent.joblib')
    sys.path.append(this_dir)
    model = joblib.load(joblib_path)

    # Check if the request contains JSON data
    if request.is_json:
        # Parse JSON data from the request body
        data = request.get_json()

        # Ensure the JSON data contains the expected keys
        if all(key in data for key in ['Age', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'Ethnicity', 'Gender', 'Relation', 'jundice']):
            # Perform prediction with the loaded model
            # Assuming the model expects data in the form of a list of dictionaries
            prediction_data = pd.DataFrame([data], index=[0])  # Specify the index explicitly
            prediction = model.predict_proba(prediction_data)[0][1]
            pred = round(prediction*100)

            # Convert prediction values to strings with 3 decimal digits of precision

            # Construct the response with the prediction
            response = {'prediction': prediction }
            print(prediction)
            return str(prediction)
        else:
            # If the JSON data does not contain the expected keys, return an error message
            error_message = {'error': 'Invalid request format. Please provide all required fields.'}
            return jsonify(error_message), 400
    else:
        # If the request does not contain JSON data, return an error message
        error_message = {'error': 'Request must contain JSON data.'}
        return jsonify(error_message), 400

@app.route('/api/adult/predict', methods=['POST'])
def predictAdult():
    # Load the model
    this_dir = os.path.dirname(__file__)
    joblib_path = os.path.join(this_dir, 'adult.joblib')
    sys.path.append(this_dir)
    model = joblib.load(joblib_path)

    # Check if the request contains JSON data
    if request.is_json:
        # Parse JSON data from the request body
        data = request.get_json()

        # Ensure the JSON data contains the expected keys
        if all(key in data for key in ['Age', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'Ethnicity', 'Gender', 'Relation', 'jundice']):
            # Perform prediction with the loaded model
            # Assuming the model expects data in the form of a list of dictionaries
            prediction_data = pd.DataFrame([data], index=[0])  # Specify the index explicitly
            prediction = model.predict_proba(prediction_data)[0][1]
            pred = round(prediction*100)

            # Convert prediction values to strings with 3 decimal digits of precision

            # Construct the response with the prediction
            response = {'prediction': prediction }
            return jsonify(response), 200
        else:
            # If the JSON data does not contain the expected keys, return an error message
            error_message = {'error': 'Invalid request format. Please provide all required fields.'}
            return jsonify(error_message), 400
    else:
        # If the request does not contain JSON data, return an error message
        error_message = {'error': 'Request must contain JSON data.'}
        return jsonify(error_message), 400

@app.route('/api/child/predict', methods=['POST'])
def predictChild():
    # Load the model
    this_dir = os.path.dirname(__file__)
    joblib_path = os.path.join(this_dir, 'adult.joblib')
    sys.path.append(this_dir)
    model = joblib.load(joblib_path)

    # Check if the request contains JSON data
    if request.is_json:
        # Parse JSON data from the request body
        data = request.get_json()

        # Ensure the JSON data contains the expected keys
        if all(key in data for key in ['Age_Mons', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'Ethnicity', 'ASD_Family', 'Jaundice']):
            # Perform prediction with the loaded model
            # Assuming the model expects data in the form of a list of dictionaries
            prediction_data = pd.DataFrame([data], index=[0])  # Specify the index explicitly
            prediction = model.predict_proba(prediction_data)[0][1]
            pred = round(prediction*100)

            # Convert prediction values to strings with 3 decimal digits of precision

            # Construct the response with the prediction
            response = {'prediction': prediction }
            return jsonify(response), 200
        else:
            # If the JSON data does not contain the expected keys, return an error message
            error_message = {'error': 'Invalid request format. Please provide all required fields.'}
            return jsonify(error_message), 400
    else:
        # If the request does not contain JSON data, return an error message
        error_message = {'error': 'Request must contain JSON data.'}
        return jsonify(error_message), 400


# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)