Meteor.methods({
    'updateUserInfo': function (data, id) {
        Meteor.users.update({_id:id},{$set:data});
    },
});
