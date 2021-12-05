import { Link } from "react-location";

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

                    <div className="input-container">
                        <label id="fullname-label" htmlFor="fullname">Full Name</label>
                        <input 
                            type="text"
                            id="fullname"
                            name="fullname"
                            placeholder="Your Full Name"
                            aria-labelledby="fullname-label"
                        />
                    </div>
                    
                    <div className="input-container">
                        <label id="aboutme-label" htmlFor="aboutme">About Me</label>
                        <input 
                            type="text"
                            id="aboutme"
                            name="aboutme"
                            placeholder="About Me"
                            aria-labelledby="aboutme-label"
                        />
                    </div>

                    <fieldset>
                        <legend>Technologies</legend>

                        <label id="html-label" htmlFor="html">
                            <input
                                type="checkbox"
                                value="HTML"
                                id="html"
                                name="html"
                            />
                            HTML
                        </label>

                        <label id="css-label" htmlFor="css">
                            <input
                                type="checkbox"
                                value="CSS"
                                id="css"
                                name="css"
                            />
                            CSS
                        </label>

                    </fieldset>

                    <div className="input-container">
                        <label id="urlgit-label" htmlFor="urlgit">GitHub URL</label>
                        <input 
                            type="text"
                            id="urlgit"
                            name="urlgit"
                            placeholder="GitHub URL"
                            aria-labelledby="urlgit-label"
                        />
                    </div>

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