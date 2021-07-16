import React, { useState } from 'react';
import "./accordion.css"

interface IAccordionItem {
    title: string;
    content: string;
}

const AccordionItem: React.FC<IAccordionItem> = ({ title, content }) => {
    const [isActive, setIsActive] = useState<boolean>(false)
    return <div className="accordion-item" onClick={e => { setIsActive(!isActive) }}>
        <button className={`accordion-header ${isActive && 'active'}`}>
            <strong>{title}</strong>
            <i className="fas fa-angle-down"></i>
        </button>
        <div className={`accordion-body ${isActive && 'active'}`}>{content}</div>
    </div>
}

const LOREM = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse doloremque sunt, culpa tempora unde in reiciendis neque voluptatem! Accusantium cupiditate at expedita dolorem consequatur mollitia aut deserunt illo. Eligendi, quibusdam.'

const Accordion: React.FC = () => {
    const list: IAccordionItem[] = [
        { title: 'Accordion 1', content: LOREM },
        { title: 'Accordion 2', content: LOREM },
        { title: 'Accordion 3', content: LOREM },
        { title: 'Accordion 4', content: LOREM },
    ]
    return (
        <div className="accordion">
            {list.map((item, index) => <AccordionItem key={index} {...item} />)}
        </div>
    );
}

export default Accordion;
