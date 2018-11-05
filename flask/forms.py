from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, Form, SelectField, TextAreaField, SubmitField
 
class ContactForm(FlaskForm):
  name = StringField("name", render_kw={'class': 'form-control'})
  email = StringField("_replyto", render_kw={'class': 'form-control'})
  subject = StringField("Subject", render_kw={'class': 'form-control'})
  message = TextAreaField("Message", render_kw={'class': 'form-control'})
  submit = SubmitField("Send", render_kw={'class': 'btn btn-outline-dark','style':'width:100%; text-transform:uppercase'})