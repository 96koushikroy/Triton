import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';


Template.register.helpers({

});


Template.register.events({
    'submit #register': function (event) {
        event.preventDefault();
        var name, password, address, email, phone, final;

        name = event.target.fullname.value;
        email = event.target.email.value;
        password = event.target.pass.value;
        phone = event.target.phone.value;
        address = event.target.sad.value;

        final = {
            profile: {
                name: name, phone: phone,
                address: address
            },
            email: email,
            password: password
        };
        Accounts.createUser(final);
        sAlert.success('Successfully registered!');
        Router.go('/');
    }
});