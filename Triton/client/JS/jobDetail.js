import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';

Template.jobDetail.helpers({

});

Template.jobDetail.onRendered(function() {
    this.$(".countdown").countdown();
});
