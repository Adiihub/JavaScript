function greet(name, callback){
    const greeting = "Hello " + name
    callback(greeting)
}
function displaygreeting(message){
    console.log(message)
}
greet("Aditi", displaygreeting)


/**
 * Callback hell | Pyramid of doom
 */
getUser(function(user) {
    getPosts(user.id, function(posts) {
        displayUserInfoAndPost(user, posts, function() {
            console.log("User info and Posts displayed successfully");
        });
    });
});
