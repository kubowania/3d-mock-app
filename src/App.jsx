import {SignedIn, SignedOut} from "@clerk/clerk-react"
import SignInPage from "./components/SignInPage.jsx"
import Header from "./components/Header.jsx"
import Dashboard from "./components/Dashboard.jsx"
import "./App.css"

const App = () => {
    return (
        <>
            <SignedOut>
                <SignInPage/>
            </SignedOut>
            <SignedIn>
                <Header/>
                <Dashboard/>
            </SignedIn>
        </>
    )
}
export default App