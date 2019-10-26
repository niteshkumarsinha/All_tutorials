from flaskblog import app

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


