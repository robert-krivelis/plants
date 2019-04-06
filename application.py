# $env:FLASK_APP = "application.py" 
# in powershell

from flask import Flask, render_template, request, send_from_directory
import csv


app = Flask(__name__, static_url_path='')

@app.route("/")
def index():
	#return app.send_static_file('websiteinprogress.html')
	return render_template("websiteinprogress.html")
#use SQL to store data,
#retrieve data later

# @app.route("/chartjstest2.js")
# def graph1():
# 	return app.send_static_file('/static/chartjstest2.js')




# @app.route("/register", methods=["POST"])
# def register():
# 	query = request.form.get("name")
# 	#insert line to search for stuff and show it as a web page.

# 	# if not request.form.get("name") or not request.form.get("dorm"):
# 	# 	return render_template("failure.html")
# 	# with open("registered.csv", "w") as file:
# 	# 	writer = csv.DictWriter(file, fieldnames=["name", "dorm"])
# 	# 	writer.writerow({"name": "name", "dorm": "dorm"})
# 	# 	writer.writerow({"name": request.form.get("name"), "dorm": request.form.get("dorm")})
# 	# 	print(request.form.get("name"))
# 	return render_template("success.html")


# @app.route("/registered")
# def registered():
# 	with open("registered.csv", "r") as file:
# 		reader = csv.DictReader(file)
# 		students = list(reader)
# 	return render_template("registered.html", students=students)

if __name__ == '__main__':
	app.run(debug=True)


# what to do next:
# set up a server:
# 	search for what you want
# 	display images of search




#find out if requests can show associated tags somehow