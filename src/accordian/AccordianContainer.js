import React from 'react';
import Accordion from './lib/components/Accordion';
import AccordionItem from './lib/components/AccordionItem';
import './lib/style/index.css';

const AccordianContainer = () => (
    <div>
      {/*<h1>Accordion Component 만들기</h1>*/}
      <Accordion atomic={true}>
        <AccordionItem title="Title 1">
          <DummyContent/>
        </AccordionItem>
        <AccordionItem title="Title 2">
          <DummyContent/>
        </AccordionItem>
        <AccordionItem title="Title 3">
          <DummyContent/>
        </AccordionItem>
      </Accordion>
    </div>
);

const DummyContent = () => {
  return <p>This is DummyContent</p>;
};

export default AccordianContainer;
