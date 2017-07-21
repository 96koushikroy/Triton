
Template.home.helpers({
    'data':function () {
        return Meteor.users.findOne();
    },
    'latestJobs':function () {
        return jobs.find({employee:"",status:0,remaining: {$gte: new Date()}}, {sort: {createdAt: -1},limit:20});
    }
});