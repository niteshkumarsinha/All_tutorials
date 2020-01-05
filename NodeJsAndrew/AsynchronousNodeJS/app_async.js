console.log('Starting')

//Its asynchronous and runs callback function after an interval of 2 secs and continues to execute rest of code.
setTimeout(() => {
    console.log('2 second timer');
}, 2000);

//Even though its 0 second wait time it will print after stopping as all asynchronous code runs after synchronous code.
setTimeout(() => {
    console.log('0 second timer');
}, 0);

console.log('Stopping');


//Points to be Noted:
//-----------------------

/* 
call stack
------------
.Main gets added on the top of stack
.Then other function calls are added on the stack


Node APIs
------------
.asynchronous functions like setTimeout are registering events with Node APIs(event, callback pair)
.while we are waiting we can do other stuffs inside call stack

Callback Queue
---------------
.Registered callback needs to get executed
.the job of callback queue is to maintain a list of all the callback functions that are ready to get executed 
.before a function in callback can execute it needs to be added to call stack


Event Loop
------------
.event loop looks at two things (call stack and callback queue)
.if the call stack is empty it looks at items from the callback queue and add to the call stack
.if call stack is not empty it cant add the function to call stack

*/ 
