import React, { useRef, useEffect } from 'react';

export const useIntersectionObserver = (
    setActiveId: React.SetStateAction<any>
) => {
    const headingElementsRef = useRef({});
    useEffect(() => {
        const callback = (headings: any) => {
            headingElementsRef.current = headings.reduce(
                (map: any, headingElement: any) => {
                    map[headingElement.target.id] = headingElement;
                    return map;
                },
                headingElementsRef.current
            );

            const visibleHeadings: any = [];
            Object.keys(headingElementsRef.current).forEach((key) => {
                const headingElement = headingElementsRef.current[key];
                if (headingElement.isIntersecting)
                    visibleHeadings.push(headingElement);
            });

            const getIndexFromId = (id: any) =>
                headingElements.findIndex((heading) => heading.id === id);

            if (visibleHeadings.length === 1) {
                setActiveId(visibleHeadings[0].target.id);
            } else if (visibleHeadings.length > 1) {
                const sortedVisibleHeadings = visibleHeadings.sort(
                    (a: any, b: any) =>
                        getIndexFromId(a.target.id) >
                        getIndexFromId(b.target.id)
                );
                setActiveId(sortedVisibleHeadings[0].target.id);
            }
        };

        const observer = new IntersectionObserver(callback, {
            rootMargin: '0px 0px -40% 0px'
        });

        const headingElements = Array.from(document.querySelectorAll('h2, h3'));

        headingElements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, [setActiveId]);
};
