import {SignInButton} from "@clerk/clerk-react"
import mockLogo from "../assets/mock.png"

const SignInPage = () => {
    return (
        <div className="signin">
            <img src={mockLogo} alt="mock logo" className="logo"/>
            <SignInButton/>
        </div>
    )
}
export default SignInPage