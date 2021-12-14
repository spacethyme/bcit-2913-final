import { useState } from "react";
import { Link, useNavigate } from "react-location";

function IntakeFormTextField({ field, display, handleInput }) {
    return (
        <div className="input-container">
            <label id={`${field}-label`} htmlFor={field}>{display}</label>
            <input 
                type="text"
                id={field}
                name={field}
                placeholder={display}
                aria-labelledby={`${field}-label`}
                onChange={(e) => handleInput(e, "text")}
            />
        </div>
    )
}

function IntakeFormTextarea({ field, display, handleInput }) {
    return (
        <div className="input-container">
            <label id={`${field}-label`} htmlFor={field}>{display}</label>
            <textarea
                id={field}
                name={field}
                placeholder={display}
                rows="3"
                aria-labelledby={`${field}-label`}
                onChange={(e) => handleInput(e, "text")}
            />
        </div>
    )
}

function IntakeFormCheckboxField({ field, display, handleInput }) {
    return (
        <>
            <label id={`${field}-label`} htmlFor={field}>
                <input
                    type="checkbox"
                    value={field}
                    id={field}
                    name={field}
                    onChange={(e) => handleInput(e, "check")}
                />
                {display}
            </label>
        </>
    )
}

export default function IntakeForm({ database, setDatabase }) {

    const userTemplate = database.users[0];
    const [newUser, setNewUser] = useState(userTemplate);

    const navigate = useNavigate();

    const handleInput = (e, type) => {

        let fieldName = e.target.name; // each target field has a "name" that matches field name in the userTemplate

        let newValue = e.target.value; // for text fields this will be the contents of the box; for checkboxes this will be the name of the field
        if (type === "check") {
            newValue = e.target.checked; // i.e.: if the field is a checkbox, use the "true or false" instead of the field "value" (which is just the field name)
        }

        let newUserClone = {...newUser};
        newUserClone[fieldName] = newValue;
        setNewUser(newUserClone);
    }

    const handleSubmit = (e) => {
        // suppress default behaviour, i.e.: don't refresh page when button is clicked
        e.preventDefault();
        
        // calculate new user ID
        const lastUserId = database.users[database.users.length - 1].id;
        const newUserId = lastUserId + 1;

        // create a clone of newUser and add the newUserId to it
        // ...using a clone because there is lag involved with the "setNewUser" function
        // ...setNewUser *will* assign the new user id, but *not* before the next step, which means it doesn't get added to the database
        const newUserClone = {...newUser, id : newUserId};

        // make a clone of the user list; add the new clone to it
        const users = [...database.users, newUserClone];

        // update the database with the new clone of users
        setDatabase((database) => {return {...database, users : users}});

        // navigate to new profile
        navigate({ to: `profile/${newUserId}`, replace: true })
    }

    return (
        <div className="form-flex-wrapper">
            <section className="logo-and-name">
                <div>
                    <h1>DevCard</h1>
                    <p>Your personal digital portfolio</p>
                    <p>New User Data: {JSON.stringify(newUser)}</p>
                    <ul>
                        {
                            database.users.map((user) => (
                                <li key={user.id}>
                                    <Link to={`/profile/${user.id}`}>
                                        {user.id}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
            <section className="intake-form">
                <form>
                    <h2>Create your DevCard</h2>

                    <IntakeFormTextField field="fullname" display="Your Full Name" handleInput={handleInput} />
                    <IntakeFormTextarea field="aboutme" display="About Me" handleInput={handleInput} />
                    <fieldset>
                        <legend>Technologies you know:</legend>
                        <IntakeFormCheckboxField field="html" display="HTML" handleInput={handleInput} />
                        <IntakeFormCheckboxField field="css" display="CSS" handleInput={handleInput} />
                        <IntakeFormCheckboxField field="sass" display="SASS" handleInput={handleInput} />
                        <IntakeFormCheckboxField field="js" display="JS" handleInput={handleInput} />
                        <IntakeFormCheckboxField field="git" display="Git" handleInput={handleInput} />
                        <IntakeFormCheckboxField field="react" display="React" handleInput={handleInput} />
                        <IntakeFormCheckboxField field="nodejs" display="Node.JS" handleInput={handleInput} />
                        <IntakeFormCheckboxField field="php" display="PHP" handleInput={handleInput} />
                    </fieldset>
                    <IntakeFormTextField field="urlgit" display="GitHub URL" handleInput={handleInput} />
                    <IntakeFormTextField field="urltwit" display="Twitter URL" handleInput={handleInput} />
                    <IntakeFormTextField field="books" display="Favourite Books (separate by comma)" handleInput={handleInput} />

                    <button onClick={handleSubmit} className="signup-btn" type="submit">
                        Create Site
                    </button>
                    
                </form>
            </section>
        </div>
    )
}