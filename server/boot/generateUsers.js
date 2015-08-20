module.exports = function generateUsers(app){
    var User = app.models.User;

    User.deleteAll()
    .then(function(response){
        return User.create({'username':'tester1','email':'test@test.com','password':'testing'})
    })
    .then(function(response){
        console.log(response);

        return User.create([{'username':'tester2','email':'test2@test.com', 'password':'testing'}, 
                            {'username':'tester3','email':'test3@test.com', 'password':'testing'}]);
    }) 
    .then(function(response){
        console.log(response)
    })
    .catch(function(err){
        console.log('error:')
        console.log(error)
    })

    setTimeout(function(){

        User.create({'username':'tester4','email':'test4@test.com','password':'testing'}, function(err, response){
            console.log(response);
            User.create([{'username':'tester5','email':'test5@test.com', 'password':'testing'}, 
                            {'username':'tester6','email':'test6@test.com', 'password':'testing'}], function(err, response){
                                console.log(response)
                            });
        })

    }, 2000);
    

}
