""" Server with Pythons Flask Framework """

from flask import Flask, render_template
app = Flask(__name__)


@app.route("/<path:path>")
@app.route("/", defaults={"path": ""})
def catch_all(path):
    """View Homepage"""

    return render_template("root.html")




if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, port=5000)