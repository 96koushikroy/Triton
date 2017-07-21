import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';

Template.jobs.helpers({
    'doneJobs': function() {
        return jobs.find({employee: Meteor.userId()}, {sort: {createdAt: -1}});

    },

    'postedJobs': function() {
        return jobs.find({postedby: Meteor.userId()}, {sort: {createdAt: -1}});
    }
});

