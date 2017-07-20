Template.navbar.helpers({
    'userName':function () {
        return Meteor.user().profile.name;
    }
});