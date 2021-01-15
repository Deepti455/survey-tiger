import MultiSelect from "./multi-select";
import SingleSelect from "./single-select";
import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function CreateSurvey() {
    const {surveyId} = useParams();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownText, setDropdownText] = useState("Select Question Type");
    
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>{dropdownText}</DropdownToggle>
        <DropdownMenu>
            <DropdownItem onClick={()=>setDropdownText("Multi-select")}>Multi-select</DropdownItem>
            <DropdownItem onClick={()=>setDropdownText("Single Select")}>Single Select</DropdownItem>
        </DropdownMenu>
        </Dropdown>
        {dropdownText==='Multi-select'? <MultiSelect/>: null}
        {dropdownText==='Single Select'? <SingleSelect/>: null}
        </>
  );
}

export default CreateSurvey;
