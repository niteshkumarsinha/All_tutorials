from flask_wtf import FlaskForm
from flask_login import current_user
from wtforms import StringField, PasswordField, SubmitField, BooleanField
from wtforms.validators import DataRequired, Length, Email, EqualTo, ValidationError
from flaskblog.models import User


#Creates Registration Form
class RegistrationForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired(), Length(min=2, max=20) ])
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    confirmPassword = PasswordField('ConfirmPassword', validators=[DataRequired(), EqualTo('password')])
    submit = SubmitField('Sign Up')

    #custom validator method
    #Simply by adding these two methode our validation would be done.
    def validate_username(self, username):
        user = User.query.filter_by(username=username.data).first()
        if user:
            raise ValidationError('That username is taken.Please choose a different one.')

    #custom validator method
    def validate_email(self, email):
        user = User.query.filter_by(email=email.data).first()
        if user:
            raise ValidationError('That email is taken.Please choose a different one.')


#Login Form
class LoginForm(FlaskForm):
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    remember = BooleanField('Remember Me')
    submit = SubmitField('Login')


class UpdateAccountForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired(), Length(min=2, max=20) ])
    email = StringField('Email', validators=[DataRequired(), Email()])
    submit = SubmitField('Update')

    #custom validator method
    #Simply by adding these two methode our validation would be done.
    def validate_username(self, username):
        if username.data != current_user.username:
            user = User.query.filter_by(username=username.data).first()
            if user:
                raise ValidationError('That username is taken.Please choose a different one.')

    #custom validator method
    def validate_email(self, email):
        if email.data != current_user.email:
            user = User.query.filter_by(email=email.data).first()
            if user:
                raise ValidationError('That email is taken.Please choose a different one.')


#generating passwords through flask-bcrypt
#from flask_bcrypt import Bcrypt
#bcrypt = Bcrypt()
#bcrypt.generate_password_hash('password')
#bcrypt.generate_password_hash('password').decode('utf-8')
#hashed_pw = bcrypt.generate_password_hash('password').decode('utf-8')
#bcrypt.check_password_hash(hashed_pw, 'password')

