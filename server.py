import os

from flask import Flask, redirect, render_template, send_from_directory

app = Flask(__name__)

port = int(os.environ.get("PORT", 5000))


@app.route("/static/<path:path>")
def serve_static(path):
    return send_from_directory("static", path)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/<path:path>")
def all_routes(path):
    return redirect("/")


if __name__ == "__main__":
    app.run(port=port)
