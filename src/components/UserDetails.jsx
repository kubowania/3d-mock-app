import { useOrganization, useSession, useUser} from "@clerk/clerk-react"

const UserDetails = () => {
    const { user } = useUser()
    const { session } = useSession()
    const { organization } = useOrganization()

    if ( !user || !session ) return null

    const formatDate = (date) => {
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        })
    }

    const formatDateWithNumbers = (date) => {
        return date.toLocaleString("en-US", {
            month: "numeric",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
        })
    }

    return (
        <div className="info-container">
            <article className="info-detail">
                <img className="user-detail-img" src={user.imageUrl}/>
                <div>
                    <h1>{user.firstName} {user.lastName}</h1>
                </div>

                <table>
                    <tbody>
                    <tr>
                        <td>email:</td>
                        <td>{user.emailAddresses[0].emailAddress}</td>
                    </tr>
                    <tr>
                        <td>last signin:</td>
                        <td>{formatDate(user.lastSignInAt)}</td>
                    </tr>
                    <tr>
                        <td>created at:</td>
                        <td>{formatDate(user.createdAt)}</td>
                    </tr>
                    <tr>
                        <td>user Id:</td>
                        <td>{user.id}</td>
                    </tr>
                    </tbody>
                </table>
            </article>
            <article className="info-detail">
                <h2>Session Details</h2>
                <table>
                    <tbody>
                    <tr>
                        <td>session Id:</td>
                        <td>{session.id}</td>
                    </tr>
                    <tr>
                        <td>status:</td>
                        <td>{session.status}</td>
                    </tr>
                    <tr>
                        <td>last active:</td>
                        <td>{formatDateWithNumbers(session.lastActiveAt)}</td>
                    </tr>
                    <tr>
                        <td>expired at:</td>
                        <td>{formatDateWithNumbers(session.expireAt)}</td>
                    </tr>
                    </tbody>
                </table>
            </article>
            {organization && <article className="info-detail">
                <h2>Organization</h2>
                <table>
                    <tbody>
                    <tr>
                        <td>org Id:</td>
                        <td>{organization.id}</td>
                    </tr>
                    <tr>
                        <td>org name:</td>
                        <td>{organization.name}</td>
                    </tr>
                    <tr>
                        <td>member count</td>
                        <td>{organization.membersCount}</td>
                    </tr>
                    <tr>
                        <td>pending invite:</td>
                        <td>{organization.pendingInvitationsCount}</td>
                    </tr>
                    </tbody>
                </table>
            </article>}
        </div>
    )
}
export default UserDetails