'use client'

import React, {useRef, useEffect, RefObject} from "react";

interface Props {
    mount: (element: HTMLElement) => void
}

export default function IntegrateModule ({ mount } : Props) {
    const ref = useRef(null) as RefObject<HTMLDivElement>;

    useEffect(() => {
        const element = ref.current;
        if (element) {
            mount(element);
        }
    });

    return <div ref={ref} />;
}