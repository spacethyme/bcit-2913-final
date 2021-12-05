import { Link, useMatch } from "react-location";

export default function ProfilePage() {
    const id = useMatch().params.id // pulls id from URL
    return (
        <div>
            <p>--ProfilePage Component--</p>
            <p>Id = {id}</p>
            <Link to="/">(return to Intake Form)</Link>
        </div>
    )
}