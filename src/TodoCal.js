import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default function TodoCal() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView='dayGridMonth'
      weekends={true}
      events={[
        { title: 'event1', date: '2022-08-15' },
        { title: 'event2', date: '2022-08-18' }
      ]}
    />
  );
}