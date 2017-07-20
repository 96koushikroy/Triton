


Template.login.events({

    'submit #login': function(event) {
        // 1. Collect the username and password from the form
        event.preventDefault();
        var email = event.target.email.value;
        var pass = event.target.password.value;
        Meteor.loginWithPassword(email, pass, function (err) {
            if(err){
                sAlert.error(err.reason);
            }
            else{
                Router.go('/');
            }
        });



        return false;
    }

});

Template.login.helpers({


});