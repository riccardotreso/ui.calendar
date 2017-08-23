/**
 * calendarDemoApp - 0.9.0
 */
var calendarDemoApp = angular.module('calendarDemoApp', ['ui.calendar', 'ui.bootstrap']);

calendarDemoApp.controller('CalendarCtrl',
   function($scope, $compile, $timeout, uiCalendarConfig) {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    /* event source that contains custom events on the scope */
    $scope.events = [
      {title: 'All Day Event',start: new Date(y, m, 1)},
      {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
      {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
      {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
      {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
      {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
    ];


    $scope.eventsF = function (start, end, timezone, callback) {
      callback($scope.events);
    };

    $scope.dayClick = function(date, jsEvent, view) {
      $scope.addEvent(date);
    };

    /* alert on eventClick */
    $scope.alertOnEventClick = function( date, jsEvent, view){
        alert(date.title + ' was clicked ');
    };
  
    /* add custom event*/
    $scope.addEvent = function(date) {
      $scope.events.push({
        title: 'mio evento',
        start: date,
        end: date,
        className: ['openSesame']
      });
    };

    /* config object */
    $scope.uiConfig = {
      calendar:{
        editable: false,
        header:{
          left: 'title',
          center: '',
          right: 'today prev,next'
        },
        eventClick: $scope.alertOnEventClick,
        //eventDrop: $scope.alertOnDrop,
        //eventResize: $scope.alertOnResize,
        //eventRender: $scope.eventRender,
        dayClick: $scope.dayClick
      }
    };
    /* event sources array*/
    $scope.eventSources = [$scope.events, $scope.eventsF];
});
