return new Promise((resolve, reject) => {
    console.log('Starting')
    reject("Boo");
    console.log("So I threw an error so this line will never run, right?")
});