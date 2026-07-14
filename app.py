from flask import Flask, render_template, request, redirect
from urllib.parse import quote

app = Flask(__name__)

WHATSAPP_NUMBER = "254722793153"

@app.route("/", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        name = request.form.get("name")
        phone = request.form.get("phone")
        service = request.form.get("service")
        message = request.form.get("message")

        text = f"""🚗 AUTOMILE SERVICE REQUEST

Customer Name: {name}
Phone Number: {phone}
Service Required: {service}

Additional Information:
{message}

Please contact the customer.
"""

        return redirect(
            f"https://wa.me/{WHATSAPP_NUMBER}?text={quote(text)}"
        )

    return render_template("index.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
