
import {  Modal, ModalBody} from 'reactstrap';
interface IProps{
    setShowModal:(input:boolean)=>void,
    showmodal:boolean
}
function VitsellModal({showmodal,setShowModal}:IProps) {
  return (
    <div>
      <Modal isOpen={showmodal}>
        <button onClick={()=>setShowModal(false)}>close</button>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
      </Modal>
    </div>
  );
}

export default VitsellModal;