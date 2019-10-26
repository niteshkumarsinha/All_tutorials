from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_bcrypt import Bcrypt
from flask_login import LoginManager


app = Flask(__name__)
app.config['SECRET_KEY'] = 'a058a4b38b553cb311d42d64124892ba'
#spsecify uri for database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db' #Three forward slashses specify relative path
#create database instance
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app) #we will add some functionality to db models and it will handle all of the sessions for us    
login_manager.login_view = 'login' #assign function name of route
login_manager.login_message_category = 'info'
from flaskblog import routes