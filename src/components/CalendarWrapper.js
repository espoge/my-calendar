import CalendarHeader from "./CalendarHeader";
import { DateTime, Interval } from "luxon";

import { useState } from "react";

function CalendarWrapper() {

  const [month, setMonth] = useState(0)
  
const actualDay = DateTime.now()

console.log(actualDay.toFormat('M'))

  const actualMont = DateTime.now().plus({month})
  const start = DateTime.now().startOf('month').startOf('week').plus({month})
  const end = DateTime.now().endOf('month').endOf('week').plus({month})
  const range = Interval.fromDateTimes(start, end).splitBy({ days: 1 })
  const today = DateTime.now()




  return (
    <div>
        <CalendarHeader actualMont={actualMont.toFormat('MMMM')} nextMonth={()=> setMonth(month+1)} prevMonth={()=> setMonth(month-1)}/>
    { range.map((day) => ( 
      <p key={day}>{today.toFormat('dd-MM-yyyy') === day.start.toFormat('dd-MM-yyyy') && 'oggi'}{day.start.toFormat('DDD')}</p>)
    ) }
    </div>
  );
}

export default CalendarWrapper;
