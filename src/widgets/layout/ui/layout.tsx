import { Header } from '../../header'
//import { Outlet } from 'react-router-dom'
import {WithLoading} from '../../../shared/ui/with-loading'
import { Routing } from '../../../pages/'
export const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col">
        
                <Header />
                <WithLoading>
                    <main className="flex-1 p-5">
                      <Routing/>
                    </main>
                </WithLoading>
  
        </div>
    )
}
