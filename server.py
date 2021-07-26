""" Server with Pythons Flask Framework 
TODO: this assumes that all routes will be rendered/handled within React fetch 
    instead it's probably a better idea to send the GET/ POST requests to the API from Flasks
    routes 
    Make Backend with JavaScript as well by Installing Node and NPM        
"""

from flask import Flask, render_template
app = Flask(__name__)


@app.route("/<path:path>")
@app.route("/", defaults={"path": ""})
def catch_all(path):
    """View Homepage"""

    return render_template("root.html")




if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, port=5000)