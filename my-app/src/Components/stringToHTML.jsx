import React from "react";

function StringToHTML({ htmlString }){
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />

}

export default StringToHTML;
