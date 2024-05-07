
function CalendarHeader({actualMont, nextMonth, prevMonth}) {


  return (
    <div>
      <span onClick={prevMonth}>-</span><h1>{actualMont}</h1><span onClick={nextMonth}>+</span>

    </div>
  );
}

export default CalendarHeader;
