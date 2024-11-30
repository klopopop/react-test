import {Layout} from '../widgets/layout'
import {BrowserRouter} from 'react-router-dom'
import  {WithError} from '../app/providers/with-error'

function App() {
    return (
        <BrowserRouter>
            <WithError>
                <Layout/>
            </WithError>
        </BrowserRouter>
    )
}

export default App