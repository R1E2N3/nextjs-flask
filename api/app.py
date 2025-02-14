import os
from flask import Flask, request, redirect, url_for, flash, render_template_string
import resend

app = Flask(__name__)
app.secret_key = "your-secret-key"  # Needed for flash messages

# Set the Resend API key from the environment variable.
import resend

resend.api_key = "re_9ogVDcHs_JwNABUN8PUi1LuB1KtsW3kzN"

params: resend.ApiKeys.CreateParams = {
  "name": "Production",
}

resend.ApiKeys.create(params)

if not resend.api_key:
    raise ValueError("Please set the RESEND_API_KEY environment variable.")

# A simple HTML template for the form
HTML_TEMPLATE = """
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Send Email via Resend</title>
  </head>
  <body>
    <h1>Send Email</h1>
    {% with messages = get_flashed_messages(with_categories=true) %}
      {% if messages %}
        <ul>
        {% for category, message in messages %}
          <li><strong>{{ category.title() }}:</strong> {{ message }}</li>
        {% endfor %}
        </ul>
      {% endif %}
    {% endwith %}
    <form method="POST">
      <label for="from">From:</label><br>
      <input type="text" id="from" name="from" value="Acme <onboarding@resend.dev>"><br><br>

      <label for="to">To:</label><br>
      <input type="text" id="to" name="to" value="delivered@resend.dev"><br><br>

      <label for="subject">Subject:</label><br>
      <input type="text" id="subject" name="subject" value="hello world"><br><br>

      <label for="html">HTML Content:</label><br>
      <textarea id="html" name="html" rows="4" cols="50"><strong>it works!</strong></textarea><br><br>

      <input type="submit" value="Send Email">
    </form>
  </body>
</html>
"""

@app.route('/', methods=["GET", "POST"])
def index():
    if request.method == "POST":
        # Get form data
        sender = request.form.get("from", "Acme <onboarding@resend.dev>")
        recipient = request.form.get("to", "delivered@resend.dev")
        subject = request.form.get("subject", "hello world")
        html_content = request.form.get("html", "<strong>it works!</strong>")
        
        # Prepare the email parameters. Note that 'to' must be a list.
        params = {
            "from": sender,
            "to": [recipient],
            "subject": subject,
            "html": html_content
        }
        
        try:
            # Send the email via the Resend API
            email_response = resend.Emails.send(params)
            flash("Email sent successfully!", "success")
        except Exception as e:
            flash(f"Failed to send email: {e}", "error")
        
        return redirect(url_for('index'))
    
    return render_template_string(HTML_TEMPLATE)

if __name__ == '__main__':
    app.run(debug=True)
