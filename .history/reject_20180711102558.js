new Promise((resolve, reject) => {
    console.log('Starting = option1')
    reject("Boo");
    console.log("So I threw an error so this line will never run, right? - option1")
});

new Promise((resolve, reject) => {
    console.log('Starting = option2')
    reject("Boo");
    console.log("So I threw an error so this line will never run, right? - option2")
});