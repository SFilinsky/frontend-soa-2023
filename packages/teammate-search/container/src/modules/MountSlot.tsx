import React, {useRef, useEffect, RefObject} from "react";

interface Props {
    source: string,
    mount: (element: HTMLElement) => void
}

export default function MountSlot ({ source, mount } : Props) {
    const ref = useRef(null) as RefObject<HTMLDivElement>;

    useEffect(() => {
        const element = ref.current;
        if (element) {
            mount(element);
        }
    });

    return <div data-source={source} ref={ref} />;
}