import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';

Template.jobs.helpers({
    'doneJobs': function() {
        return jobs.find({employee: Meteor.userId()});
    },

    'postedJobs': function() {
        return jobs.find({postedby: Meteor.userId()});
    },

    'currentJobs': function() {
        return jobs.find({_id: Meteor.userId()});
    }
});

// 'currentJobs': jobs.find({_id: this.params.id}),
// 'postedJobs': jobs.find({postedby: this.params.id}),
// 'doneJobs': jobs.find({employee: this.params.id})
