function createPlanner(){

  $('#mainWindow').html("<div id='wrapper'></div>");
  $('#wrapper').css("margin", "40px");



  // // ARRAY OF STRING EVENTS
  // var poi = ["First POI","Second POI","Lunch" ,"Third POI","Happy Hour","Fourth POI","Dinner"]
  // // $('#external-events').append("<div class='fc-event'>First POI</div>");
  // for(var i = 0; i < poi.length; i++) {
  //   // console.log(poi[i]) ;
  //   //CREATE A DIV WITH FIXED DURATION
  //   $('#external-events').append("<div class='fc-event'data-duration='02:00'>" + poi[i] + "</div>");
  // }

  $('#wrapper').append("<div id='calendar'></div>");
  $(wrapper).css("background-color", "rgba(142, 215, 198, 0.7)");
  $('#calendar').css("background-color", "rgba(255, 255, 255, 0.7)");
  $('#calendar').css('max-witdh' , '900px');
  $('#calendar').css('margin','auto');
  $('#calendar').css('width', '100%');



    // CALENDAR FUNCTION TO BUILD CALENDAR AND ADD IT
    $('#calendar').fullCalendar({
      defaultView: 'agendaDay',
      allDaySlot: false,
      header: {
        left: '' ,//'prev,next today',
        center: 'title',
        right:  ''//'agendaDay'//'month,agendaWeek,agendaDay'
      },
      defaultDate: '2019-03-08',
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      eventLimit: true, // allow "more" link when too many events

      // var poi = ["First POI","Second POI","Lunch" ,"Third POI","Happy Hour","Fourth POI","Dinner"];
      // var
      //
      // for(var i = 0; i < poi.length; i++) {
      //   $('#calendar').append("")
      // }
      events: [
        {
          title: 'Breakfast',
          start: '2019-03-08T08:30:00',
          end: '2019-03-08T09:30:00'
        },
		{
          title: 'First POI',
          start: '2019-03-08T10:00:00',
          end: '2019-03-08T11:00:00'
        },
		{
          title: 'Second POI',
          start: '2019-03-08T11:30:00',
          end: '2019-03-08T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2019-03-08T13:00:00',
		  end: '2019-03-08T14:00:00'
        },
		{
          title: 'Third POI',
          start: '2019-03-08T14:30:00',
          end: '2019-03-08T16:30:00'
        },

        {
          title: 'Happy Hour',
          start: '2019-03-08T17:00:00',
		  end: '2019-03-08T17:45:00'
        },
		{
          title: 'Forth POI',
          start: '2019-03-08T18:00:00',
          end: '2019-03-08T19:30:00'
        },
        {
          title: 'Dinner',
          start: '2019-03-08T20:00:00'
        }
      ]//close array of events

    });//END CALENDAR



};
