import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faSortAmountUp, faStar } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';

function Sort({ onSort }) {
  return (
    <>
      <Dropdown style={{margin: '1%'}}>
        <Dropdown.Toggle variant="success" id="dropdown">
        <FontAwesomeIcon icon={faSortAmountUp}/>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => onSort(true)}><FontAwesomeIcon icon={faCalendarAlt}/> date</Dropdown.Item>
          <Dropdown.Item onClick={() => onSort(false)}><FontAwesomeIcon icon={faStar}/> score</Dropdown.Item>
        </Dropdown.Menu>
       </Dropdown>
     </>
  )
}

export default Sort;
