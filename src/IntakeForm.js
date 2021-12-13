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
        let fieldName = e.target.name; // the text fields each have a "name" that matches the field name
        let newValue = e.target.value; // i.e.: the contents of the input box
        let users = [...formData.users]; // got this from stackoverflow. 1. make a shallow copy of the items
        let user = {...users[0]} // 2. make a shallow copy of the item we want to mutate (id=0, the "intake" user)
        user.[fieldName] = newValue; // 3. replace the property you're interested in
        users[0] = user; // 4. put it back into the array... S.O. says: "N.B. we *are* mutating the array here, but that's why we made a copy first"
        setFormData((formData) => {return {...formData, users: users}}); // 5. put our copy of users back into formData, via setFormData
        // it works!!
        // but is there a better way of doing this?  I feel like it's updating the whole data set every single keystroke, that seems excessive
    }

    const handleSubmit = (e) => {
        e.preventDefault();  // suppress default behaviour, i.e.: don't refresh page when button is clicked
        // to do: update big array with new user data
        navigate({ to: "profile/1", replace: true }) // to do: change "1" to variable for new user assigned id
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

                    <button onClick={handleSubmit} className="signup-btn" type="submit">
                        Create Site
                    </button>
                    
                </form>
            </section>
        </div>
    )
}