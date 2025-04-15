import { FirebaseEvent } from "@/types/events"; 
import { AnimatePresence, easeInOut, motion } from "framer-motion"; 
import { useEffect, useState } from "react"; 
import EventModal from "../EventModal";   

type CalendarEventProps = {   
  _event: FirebaseEvent; 
};  

const CalendarEvent: React.FC<CalendarEventProps> = ({ _event }) => {   
  const [showEventModal, setShowEventModal] = useState<boolean>(false);    

  const handleEventClick = () => {     
    setShowEventModal((prev) => !prev);     
    document.body.style.overflowY =       
      document.body.style.overflowY === "hidden" ? "auto" : "hidden";   
  };    

  useEffect(() => {     
    return () => {       
      if (document.body.style.overflowY === "hidden") {         
        document.body.style.overflowY = "auto";       
      }     
    };   
  }, []);    

  return (     
    <>       
      <AnimatePresence>
        <motion.div
          key={`event-${_event.id}`}
          initial={{ opacity: 0, y: 10 }}           
          animate={{ opacity: 1, y: 0 }}           
          transition={{ duration: 0.2, ease: easeInOut }}           
          className="cursor-pointer rounded-sm bg-light-blue p-1 text-xs text-black"           
          onClick={handleEventClick}         
        >           
          {_event.title}         
        </motion.div>          
        
        {showEventModal && (           
          <EventModal 
            key={`modal-${_event.id}`} 
            _event={_event} 
            onClose={handleEventClick} 
          />         
        )}       
      </AnimatePresence>     
    </>   
  ); 
};  

export default CalendarEvent;