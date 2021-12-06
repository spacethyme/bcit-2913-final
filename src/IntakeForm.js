// import { Link } from "react-location";
import { useState } from "react";

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

function IntakeFormTextarea({ field, display }) {
    return (
        <div className="input-container">
            <label id={`${field}-label`} htmlFor={field}>{display}</label>
            <textarea
                id={field}
                name={field}
                placeholder={display}
                rows="3"
                aria-labelledby={`${field}-label`}
            />
        </div>
    )
}

function IntakeFormCheckboxField({ field, display, handleChange }) {
    return (
        <>
            <label id={`${field}-label`} htmlFor={field}>
                <input
                    type="checkbox"
                    value={field}
                    id={field}
                    name={field}
                    onChange={(e) => handleChange(e)}
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

    const handleChange = (e) => {
        let isChecked = e.target.checked;
        setFormData({...formData, [e.target.value]: isChecked});
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

                    <IntakeFormTextField field="fullname" display="Your Full Name" />
                    <IntakeFormTextarea field="aboutme" display="About Me" />
                    <fieldset>
                        <legend>Technologies you know:</legend>
                        <IntakeFormCheckboxField field="html" display="HTML" handleChange={handleChange} />
                        <IntakeFormCheckboxField field="css" display="CSS" handleChange={handleChange} />
                        <IntakeFormCheckboxField field="js" display="JS" handleChange={handleChange} />
                        <IntakeFormCheckboxField field="git" display="Git" handleChange={handleChange} />
                        <IntakeFormCheckboxField field="react" display="React" handleChange={handleChange} />
                        <IntakeFormCheckboxField field="nodejs" display="Node.JS" handleChange={handleChange} />
                    </fieldset>
                    <IntakeFormTextField field="urlgit" display="GitHub URL" />
                    <IntakeFormTextField field="urltwit" display="Twitter URL" />
                    <IntakeFormTextField field="books" display="Favourite Books (separate by comma)" />

                    <button className="signup-btn" type="submit">
                        Create Site
                    </button>
                    
                </form>
            </section>
        </div>
    )
}