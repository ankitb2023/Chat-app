import React, { memo } from 'react';
import { Icon, ButtonToolbar } from 'rsuite';
import { Link } from 'react-router-dom';
import { useCurrentRoom } from '../../../context/current-room.context';
import { useMediaQuery } from '../../../misc/custom-hooks';
import RoomInfoBtnModal from './RoomInfoBtnModal';
import EditRoomBtnDrawer from './EditRoomBtnDrawer';

const Top = () => {
  const name = useCurrentRoom(v => v.name);
  const isAdmin = useCurrentRoom(v => v.isAdmin);
  const isMobile = useMediaQuery('(max-width: 992px)');

  return (
    <div className ="background-bluegreen text-white text-bold">
      
      <div className="d-flex justify-content-between align-items-center ">
        <div>
      <Icon
            componentClass={Link}
            to="/"
            icon="arrow-circle-left"
            size="2x"
            className={
              isMobile
                ? 'd-inline-block p-0 ml-2 text-white link-unstyled'
                : 'd-none'
            }
          />
          </div>
          <div>
        <h4 className="text-disappear d-flex align-items-center text-center ">
         
          <span className="text-disappear " style={{fontFamily:"cursive"
          }}>{name}</span>
        </h4>
        </div>
        <div>
        <ButtonToolbar className="ws-nowrap">
          {isAdmin && <EditRoomBtnDrawer />}
        </ButtonToolbar>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <h6>ChatTalk</h6>
        <RoomInfoBtnModal />
      </div>
    </div>
  );
};

export default memo(Top);
