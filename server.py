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


@app.route("/colpesaje/legacy3.0.0")
def colpesajeMain():
    return render_template("colpesaje_legacy.html")


@app.route("/colpesaje/legacy3.0.0/configuracion")
def colpesajeConf():
    return render_template("configuracion.html")


@app.route("/colpesaje/legacy3.0.0/sesion")
def colpesajeSesion():
    return render_template("sesion.html")


if __name__ == "__main__":
    app.run(port=port, debug=True)
