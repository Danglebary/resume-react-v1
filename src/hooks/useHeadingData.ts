import { useEffect, useState } from 'react';

export const useHeadingData = () => {
    const [nestedHeadings, setNestedHeadings] = useState([]);

    const getNestedHeadings = (headingElements: Element[]) => {
        const nestedHeadings: any = [];

        headingElements.forEach((heading, _) => {
            const { textContent: title, id } = heading;

            if (heading.nodeName === 'H2') {
                if (title === 'See') {
                    return;
                }
                if (title === 'Austin') {
                    nestedHeadings.push({ id, title: 'Home', items: [] });
                } else {
                    nestedHeadings.push({ id, title, items: [] });
                }
            } else if (heading.nodeName === 'H3' && nestedHeadings.length > 0) {
                nestedHeadings[nestedHeadings.length - 1].items.push({
                    id,
                    title
                });
            }
        });

        return nestedHeadings;
    };

    useEffect(() => {
        const headingElements = Array.from(document.querySelectorAll('h2, h3'));

        const newHeadings = getNestedHeadings(headingElements);
        setNestedHeadings(newHeadings);
    }, []);

    return {
        nestedHeadings
    };
};
