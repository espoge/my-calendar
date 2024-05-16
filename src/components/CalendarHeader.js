
function CalendarHeader({actualDate, nextMonth, prevMonth, openModal}) {


  return (
    <div className="flex justify-between items-center mt-5">
      <div className="flex items-center gap-4">
      <button type="button" className="relative top-0.5" onClick={prevMonth}><img className="w-2"src="../angle-left-solid.svg" alt=""/></button>
      <h1 className="text-2xl font-bold text-sky-500">{actualDate.toFormat('MMMM')} {actualDate.toFormat('yyyy')}</h1>
      <button type="button" className="relative top-0.5" onClick={nextMonth}><img className="w-2" src="../angle-right-solid.svg" alt=""/></button>
      </div>
      <button type="button" onClick={openModal} className="py-1 px-2 rounded-sm text-white bg-slate-500">Add event</button>

    </div>
  );
}

export default CalendarHeader;
