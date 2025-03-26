import {UserButton, OrganizationSwitcher} from "@clerk/clerk-react"

const Header = () => {
    return (
        <header>
            <OrganizationSwitcher
                appearance={{
                    elements: {
                        organizationPreviewAvatarBox: "size-6"
                    }
                }}
            />
            <UserButton
                appearance={{
                    elements: {
                        userButtonAvatarBox: "size-6"
                    }
                }}
            />
        </header>
    )
}
export default Header