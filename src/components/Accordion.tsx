import React, { MouseEventHandler, useCallback, useEffect, useRef, useState } from 'react';
import "./accordion.css"

interface IAccordionItem {
    id: number;
    title: string;
    content: string;
    isActive: boolean;
    onClick?: MouseEventHandler | undefined;
}

const AccordionItem: React.FC<IAccordionItem> = ({ title, content, isActive, onClick }) => {
    const expand = isActive ? 'active' : ''
    return <div className="accordion-item">
        <button className={`accordion-header ${expand}`} onClick={onClick}>
            <strong>{title}</strong>
            <i className="fas fa-angle-down"></i>
        </button>
        <div className={`accordion-body ${expand}`}>{content}</div>
    </div >
}

const LOREM = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse doloremque sunt, culpa tempora unde in reiciendis neque voluptatem! Accusantium cupiditate at expedita dolorem consequatur mollitia aut deserunt illo. Eligendi, quibusdam.'

const Accordion: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null)
    const [list, setList] = useState<IAccordionItem[]>([
        { id: 0, title: 'Accordion 1', content: LOREM, isActive: false },
        { id: 1, title: 'Accordion 2', content: LOREM, isActive: false },
        { id: 2, title: 'Accordion 3', content: LOREM, isActive: false },
        { id: 3, title: 'Accordion 4', content: LOREM, isActive: false },
    ])

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setList(list => list.map(item => {
                    item.isActive = false
                    return item
                }))
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [ref]);

    const onToggle = useCallback((index: number) => {
        setList(list => list.map(item => ({
            ...item,
            isActive: item.id === index ? !item.isActive : false
        })))
    }, [])

    return (
        <div ref={ref} className="accordion">
            {list.map((item, index) =>
                <AccordionItem
                    key={index}
                    {...item}
                    onClick={() => onToggle(index)} />)}
        </div>
    );
}

export default Accordion;
