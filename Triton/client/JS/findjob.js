import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';
import { Index, MinimongoEngine } from 'meteor/easy:search';
const PlayersIndex = new Index({
    collection: jobs,
    fields: ['jobname','joblocation', 'deliveryarea'],
    engine: new MinimongoEngine(),
});

Template.search.helpers({
    playersIndex: () => PlayersIndex
    ,
    'inputAttributes': function () {
        return { 'class': 'form-control', 'placeholder': 'Start searching...' };
    }
});
