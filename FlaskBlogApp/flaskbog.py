from flask import Flask, render_template, url_for, flash, redirect
from forms import RegistrationForm, LoginForm

app = Flask(__name__)
app.config['SECRET_KEY'] = 'a058a4b38b553cb311d42d64124892ba'

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