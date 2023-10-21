import React from "react";

const BaseTemplate = (props) => {
    return (
        <main>
            {props.children()}
        </main>
    );
}

export default BaseTemplate;