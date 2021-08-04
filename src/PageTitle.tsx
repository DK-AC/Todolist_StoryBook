import React from "react";

type PageTitlePropTypes={
    title:string
}

export function PageTitle(props:PageTitlePropTypes) {
    console.log('PageTitle rendering')

    return (
        <h1>{props.title}</h1>
    )
}