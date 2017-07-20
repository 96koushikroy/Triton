
Template.home.helpers({
    'data':function () {
        return Meteor.users.findOne();
    }
});