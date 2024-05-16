
import { useRef } from "react";
function Modal({visibility, closeModal, handleSubmit}) {
  const description = useRef();
  const date = useRef();

  const submitAddEvent = (e) => {
    handleSubmit(e, date, description)
    date.current.value = ''
    description.current.value = ''
  }

const handleCloseModal = () => {
  closeModal()
  date.current.value = ''
  description.current.value = ''
}

  return (
    <>
      <div className={`fixed w-full h-full bg-slate-900 opacity-10 top-0 left-0  ${visibility ? 'block':'hidden'}`} onClick={handleCloseModal}></div>

      <div className={`bg-white rounded-md absolute w-[30rem] left-1/2	-translate-x-1/2 modal-add-event ${visibility ? 'visible': ''}`}>
      
      <div className="bg-slate-300 text-dark p-2 fw-600 text-center position-relative">
            Add your event
      </div>
      <div className="p-4">
      <form onSubmit={(e)=>submitAddEvent(e)}>
      <input type="date" className="w-full mb-4" id="start" required ref={date}  min={new Date().toJSON().slice(0, 10)} />
      <label className="mb-2">Description</label>
      <input type="text" required ref={description} className="w-full border-slate-300 border-2 rounded-sm p-1 mb-2"/>
      <button type="submit" className="w-full rounded-sm text-white bg-slate-600 py-2">Save</button>
      </form>
      </div>

      </div>
   

    </>
  );
}

export default Modal;
