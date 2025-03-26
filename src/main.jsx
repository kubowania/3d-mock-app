import {StrictMode} from "react"
import {createRoot} from "react-dom/client"
import App from "./App.jsx"
import {ClerkProvider} from "@clerk/clerk-react"
import {dark} from "@clerk/themes"

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ClerkProvider
            publishableKey={PUBLISHABLE_KEY}
            afterSignOutUrl="/"
            appearance={{
                baseTheme: dark
            }}
        >
            <App/>
        </ClerkProvider>
    </StrictMode>,
)
