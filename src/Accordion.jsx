import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import { use } from "react";

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          text={el.text}
          num={i}
          key={el.title}
        > {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

export default Accordion;
