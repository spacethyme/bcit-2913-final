// import { Link } from "react-location";
// import { useState } from "react";

// I cannot get setAboutMe to work
// I can get it to work if I useState inside the IntakeForm
// I can get it to run from App.js if I DON'T use the Router
// I've checked it over many times, I don't know what I'm doing wrong?

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

//not using this for now
function IntakeFormTextarea({ field, display, aboutMe, setAboutMe }) {
    return (
        <div className="input-container">
            <label id={`${field}-label`} htmlFor={field}>{display}</label>
            <textarea
                id={field}
                name={field}
                placeholder={display}
                rows="3"
                aria-labelledby={`${field}-label`}
                onChange={(e) => {
                    console.log(e.target.value);
                    setAboutMe(e.target.value);
                    console.log(aboutMe);
                }}
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

export default function IntakeForm({ aboutMe, setAboutMe }) {

    //const [aboutMe, setAboutMe] = useState("defaultAboutMe");

    return (
        <div className="form-flex-wrapper">
            <section className="logo-and-name">
                <div>
                    <h1>DevCard</h1>
                    <p>Your personal digital portfolio</p>
                    <button onClick={() => {setAboutMe("AppClicky")}} >{aboutMe}</button>
                </div>
            </section>
            <section className="intake-form">
                <form>
                    <h2>Create your DevCard</h2>

                    <IntakeFormTextField field="fullname" display="Your Full Name" />

                    <div className="input-container">
                        <label id="aboutme-label" htmlFor="aboutme">About Me</label>
                        <textarea
                            id="aboutme"
                            name="aboutme"
                            placeholder="About Me"
                            rows="3"
                            aria-labelledby={"aboutme-label"}
                            onChange={(e) => {
                                setAboutMe(e.target.value);
                                console.log(e.target.value);
                                console.log(aboutMe);
                            }}
                        />
                    </div>

                    <fieldset>
                        <legend>Technologies you know:</legend>
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
            </section>
        </div>
    )
}