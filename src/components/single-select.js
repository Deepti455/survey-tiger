import React, { useState } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Button } from 'reactstrap';

function SingleSelect() {
    const [options, setOptions] = useState(["",""]);
    const [question, setQuestion] = useState("");


    const isQuestionAddDisabled = ()=>
        question.trim==="" || options.find((opt)=>opt.trim()==="")!==undefined;

      const setOptionInArray= (value, optionIdx)=>{
        options[optionIdx]=value;
        setOptions([...options]);
    }
    return (
      <div className="question-container">
        <InputGroup>
            <InputGroupAddon addonType="prepend">
                <InputGroupText>?</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Your Question" onChange={(e)=>setQuestion(e.target.value)} value={question}/>
      </InputGroup>
      <p className="options-text">Options</p>
      <InputGroup className="input-grp">
        <Input placeholder="option1" value={options[0]} onChange={e=> setOptionInArray(e.target.value, 0)}/>
        <InputGroupAddon addonType="append">
          <InputGroupText>+</InputGroupText>
          <InputGroupText>-</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup className="input-grp">
        <Input placeholder="option2" value={options[1]} onChange={e=> setOptionInArray(e.target.value, 1)}/>
        <InputGroupAddon addonType="append">
        <InputGroupText>+</InputGroupText>
          <InputGroupText>-</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <div className="question button">
      <Button className="survey-main-btn" disabled={isQuestionAddDisabled()}>Add Question</Button>
      <Button className="survey-main-btn" disabled={isQuestionAddDisabled()}>Publish</Button>
      </div>
      </div>
    );
  }
  
  export default SingleSelect;
  