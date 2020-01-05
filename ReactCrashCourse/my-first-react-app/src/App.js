import React from 'react';
// import Footer from './Footer';
// import Navbar from './Navbar';
// import Main from './Main';
import ToDo from './ToDo';
//import Greet from './Greet';
//import ContactCard from "./ContactCard";
// import Joke from './Joke';
// import data from './data';
// import Product from './Product';
// import product from './productData';
import todoList from './todoData';



// function App() {
//   return (
//     <div>
//         <Navbar/>        
//         <Main/>
//         <Footer/>
//     </div>    
//   );
// }


// function App(){

//   // const jokeComponents = data.map((joke) => {
//   //   return <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />
//   // });

//   // const productComponents = product.map(item => {
//   //   return <Product key={item.id} name={item.name} price={item.price} description={item.description} />
//   // })

//   const toDoComponents = todoList.map(item => {
//     return <ToDo key={item.id} id={item.id} name={item.name} completed={item.completed}/>
//   })


//   return (
//     // <div class='todo-list'>
//     //   <ContactCard 
//     //     name='Awesome'
//     //     imageUrl='https://images.unsplash.com/photo-1552944150-6dd1180e5999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' 
//     //     phone='022-1234567'
//     //     email='aafat@gmail.com'
//     //   />
//     //   <ContactCard
//     //     name='Bemisaal'
//     //     imageUrl='https://images.unsplash.com/photo-1475518112798-86ae358241eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
//     //     phone='022-9876543'
//     //     email='bc@gmail.com'
//     //   />
//     //   <ContactCard 
//     //     name='Hayabusa'
//     //     imageUrl='https://images.unsplash.com/photo-1475518112798-86ae358241eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
//     //     phone='022-8765432'
//     //     email='bcc@gmail.com'
//     //   />
//     //   <ContactCard 
//     //     name='Chutiya'
//     //     imageUrl='https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
//     //     phone='022-5432517'
//     //     email='bbc@gmail.com'
//     //   />
//     // </div>

//     <div className='todo-list'>
//       {toDoComponents}
//     </div>
//   )
// }


class App extends React.Component {


    constructor(){
      super();
      this.state = {
        todos: todoList
      };
    };

    render(){

      const todoItems = this.state.todos.map(item => <ToDo key={item.id} id={item.id} name={item.name} completed={item.completed}/>)
      return (
        <div className='todo-list'> 
          {todoItems}
        </div>
      )
    }  
}


// class Header extends React.Component {

//   render(){
//     return (
//       <header>
//           <p>De nada! {this.props.username}</p> 
//       </header>
//     )
//   }
// }


export default App;
