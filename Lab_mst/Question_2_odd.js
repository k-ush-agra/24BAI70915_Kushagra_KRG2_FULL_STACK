var promise = new Promise(function(resolve, reject) {

    setTimeout(function() {
        resolve("Data fetched successfully");
    }, 2000);

});

promise.then(function(result) {
    console.log(result);
}).catch(function(error) {
    console.log(error);
});