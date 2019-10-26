from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///demo.db'
db = SQLAlchemy(app)

class Example(db.Model):
    __tablename__ = "example"
    id = db.Column('id', db.Integer, primary_key = True)
    data = db.Column('data', db.Unicode) #varchar

    def __init__(self, id, data):
        self.id = id
        self.data = data

#ONE TO MANY RELATIONSHIP
#need to set the below properties to have one to many relationship
class Person(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20))
    pets = db.relationship('Pet', backref='owner')#pseudo column in Pet table


class Pet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20))
    owner_id = db.Column(db.Integer, db.ForeignKey('person.id')) #actual foreign key in pet table referencing person table



#to delete
#db.session.delete(Example.query.get(1))
#db.session.commit()
#from connecting_to_db import  Pet, Person
#nitesh = Person(name="Nitesh")
#db.session.add(nitesh)
#db.session.commit()
#spot = Pet(name='spot', owner="nitesh")