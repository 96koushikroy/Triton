import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';


Router.route('homepage', function () {
    this.render('home'), {
        path: '/'
    }
});

Router.route('sign-in',function () {
    this.render('login'),{
        name:'/login'
    }
});

Router.route('sign-up',function(){
    this.render('register'),{
        path:'/register'
    }
});

Router.route('my-profie', function() {
    this.render('profile'),{
        path:'/profile'
    }
})

Router.route('my-profile/:id', function() {
    this.render('profilePublic', {
        data: function() {
            // vN4BrDPMcFNFckBuC
            return Meteor.users.findOne({_id: this.params.id});
        }
    });
})

Router.route('logo',function () {
    Meteor.logout(function() {
        sAlert.error('User successfully logged out!');
    });
    this.render('home'),{
        path:'/logout'
    }
});

Router.route('add-job', function () {
    this.render('addjob'),{
        path:'/addjob'
    }
});

Router.route('search-jobs', function () {
    this.render('search'),{
        path:'/search'
    }
});