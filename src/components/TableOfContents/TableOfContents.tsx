// General imports
import React, { useState } from 'react';
// Style imports
import './TableOfContents.css';
// Hook imports
import { useHeadingData } from '../../hooks/useHeadingData';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface Props {}

const TableOfContents = ({}: Props) => {
    const [activeId, setActiveId] = useState();
    const { nestedHeadings } = useHeadingData();
    useIntersectionObserver(setActiveId);

    const Headings: (headings: any) => any = ({ headings }) => (
        <ul>
            {headings.map((heading: any) => (
                <li
                    key={heading.title}
                    className={heading.id === activeId ? 'active' : ''}
                >
                    <a
                        href={`#${heading.id}`}
                        onClick={(e: any) => {
                            e.preventDefault();
                            const el = document.querySelector(`#${heading.id}`);
                            if (el) {
                                el.scrollIntoView({ behavior: 'smooth' });
                            }
                            if (document.activeElement instanceof HTMLElement) {
                                document.activeElement.blur();
                            }
                        }}
                    >
                        {heading.title}
                    </a>
                    {heading.items.length > 0 && (
                        <ul>
                            {heading.items.map((child: any) => (
                                <li
                                    key={child.id}
                                    className={
                                        heading.id === activeId ? 'active' : ''
                                    }
                                >
                                    <a
                                        href={`#${child.id}`}
                                        onClick={(e: any) => {
                                            e.preventDefault();
                                            const el = document.querySelector(
                                                `#${child.id}`
                                            );
                                            if (el) {
                                                el.scrollIntoView({
                                                    behavior: 'smooth'
                                                });
                                            }
                                        }}
                                    >
                                        {child.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );

    return (
        <nav aria-label="Table of contents">
            <Headings headings={nestedHeadings} activeId={activeId} />
        </nav>
    );
};

export default TableOfContents;
