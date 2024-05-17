import CalendarHeader from "./CalendarHeader";
import { DateTime, Interval } from "luxon";
import ModalAddEvent from "./ModalAddEvent";
import ModalEvents from "./ModalEvents"

import { useState } from "react";

function CalendarWrapper() {

  const [month, setMonth] = useState(0)
  const [modalVisibility, setModalVisibility] = useState(false)
  const [modalEventsVisibility, setModalEventsVisibility] = useState(false)
  const [events, setEvents] = useState([])
  const [eventsDetail, setEventsDetail] = useState([])


  const actualDate = DateTime.now().plus({month})
  const start = actualDate.startOf('month').startOf('week')
  const end = actualDate.endOf('month').endOf('week')
  const range = Interval.fromDateTimes(start, end).splitBy({ days: 1 })
  const today = DateTime.now()

const handleSubmit = (e, date, description) => {
  e.preventDefault();
  setEvents([
    ...events,
    {date:date.current.value, description:description.current.value}
  ])
  setModalVisibility(!modalVisibility)
}

const filteredEvents = (date) => {
  return events.filter((event)=> event.date === date)
}


const handleEventDetail = (eventList) => {
  setModalEventsVisibility(!modalEventsVisibility)
  setEventsDetail(eventList)
}
  return (
    <div className="container mx-auto">
        <CalendarHeader actualDate={actualDate} nextMonth={()=> setMonth(month+1)} prevMonth={()=> setMonth(month-1)} openModal={()=>setModalVisibility(!modalVisibility)}/>
        <div className="grid grid-cols-7 border-b-2 p-2">
            <h2 className="text-lg">Monday</h2>
            <h2 className="text-lg">Tuesday</h2>
            <h2 className="text-lg">Wednesday</h2>
            <h2 className="text-lg">Thursday</h2>
            <h2 className="text-lg">Friday</h2>
            <h2 className="text-lg">Saturday</h2>
            <h2 className="text-lg">Sunday </h2>
        </div>
        <div className="grid grid-cols-7">
    { range.map((day) => ( 
      <div key={day} className={`border-b-2 relative h-28 p-2 ${actualDate.toFormat('M') === day.start.toFormat('M') ? 'bg-white' : 'bg-slate-50'}` }>
        <p className={today.toFormat('dd-MM-yyyy') === day.start.toFormat('dd-MM-yyyy') ? 'font-bold' : 'font-normal' }>{day.start.toFormat('d')}</p>
        {filteredEvents(day.start.toFormat('yyyy-MM-dd')).length > 3 ? 
        <p className="text-right font-bold text-orange-600 absolute right-0 bottom-0 p-2" >+ <span className="cursor-pointer" onClick={()=>handleEventDetail(filteredEvents(day.start.toFormat('yyyy-MM-dd'))) }>{filteredEvents(day.start.toFormat('yyyy-MM-dd')).length}</span></p> 
        : filteredEvents(day.start.toFormat('yyyy-MM-dd')).map((ev)=> <p className="px-1 rounded-sm lh-1 even:bg-slate-200" key={ev.date}>{ev.description}</p>)}
        
        </div>)
    ) }

        </div>


        <ModalAddEvent visibility={modalVisibility} closeModal={()=>setModalVisibility(!modalVisibility)} handleSubmit={handleSubmit}/>
        <ModalEvents visibility={modalEventsVisibility} closeModal={()=>setModalEventsVisibility(!modalEventsVisibility)} eventsDetail={eventsDetail}/>

    </div>
  );
}

export default CalendarWrapper;
