import { useSelector } from "react-redux";

const Previewer = () => {

    const { input } = useSelector( state => state.editor )

    return (
        <div id="preview">
            {input}
        </div>
    )
}

export default Previewer