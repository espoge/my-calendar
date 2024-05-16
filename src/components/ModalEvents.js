import { DateTime } from "luxon";



function ModalEvents({visibility, closeModal, eventsDetail}) {


  return (
    <>
      <div className={`fixed w-full h-full bg-slate-900 opacity-10 top-0 left-0  ${visibility ? 'block':'hidden'}`} onClick={closeModal}></div>

      <div className={`pb-4 bg-white rounded-md absolute w-[30rem] min-h-32 left-1/2	-translate-x-1/2 modal-add-event ${visibility ? 'visible': ''}`}>
      <h2 className="text-center bg-slate-300 text-slate-600 text-lg font-bold py-2">{ DateTime.fromISO(eventsDetail[0]?.date).toFormat('dd-MM-yyyy')}</h2>
      
         <ul className="px-2 pt-2">
         {  eventsDetail.map((ev, i)=> <li key={i}> {ev.description}</li>)}
         </ul>
      </div>
   

    </>
  );
}

export default ModalEvents;
