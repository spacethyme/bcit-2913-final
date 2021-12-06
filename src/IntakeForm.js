// import { Link } from "react-location";
import { useState } from "react";

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

export default function IntakeForm({ aboutMe, setAboutMe }) {

    const [formData, setFormData] = useState ({
        fullname: "",
        aboutme: "",
        urlgit: "",
        urltwit: "",
        books: "",
        html: false,
        css: false,
        js: false,
        git: false,
        react: false,
        nodejs: false,
    })

    const handleCheck = (e) => {
        let isChecked = e.target.checked;
        setFormData({...formData, [e.target.value]: isChecked}); // clone the object, then update one value
    }

    const handleText = (e) => {
        setFormData({...formData, [e.target.name]: [e.target.value]}); // update field "name" with "value"
    }

    return (
        <div className="form-flex-wrapper">
            <section className="logo-and-name">
                <div>
                    <h1>DevCard</h1>
                    <p>Your personal digital portfolio</p>
                    <p>{JSON.stringify(formData)}</p>
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
                        <IntakeFormCheckboxField field="js" display="JS" handleCheck={handleCheck} />
                        <IntakeFormCheckboxField field="git" display="Git" handleCheck={handleCheck} />
                        <IntakeFormCheckboxField field="react" display="React" handleCheck={handleCheck} />
                        <IntakeFormCheckboxField field="nodejs" display="Node.JS" handleCheck={handleCheck} />
                    </fieldset>
                    <IntakeFormTextField field="urlgit" display="GitHub URL" handleText={handleText} />
                    <IntakeFormTextField field="urltwit" display="Twitter URL" handleText={handleText} />
                    <IntakeFormTextField field="books" display="Favourite Books (separate by comma)" handleText={handleText} />

                    <button className="signup-btn" type="submit">
                        Create Site
                    </button>
                    
                </form>
            </section>
        </div>
    )
}