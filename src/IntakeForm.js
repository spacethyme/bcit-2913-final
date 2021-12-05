import { Link } from "react-location";

function IntakeFormTextField({ field, display }) {
    return (
        <div className="input-container">
        <label id={`${field}-label`} htmlFor={field}>{display}</label>
        <input 
            type="text"
            id={field}
            name={field}
            placeholder={display}
            aria-labelledby={`${field}-label`}
        />
    </div>
    )
}

function IntakeFormCheckboxField({ field, display }) {
    return (
        <>
            <label id={`${field}-label`} htmlFor={field}>
            <input
                type="checkbox"
                value={display}
                id={field}
                name={field}
            />
            {display}
            </label>
        </>
    )
}

export default function IntakeForm() {
    return (
        <div className="flex-wrapper">
            <div className="logo-and-name">
                <h1>DevCard</h1>
                <p>Your personal digital portfolio</p>
            </div>
            <div className="intake-form">
                <form>
                    <h2>Create your DevCard</h2>

                    <IntakeFormTextField field="fullname" display="Your Full Name" />
                    <IntakeFormTextField field="aboutme" display="About Me" />
                    <fieldset>
                        <legend>Technologies</legend>
                        <IntakeFormCheckboxField field="html" display="HTML" />
                        <IntakeFormCheckboxField field="css" display="CSS" />
                        <IntakeFormCheckboxField field="js" display="JS" />
                        <IntakeFormCheckboxField field="git" display="Git" />
                        <IntakeFormCheckboxField field="react" display="React" />
                        <IntakeFormCheckboxField field="nodejs" display="Node.JS" />
                    </fieldset>
                    <IntakeFormTextField field="urlgit" display="GitHub URL" />
                    <IntakeFormTextField field="urltwit" display="Twitter URL" />
                    <IntakeFormTextField field="books" display="Favourite Books (separate by comma)" />

                    <button className="signup-btn" type="submit">
                        Create Site
                    </button>
                    
                </form>

                <p>Sample Links for Later:</p>
                <ul>
                    <li><Link to="/1">(go to Profile #1)</Link></li>
                    <li><Link to="/2">(go to Profile #2)</Link></li>
                </ul>
            </div>
        </div>
    )
}