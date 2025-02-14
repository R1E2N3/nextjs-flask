from flask import Flask, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)
CORS(app, origins='*')

# Email configuration
SMTP_SERVER = "smtp.gmail.com"  # Change if using a different provider
SMTP_PORT = 587
EMAIL_ADDRESS = "your-email@gmail.com"  # Replace with your email
EMAIL_PASSWORD = "your-password"  # Use environment variables for security

@app.route('/api/send-email', methods=['POST'])
def send_email():
    try:
        data = request.get_json()
        recipient = data.get("recipient")
        subject = data.get("subject")
        message_body = data.get("message")
        
        if not recipient or not subject or not message_body:
            return jsonify({"error": "Missing required fields"}), 400
        
        # Create email
        msg = MIMEMultipart()
        msg['From'] = EMAIL_ADDRESS
        msg['To'] = recipient
        msg['Subject'] = subject
        msg.attach(MIMEText(message_body, 'plain'))
        
        # Send email
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            server.sendmail(EMAIL_ADDRESS, recipient, msg.as_string())
        
        return jsonify({"message": "Email sent successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
