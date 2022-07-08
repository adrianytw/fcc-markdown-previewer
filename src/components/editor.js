import { useSelector, useDispatch } from "react-redux/es/exports"
import { update } from "../features/editorSlice"

import './editor.css'

const Editor = () => {

  const { input } = useSelector( (state) => state.editor )
  const dispatch = useDispatch()

  return (
      <div>
          <textarea id="editor"
            value={input}
            onChange={ (e) => dispatch(update(e.target.value)) }>
          </textarea>
      </div>
  )
}

export default Editor