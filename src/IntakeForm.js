import { Link } from "react-location";

export default function IntakeForm() {
    return (
        <div>
            <p>--IntakeForm Component--</p>
            <ul>
                <li><Link to="/1">(go to Profile #1)</Link></li>
                <li><Link to="/2">(go to Profile #2)</Link></li>
            </ul>
        </div>
    )
}