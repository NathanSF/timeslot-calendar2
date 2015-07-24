import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

// TODO get static data from json files
var day1JSON = {
   "timeslots":[
      {
         "id":"5531a14a78b45a7b49000009|1433174400",
         "available_spots":5,
         "booked_count":5,
         "max_guests":10,
         "minute_length":60,
         "start":"2015-06-01T09:00:00-07:00",
         "end":"2015-06-01T10:00:00-07:00",
         "activity_name":"Activity 1"
      },
      {
         "id":"5531a15178b45a7b4900000c|1433181600",
         "available_spots":6,
         "booked_count":4,
         "max_guests":10,
         "minute_length":60,
         "start":"2015-06-01T11:00:00-07:00",
         "end":"2015-06-01T12:00:00-07:00",
         "activity_name":"Activity 1"
      },
      {
         "id":"5531a1e478b45a502f00001c",
         "available_spots":0,
         "booked_count":10,
         "max_guests":10,
         "minute_length":180,
         "start":"2015-06-01T12:00:00-07:00",
         "end":"2015-06-01T15:00:00-07:00",
         "activity_name":"Activity 2"
      }
   ]
};

var day2JSON = {
   "timeslots":[
      {
         "id":"5531a19078b45a502f000001|1433264400",
         "available_spots":10,
         "booked_count":0,
         "max_guests":10,
         "minute_length":60,
         "start":"2015-06-02T10:00:00-07:00",
         "end":"2015-06-02T11:00:00-07:00",
         "activity_name":"Activity 1"
      },
      {
         "id":"5531a19a78b45a502f000007|1433264400",
         "available_spots":10,
         "booked_count":0,
         "max_guests":10,
         "minute_length":60,
         "start":"2015-06-02T10:00:00-07:00",
         "end":"2015-06-02T11:00:00-07:00",
         "activity_name":"Activity 2"
      },
      {
         "id":"5531a1f178b45a502f00001f",
         "available_spots":10,
         "booked_count":0,
         "max_guests":10,
         "minute_length":90,
         "start":"2015-06-02T11:30:00-07:00",
         "end":"2015-06-02T13:00:00-07:00",
         "activity_name":"Activity 2"
      },
      {
         "id":"5531a1d678b45a502f000019",
         "available_spots":10,
         "booked_count":0,
         "max_guests":10,
         "minute_length":90,
         "start":"2015-06-02T12:30:00-07:00",
         "end":"2015-06-02T14:00:00-07:00",
         "activity_name":"Activity 1"
      },
      {
         "id":"5531a30f78b45a15b900002d",
         "available_spots":10,
         "booked_count":0,
         "max_guests":10,
         "minute_length":60,
         "start":"2015-06-02T14:30:00-07:00",
         "end":"2015-06-02T15:30:00-07:00",
         "activity_name":"Activity 1"
      },
      {
         "id":"5531a30678b45a15b9000028|1433282400",
         "available_spots":10,
         "booked_count":0,
         "max_guests":10,
         "minute_length":60,
         "start":"2015-06-02T15:00:00-07:00",
         "end":"2015-06-02T16:00:00-07:00",
         "activity_name":"Activity 2"
      }
   ]
};

var day3JSON = {
   "timeslots":[
      {
         "id":"5531a21178b45a502f000029|1433347200",
         "available_spots":10,
         "booked_count":0,
         "max_guests":10,
         "minute_length":180,
         "start":"2015-06-03T09:00:00-07:00",
         "end":"2015-06-03T12:00:00-07:00",
         "activity_name":"Activity 1"
      },
      {
         "id":"5531a24678b45a502f000053|1433350800",
         "available_spots":5,
         "booked_count":0,
         "max_guests":5,
         "minute_length":240,
         "start":"2015-06-03T10:00:00-07:00",
         "end":"2015-06-03T14:00:00-07:00",
         "activity_name":"Activity 3"
      },
      {
         "id":"5531a21b78b45a502f000031|1433354400",
         "available_spots":10,
         "booked_count":0,
         "max_guests":10,
         "minute_length":60,
         "start":"2015-06-03T11:00:00-07:00",
         "end":"2015-06-03T12:00:00-07:00",
         "activity_name":"Activity 2"
      },
      {
         "id":"5531a26278b45a15b900000c|1433359800",
         "available_spots":10,
         "booked_count":0,
         "max_guests":10,
         "minute_length":60,
         "start":"2015-06-03T12:30:00-07:00",
         "end":"2015-06-03T13:30:00-07:00",
         "activity_name":"Activity 2"
      },
      {
         "id":"5531a26278b45a15b900000c|1433359800",
         "available_spots":10,
         "booked_count":0,
         "max_guests":10,
         "minute_length":60,
         "start":"2015-06-03T13:00:00-07:00",
         "end":"2015-06-03T16:30:00-07:00",
         "activity_name":"Activity 2"
      }
   ]
};

var events = [];

// Push events from Day 1
Ember.$.each(day1JSON.timeslots, function(index, val) {
    // Push each event from json to events array
    events.push({
        "title": val.activity_name,
        "start": val.start,
        "end": val.end
    });
});

// Push events from Day 2
Ember.$.each(day2JSON.timeslots, function(index, val) {
    // Push each event from json to events array
    events.push({
        "title": val.activity_name,
        "start": val.start,
        "end": val.end
    });
});

// Push events from Day 3
Ember.$.each(day3JSON.timeslots, function(index, val) {
    // Push each event from json to events array
    events.push({
        "title": val.activity_name,
        "start": val.start,
        "end": val.end
    });
});

var header = {
    left: 'title',
    center: '',
    right: 'today prev,next, month, agendaDay'
};

// TODO: Find correct way to instantiate ember calendar so we don't need timeout
setTimeout(function(){
    Ember.$('#event-calendar').fullCalendar({
        header: header,
        events: events,
        allDaySlot: false
    });
}, 1000);

export default App;
