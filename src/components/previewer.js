import { useSelector } from "react-redux";
import Markdown from "marked-react";

import './previewer.css'

const Previewer = () => {

    const { input } = useSelector( state => state.editor )
    
    // Markdown.setOptions({
    //     breaks: true
    // })
    return (
        <div id="preview">
            <Markdown value={input} 
                breaks="true"
                gfm="true"/>
        </div>
    )
}

export default Previewer