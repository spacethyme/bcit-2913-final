import { useNavigate } from "react-location";

function IntakeFormTextField({ field, display, handleText }) {
    return (
        <div className="input-container">
            <label id={`${field}-label`} htmlFor={field}>{display}</label>
            <input 
                type="text"
                id={field}
                name={field}
                placeholder={display}
                aria-labelledby={`${field}-label`}
                onChange={(e) => handleText(e)}
            />
        </div>
    )
}

function IntakeFormTextarea({ field, display, handleText }) {
    return (
        <div className="input-container">
            <label id={`${field}-label`} htmlFor={field}>{display}</label>
            <textarea
                id={field}
                name={field}
                placeholder={display}
                rows="3"
                aria-labelledby={`${field}-label`}
                onChange={(e) => handleText(e)}
            />
        </div>
    )
}

function IntakeFormCheckboxField({ field, display, handleCheck }) {
    return (
        <>
            <label id={`${field}-label`} htmlFor={field}>
                <input
                    type="checkbox"
                    value={field}
                    id={field}
                    name={field}
                    onChange={(e) => handleCheck(e)}
                />
                {display}
            </label>
        </>
    )
}

export default function IntakeForm({ formData, setFormData }) {

    const navigate = useNavigate();

    const handleCheck = (e) => {
        let field = e.target.value; // the checkboxes each have a "value" that matches field name
        let newvalue = e.target.checked; // i.e.: true or false
        setFormData((formData) => {return {...formData, [field]: newvalue}});
    }

    const handleText = (e) => {
        let field = e.target.name; // the text fields each have a "name" that matches the field name
        let newvalue = e.target.value; // i.e.: the contents of the input box
        setFormData((formData) => {return {...formData, [field]: newvalue}});
    }

    const handleClick = (e) => {
        e.preventDefault();  // suppress default behaviour, i.e.: don't refresh page when button is clicked
        navigate({ to: "profile", replace: true })
    }

    return (
        <div className="form-flex-wrapper">
            <section className="logo-and-name">
                <div>
                    <h1>DevCard</h1>
                    <p>Your personal digital portfolio</p>
                </div>
            </section>
            <section className="intake-form">
                <form>
                    <h2>Create your DevCard</h2>

                    <IntakeFormTextField field="fullname" display="Your Full Name" handleText={handleText} />
                    <IntakeFormTextarea field="aboutme" display="About Me" handleText={handleText} />
                    <fieldset>
                        <legend>Technologies you know:</legend>
                        <IntakeFormCheckboxField field="html" display="HTML" handleCheck={handleCheck} />
                        <IntakeFormCheckboxField field="css" display="CSS" handleCheck={handleCheck} />
                        <IntakeFormCheckboxField field="sass" display="SASS" handleCheck={handleCheck} />
                        <IntakeFormCheckboxField field="js" display="JS" handleCheck={handleCheck} />
                        <IntakeFormCheckboxField field="git" display="Git" handleCheck={handleCheck} />
                        <IntakeFormCheckboxField field="react" display="React" handleCheck={handleCheck} />
                        <IntakeFormCheckboxField field="nodejs" display="Node.JS" handleCheck={handleCheck} />
                        <IntakeFormCheckboxField field="php" display="PHP" handleCheck={handleCheck} />
                    </fieldset>
                    <IntakeFormTextField field="urlgit" display="GitHub URL" handleText={handleText} />
                    <IntakeFormTextField field="urltwit" display="Twitter URL" handleText={handleText} />
                    <IntakeFormTextField field="books" display="Favourite Books (separate by comma)" handleText={handleText} />

                    <button onClick={handleClick} className="signup-btn" type="submit">
                        Create Site
                    </button>
                    
                </form>
            </section>
        </div>
    )
}