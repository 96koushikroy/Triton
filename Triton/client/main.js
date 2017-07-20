import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';


import './main.html';

info = new Mongo.Collection('info');

Router.route('/info', function () {
    this.render('info');
});

Router.route('/', function () {
    this.render('hello');
});



Router.route('/info/:id', function () {
    console.log(this.params.id);
    this.render('info');
});


Template.hello.onCreated(function helloOnCreated() {
  this.counter = new ReactiveVar(0);
  this.newval = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },

   sys(){
    return Template.instance().counter.get();
   },
   dat(){
       return info.find({});
   }
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
    'submit .frm'(event,instance){
      event.preventDefault();
      var d = event.target.tt.value;
      instance.counter.set(parseInt(d));
      info.insert({
          name:d,
          createdAt: new Date()
      });
        event.target.tt.value = "";
    }

});
