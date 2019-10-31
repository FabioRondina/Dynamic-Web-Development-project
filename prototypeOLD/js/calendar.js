function showCalendar() {
  ///function to create the whole div
  // var wrapper = document.createElement("div");
  // wrapper.setAttribute('id', 'wrapper')

  $('#mainWindow').html("<div id='wrapper'></div>");

  $('#wrapper').append("<div id='external-events'> </div>");
  $('#external-events').append("<h4>Draggable Events</h4>");
  // ARRAY OF STRING EVENTS
  var poi = ["First POI","Second POI","Lunch" ,"Third POI","Happy Hour","Fourth POI","Dinner"]
  // $('#external-events').append("<div class='fc-event'>First POI</div>");
  for(var i = 0; i < poi.length; i++) {
    // console.log(poi[i]) ;
    //CREATE A DIV WITH FIXED DURATION
    $('#external-events').append("<div class='fc-event'data-duration='02:00'>" + poi[i] + "</div>");
  }
  // $('#external-events').append(poi);
  $('#wrapper').append("<div id='calendar'></div>");
  $('#wrapper').append("<div style='clear:both'></div>");

  // EVENT FUNCTION ADD DRAGGABLE TO EVENTS DIV AND CHANGE CSS ATTRIBUTE
  $('#external-events .fc-event').each(function() {


    // store data so the calendar knows to render an event upon drop
    $(this).data('event', {
      title: $.trim($(this).text()), // use the element's text as the event title
      stick: true // maintain when user navigates (see docs on the renderEvent method)
    });

    // make the event draggable using jQuery UI
    $(this).draggable({
      zIndex: 999,
      revert: true,      // will cause the event to go back to its
      revertDuration: 0  //  original position after the drag
    });

    // CALENDAR FUNCTION TO BUILD CALENDAR AND ADD IT
    $('#calendar').fullCalendar({
      defaultView: 'agendaDay',
      allDaySlot: false,
      header: {
        left: '' ,//'prev,next today',
        center: 'title',
        right:  'agendaDay'//'month,agendaWeek,agendaDay'
      },
    defaultDate: '2019-03-08',
      editable: true,
      droppable: true, // this allows things to be dropped onto the calendar
      drop: function() {
        // is the "remove after drop" checkbox checked? // remove the comment tag to use the function that will not remove item from the list
        // if ($('#drop-remove').is(':checked')) {
          // if so, remove the element from the "Draggable Events" list
          $(this).remove();
        // }
      }
    });//END CALENDAR

  });// END EVENT FUNTION
}
