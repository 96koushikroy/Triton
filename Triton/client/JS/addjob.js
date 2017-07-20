import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';


Template.addjob.helpers({

});


Template.addjob.events({
    'submit #addjob': function (event) {
        event.preventDefault();
        var jobname, joblocation, jobarea, deliveryaddress, deliveryarea, wage,jobdescription ;

        jobname = event.target.jobname.value;
        joblocation = event.target.joblocation.value;
        jobarea = event.target.jobarea.value;
        deliveryaddress = event.target.deliveryaddress.value;
        deliveryarea = event.target.deliveryarea.value;
        wage = event.target.wage.value;
        jobdescription = event.target.jobdescription.value;
        dateTime = event.target.datetime.value;
        var data = {
            postedby:Meteor.userId(),workedby:"",jobname:jobname,joblocation:joblocation,jobarea:jobarea,deliveryaddress:deliveryaddress,deliveryarea:deliveryarea,wage:wage,jobdescription:jobdescription,remaining:dateTime,createdAt:new Date()
        };
        sAlert.success('data added');

        jobs.insert(data);

        Router.go('/');
    }
});

Template.addjob.onRendered(function() {
    this.$('#datetimepicker1').datetimepicker();
});