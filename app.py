from flask import Flask,render_template,request
from urllib.parse import quote
app=Flask(__name__)
NUM="254757485400"
@app.route("/",methods=["GET","POST"])
def i():
    if request.method=="POST":
        m=f"Customer: {request.form['name']}\nPhone: {request.form['phone']}\nService: {request.form['service']}"
        return f'<script>location="https://wa.me/{NUM}?text='+quote(m)+'"</script>'
    return render_template("index.html")
if __name__=="__main__": app.run()