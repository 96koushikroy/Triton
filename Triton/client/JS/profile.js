import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';

var readBool = true;
var showPasswordDiv = false;

Template.profile.onCreated(function() {

});

Template.profile.helpers({
    'data': function () {
        return Meteor.users.findOne({_id: Meteor.userId()});
    }
});

Template.profile.events({
    'submit #editprofile': function(event) {
            if (!readBool) {
                event.preventDefault();
                var id = event.target.sid.value;
                var name = event.target.uname.value;
                var phone= event.target.phone.value;
                var email=event.target.email.value;
                var address=event.target.address.value;

                var data = {
                    profile:{
                        name:name,
                        phone:phone,
                        address:address
                    },
                    email: email,
                };

                Meteor.call('updateUserInfo',data,id, function (err) {
                    if(!err){
                        console.log("Profile ammended successfully");
                        sAlert.info("Profile ammended successfully");
                    }
                });

                readBool = true;

                document.getElementById("submitButton").value = "Edit Profile";
                elements = document.getElementsByClassName("form-profile")

                for (var i = 0; i < elements.length; i++) {
                    elements[i].readOnly = readBool;
                }
            }
            else {
                event.preventDefault();
                readBool = false;

                document.getElementById("submitButton").value = "Update Profile";
                elements = document.getElementsByClassName("form-profile");

                for (var i = 0; i < elements.length; i++) {
                    elements[i].readOnly = readBool;
                }
            }
    },

    'click #getPassword': function(event) {
        if(!showPasswordDiv) {
            event.preventDefault();
            document.getElementById("passwordDiv").style.display = "block";
            document.getElementById("infoDiv").style.display = "none";
        }
    },

    'submit #change-password': function(event, template) {
        var currentPassword,
            newPassword,
            newPasswordRepeated;

        currentPassword = event.target.cp.value;
        newPassword = event.target.np.value;
        newPasswordRepeated = event.target.npr.value;

        // You will want to validate your passwords better than this
        if (newPassword !== newPasswordRepeated) {
            console.log('Entered Password Did not match!');
            sAlert.error('Entered Password Did not match!');
            return false;
        }

        Accounts.changePassword(currentPassword, newPassword,function (err) {
            if(err) {
                console.log("Error");
                sAlert.error(err.reason);
            }
            else{
                console.log('Password Change Successfully');
                sAlert.info('Password Change Successfully');
                event.target.npr.value='';
                event.target.np.value='';
                event.target.cp.value='';

                document.getElementById("passwordDiv").style.display = "none";
                document.getElementById("infoDiv").style.display = "block";
            }

        });
        return false;
    },
});
