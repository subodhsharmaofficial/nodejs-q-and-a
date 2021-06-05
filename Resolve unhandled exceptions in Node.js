//Approach 1: Using Process: This is the best way to handle error.

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

//Approach 2: Using try-catch block:
try {
    // Here your synchronous code 
    // will be written
    const err = new Error('Hello');
    throw err;
} catch (err) {
    console.log(err);
}

//Note: Don't use try-catch to handle errors in asynchronous code.
