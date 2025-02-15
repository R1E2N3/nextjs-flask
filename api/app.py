# app.py
import os
from flask import Flask, request, jsonify
import resend
from flask_cors import CORS  # <-- import CORS

app = Flask(__name__)
CORS(app)  # <-- enable CORS for all routes by default

# Set the Resend API key
resend.api_key = os.environ.get("RESEND_API_KEY", "your-resend-api-key")

@app.route('/')
def index():
    return "Flask Email API is running."

@app.route('https://python-api-autinosis.onrender.com/send-email', methods=["POST"])
def send_email():
    data = request.get_json()
    if not data:
        return jsonify({"error": "Missing JSON body"}), 400
    
    email = data.get("email")
    result = data.get("result")
    if not email or result is None:
        return jsonify({"error": "Missing 'email' or 'result' in JSON body"}), 400

    # Prepare Resend parameters
    params = {
        "from": "Autism Test <onboarding@resend.dev>",
        "to": [email],
        "subject": "Your Autism Test Results",
        "html": f"""
          <div>
            <h1>Your result is {result}%</h1>
            <p>This is only a screening tool, not a diagnosis.</p>
          </div>
        """
    }

    try:
        response = resend.Emails.send(params)
        return jsonify({"message": "Email sent successfully", "data": response}), 200
    except Exception as e:
        print(f"Error sending email: {e}")
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
