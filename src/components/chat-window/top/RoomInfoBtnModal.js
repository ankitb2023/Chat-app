import React, { memo } from "react";
import { Button, Modal } from "rsuite";
import { useCurrentRoom } from "../../../context/current-room.context";
import { useModalState } from "../../../misc/custom-hooks";
import { useMediaQuery } from '../../../misc/custom-hooks';
const RoomInfoBtnModal = () => {
  const { isOpen, close, open } = useModalState();
  const description = useCurrentRoom((v) => v.description);
  const name = useCurrentRoom((v) => v.name);
  const isMobile = useMediaQuery('(max-width: 992px)');
  return (
    <>
      <Button
        appearance="link"
      
        style={{
          textDecoration: "none",
          backgroundColor: "green",
          color: "white",
          padding: "8px",
          fontFamily: "cursive",
          borderRadius:"10px",
        }}
        className={ isMobile
          ? 'px-0 pd-4'
          : 'px-0'}
        onClick={open}
      >
        Room information
      </Button>
      <Modal show={isOpen} onHide={close}>
        <Modal.Header>
          <Modal.Title>About {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6 className="mb-1">Description</h6>
          <p>{description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button block onClick={close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default memo(RoomInfoBtnModal);
