import "./profile.css"; // provided to us in class
import "./luxa_modified.css"; // additional styles needed for containers, rows, cards, etc.

function HeadingWithIcon({ icon, children }) {
  return (
    <h1 className="title">
      <i className={icon}></i>&nbsp;{children}
    </h1>
  )
}

function TechButton({ title, icon }) {
  return (
    <span className="has-dflex-center bs-md" title={title}>
      <i className={icon}></i>
    </span>
  )
}

export default function ProfilePage({ formData }) {
  return (
    <div className="pageBody">
      <main className="has-dflex-center">
        <section>
          <div className="lx-container-85">
            <div className="lx-row align-stretch">
              <div className="lx-column is-3">
                <div className="lx-row">
                  <div className="lx-card">
                    <div className="lx-row">
                      <div className="has-dflex-center bs-md pic">
                        <img
                          src="https://github.com/luxonauta.png"
                          alt="Armaan"
                        />
                      </div>
                      <div className="infos">
                        <span>
                          <i className="fas fa-user-circle"></i>&nbsp;&nbsp;
                          {formData.fullname}
                        </span>
                        <span>
                          <i className="fas fa-briefcase"></i>&nbsp;&nbsp;Full Stack
                          Developer
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="lx-card">
                    <div className="lx-row">
                      <h1 className="title">Connect with Armaan</h1>
                      <div className="mini-cards">
                        <a
                          className="has-dflex-center bs-md"
                          href={formData.urlgit}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-github-alt"></i>
                        </a>
                        <a
                          className="has-dflex-center bs-md"
                          href={formData.urltwit}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lx-column">
                <div className="lx-row">
                  <div className="lx-row lx-card">
                    <HeadingWithIcon icon="fas fa-info-circle">
                      Welcome to Armaan's corner of the Internet
                    </HeadingWithIcon>
                  </div>
                  <div className="lx-row lx-card">
                    <HeadingWithIcon icon="fas fa-hand-point-right">
                      About me
                    </HeadingWithIcon>
                    <div className="text">
                      {formData.aboutme}
                    </div>
                  </div>
                  <div className="lx-row lx-card">
                    <HeadingWithIcon icon="fas fa-terminal">
                      Technologies
                    </HeadingWithIcon>
                    <div className="mini-cards">
                      {formData.html ? <TechButton title="HTML" icon="fab fa-html5" /> : "" }
                      {formData.css ? <TechButton title="CSS" icon="fab fa-css3-alt" /> : "" }
                      {formData.sass ? <TechButton title="SASS" icon="fab fa-sass" /> : "" }
                      {formData.js ? <TechButton title="JS" icon="fab fa-js" /> : "" }
                      {formData.git ? <TechButton title="Git" icon="fab fa-git" /> : "" }
                      {formData.react ? <TechButton title="React" icon="fab fa-react" /> : ""}
                      {formData.nodejs ? <TechButton title="Node.JS" icon="fab fa-node-js" /> : ""}
                      {formData.php ? <TechButton title="PHP" icon="fab fa-php" /> : ""}
                    </div>
                  </div>
                  <div className="lx-row lx-card">
                    <HeadingWithIcon icon="fas fa-book">
                      My favorite books
                    </HeadingWithIcon>
                    <div className="text">
                      <p>this should be a list:</p>
                      <p>{formData.books}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
