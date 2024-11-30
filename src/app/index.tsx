import { BrowserRouter } from 'react-router-dom'
import { Routing } from '../pages/'
import {WithLoading} from '../shared/ui/with-loading'

function App() {
    return (
        <BrowserRouter>
            <WithLoading>
                <Routing />
            </WithLoading>
        </BrowserRouter>
    )
}

export default App