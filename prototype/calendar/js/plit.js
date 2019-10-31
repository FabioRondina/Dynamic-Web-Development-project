$(document).ready(function() {


  /* initialize the external events
  -----------------------------------------------------------------*/

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

  });


  /* initialize the calendar
  -----------------------------------------------------------------*/

  $('#calendar').fullCalendar({
    defaultView: 'agendaDay',
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
  });


});
