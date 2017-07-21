import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';

Template.jobDetail.helpers({
    'checkemployee':function () {
        var data = jobs.findOne({_id:Session.get('curJob')});
        if(data.employee == "")return 1;
        else return 0;
    }
});

Template.jobDetail.events({
    'click .claim':function () {
        var r = confirm("Are you sure to cliam this Job!");
        if (r == true) {
            //update employee on job collection
            jobs.update(Session.get('curJob'), { $set: { employee: Meteor.userId() } });

            sAlert.success("You Have Successfully taken the Job!");

            //Redirect to current jobs

        } else {

        }
    }
});


Template.jobDetail.onRendered(function() {
    this.$(".countdown").countdown();
});
