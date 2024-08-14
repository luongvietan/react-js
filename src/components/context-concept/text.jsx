import { useContext } from "react"
import { GlobalContext } from "../../context"

function ContextTextComponent() {
    const { theme } = useContext(GlobalContext)
    return <h3 style={{
        fontSize: theme === 'light' ? '50px' : '100px',
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'red' : 'white'
    }}>Text Changing</h3>
} 
export default ContextTextComponent