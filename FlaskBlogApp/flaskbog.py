from flask import Flask, render_template, url_for, flash, redirect
from flask_sqlalchemy import SQLAlchemy
from forms import RegistrationForm, LoginForm
from datetime import datetime


app = Flask(__name__)
app.config['SECRET_KEY'] = 'a058a4b38b553cb311d42d64124892ba'
#spsecify uri for database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db' #Three forward slashses specify relative path
#create database instance
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique= True, nullable=False)
    image_file = db.Column(db.String(20), nullable=False, default='default.jpg')
    password = db.Column(db.String(60), nullable=False)
    posts = db.relationship('Post', backref='author', lazy=True)
    def __repr__(self):
        return f"User('{self.username}', '{self.email}', '{self.image_file}')"


class Post(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(100), nullable = False)
    date_posted = db.Column(db.DateTime , nullable=False, default=datetime.utcnow)
    content = db.Column(db.Text, nullable = False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    def __repr__(self):
        return f"Post('{self.title}', '{self.date_posted}')"


posts = [
    {'author': 'Nitesh1', 'title': 'Blog Post 1', 'content': 'First Post Content', 'date_posted': 'April 2019'},
    {'author': 'Nitesh2', 'title': 'Blog Post 2', 'content': 'Second Post Content', 'date_posted': 'May 2019'},
    {'author': 'Nitesh3', 'title': 'Blog Post 3', 'content': 'Third Post Content', 'date_posted': 'June 2019'},
]

@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html', posts=posts)


@app.route("/about")
def about():
    return render_template('about.html', title="About")


@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        flash(f'Account created for {form.username.data}!', 'success')
        return redirect(url_for('home'))
    
    return render_template('register.html', title='Register', form=form)


@app.route('/login', methods=['GET','POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        if form.email.data == "nitesh111sinha@gmail.com" and form.password.data == 'password':
            flash(f'{form.email.data}! is logged in', 'success')
            return redirect(url_for('home'))
        else:
            flash(f"{form.email.data}! can't be logged in", 'danger')
    return render_template('login.html', title='Login', form=form)


if __name__=="__main__":
    app.run(debug=True) 


#python 
#from flaskblog import db
#db.create_all()
#from flaskbog import User, Post
#User(username="nitesh" , email="nitesh111sinha@gmail.com", password='password')

#to add the user
#db.session.add(user_1)
#db.session.commit()

#to get the users
#User.query.all()
#User.query.first()
#User.query.filter_by(username="nitesh").all()

#to query using id
#User.query.get(id)

#Create Post
#post = Post(title='blog_2', content='Second Post Content' , user_id=user_1.id)

#access user from post
#post.author

#to drop all database
#db.drop_all()

