import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';


Router.route('/', function () {
    this.render('home'), {
        name: 'post'
    }
});

Router.route('login',function () {
    this.render('login');
});

Router.route('register',function(){
    this.render('register');
});

Router.route('profile', function() {
    this.render('profile');
})

Router.route('profile/:id', function() {
    this.render('profilePublic', {
        data: function() {
            // vN4BrDPMcFNFckBuC
            return Meteor.users.findOne({_id: this.params.id});
        }
    });
})

Router.route('logout',function () {
    Meteor.logout(function() {
        sAlert.error('User successfully logged out!');
        Router.go('/');
    });
});

Router.route('/addjob', function () {
    this.render('addjob');
});
