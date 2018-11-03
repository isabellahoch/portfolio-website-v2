from flask import Flask, render_template, request, redirect, url_for, make_response, abort
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, Form, SelectField, SubmitField, BooleanField, FieldList, FormField, TimeField, RadioField
from wtforms.widgets import TextArea

try:
	# for internal server
	from urlparse import urlparse, urljoin
except:
	# for heroku push:
	from urllib.parse import urlparse, urljoin

# from urlparse import urlparse, urljoin

import functools

from math import ceil
import random
import json
import os
import datetime

from forms import ContactForm

app = Flask(__name__)

@app.errorhandler(404)
def page_not_found(e):
    form = RegForm()
    title = 'Not Found'
    code = '404'
    message = "We can't seem to find the page you're looking for."
    if (current_user.is_authenticated):
        return render_template('error.html', code = code, message = message, title = title, name=current_user.email, logged_in=current_user.is_authenticated, form=form), 404
    else:
        return render_template('error.html', code = code, message = message, title = title, logged_in=current_user.is_authenticated, form=form), 404

@app.errorhandler(403)
def page_forbidden(e):
    form = RegForm()
    title = 'Forbidden'
    code = '403'
    message = "You do not have access to this page."
    if (current_user.is_authenticated):
        return render_template('error.html', code = code, message = message, title = title, name=current_user.email, logged_in=current_user.is_authenticated, form=form), 403
    else:
        return render_template('error.html', code = code, message = message, title = title, logged_in=current_user.is_authenticated, form=form), 403

@app.errorhandler(500)
def internal_server_error(e):
    form = RegForm()
    title = 'Internal Server Error'
    code = '500'
    message = "The server encountered an internal error and was unable to complete your request. Either the server is overloaded or there is an error in the application."
    if (current_user.is_authenticated):
        return render_template('error.html', code = code, message = message, title = title, name=current_user.email, logged_in=current_user.is_authenticated, form=form), 500
    else:
        return render_template('error.html', code = code, message = message, title = title, logged_in=current_user.is_authenticated, form=form), 500

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html', logged_in=current_user.is_authenticated)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    form = ContactForm()
    if request.method == 'POST':
        if form.validate():
            msg = Message(form.subject.data, sender='uhsbakingclub@gmail.com', recipients=['uhsbakingclub@gmail.com'])
            msg.body = """
            From: %s &lt;%s&gt;
            %s
            """ % (form.name.data, form.email.data, form.message.data)
            #mail.send(msg)
            return render_template('contact.html', post = 'yup', form = form, logged_in=current_user.is_authenticated)
    elif request.method == 'GET':
        return render_template('contact.html', form = form, logged_in=current_user.is_authenticated)

@app.route('/sitemap.xml', methods=['GET'])
def sitemap():
    """Generate sitemap.xml """
    pages = []
    # All pages registed with flask apps
    for rule in app.url_map.iter_rules():
        if "GET" in rule.methods and len(rule.arguments) == 0:
            pages.append(rule.rule)

    sitemap_xml = render_template('sitemap_template.xml', pages=pages)
    response = make_response(sitemap_xml)
    response.headers["Content-Type"] = "application/xml"

    # return response
    return render_template('sitemap_template.xml', pages=pages)




if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)