import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function ControlIcon({ faIcon, color, action, tooltipText }) {

  return (
      <OverlayTrigger overlay={<Tooltip id={tooltipText}>{tooltipText}</Tooltip>}>
       <FontAwesomeIcon icon={faIcon} size="sm" className="control-icon" style={{ color }} onClick={action}/>
      </OverlayTrigger>
    )
}

export default ControlIcon;
