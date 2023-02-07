import {BuilderComponent, builder, useIsPreviewing, Builder} from '@builder.io/react';
import React, {useEffect, useState} from "react";


const Heading = (props: { title: string; }) => (
    <h1>title: {props.title}</h1>
)


// Make sure that every page where renders Builder
// content calls the file containing this function call
Builder.registerComponent(Heading, {
    name: 'Heading',
    inputs: [{name: 'title', type: 'text'}],
    image: 'https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png'
})

// Put your API key here

// set whether you're using the Visual Editor,
// whether there are changes,
// and render the content if found
export default function CatchAllRoute() {
    const isPreviewingInBuilder = useIsPreviewing();
    const [notFound, setNotFound] = useState(false);
    const [content, setContent] = useState();

    // get the page content from Builder
    useEffect(() => {
        async function fetchContent() {
            const content = await builder.get('page', {
                url: window.location.pathname
            }).promise();

            setContent(content);
            setNotFound(!content);
        }

        fetchContent();
    }, []);
    // if no page is found, return a 404 page
    if (notFound && !isPreviewingInBuilder) {
        return <div>Not Found 404 Error</div>
    }

    // return the page when found
    return (
        <>
            {/* Render the Builder page */}
            <BuilderComponent model="page"

                              content={content}/>
        </>
    );
}
