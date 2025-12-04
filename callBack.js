function getData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 2000);
}

console.log("Start");
getData(() => {
    console.log("End");
});