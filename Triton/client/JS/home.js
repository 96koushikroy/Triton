
Template.home.helpers({
    'data':function () {
        return Meteor.users.findOne();
    },
    'latestJobs':function () {
        return jobs.find({remaining: {$gte: new Date()}}, {sort: {createdAt: -1},limit:20});
    }
});