import React from "react";
import { useSubmodule } from "../hooks/load-submodule";
import MountSlot from "./MountSlot";

interface Props {
    submoduleName: string,
}

export default function IntegrateModule ({ submoduleName } : Props) {

    const { isLoading, submodule } = useSubmodule(submoduleName);

    return <> { isLoading ?
        <div> Loading module [{submoduleName}]</div>
        :
        submodule == null ?
            <div> Failed loading module [{submoduleName}]</div>
            :
            <MountSlot source={submoduleName} mount={submodule.mount} />
    } </>
}