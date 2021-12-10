import "./profile.css";
import "./luxa_modified.css";
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
                          href="formData.urltwit"
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
                    <h1 className="title">
                      <i className="fas fa-info-circle"></i>&nbsp;Welcome to
                      Armaan's corner of the Internet
                    </h1>
                  </div>
                  <div className="lx-row lx-card">
                    <h1 className="title">
                      <i className="fas fa-hand-point-right"></i>&nbsp;About me
                    </h1>
                    <div className="text">
                      {formData.aboutme}
                    </div>
                  </div>
                  <div className="lx-row lx-card">
                    <h1 className="title">
                      <i className="fas fa-terminal"></i>&nbsp;Technologies
                    </h1>
                    <div className="mini-cards">
                      <span className="has-dflex-center bs-md" title="CSS">
                        <i className="fab fa-css3-alt"></i>
                      </span>
                      <span className="has-dflex-center bs-md" title="HTML">
                        <i className="fab fa-html5"></i>
                      </span>
                      <span className="has-dflex-center bs-md" title="JS">
                        <i className="fab fa-js"></i>
                      </span>
                      <span className="has-dflex-center bs-md" title="Sass">
                        <i className="fab fa-sass"></i>
                      </span>
                      <span className="has-dflex-center bs-md" title="Git">
                        <i className="fab fa-git-alt"></i>
                      </span>
                      <span className="has-dflex-center bs-md" title="Gulp">
                        <i className="fab fa-gulp"></i>
                      </span>
                      <span className="has-dflex-center bs-md" title="Node JS">
                        <i className="fab fa-node-js"></i>
                      </span>
                      <span className="has-dflex-center bs-md" title="NPM">
                        <i className="fab fa-npm"></i>
                      </span>
                      <span className="has-dflex-center bs-md" title="PHP">
                        <i className="fab fa-php"></i>
                      </span>
                      <span className="has-dflex-center bs-md" title="React">
                        <i className="fab fa-react"></i>
                      </span>
                    </div>
                  </div>
                  <div className="lx-row lx-card">
                    <h1 className="title">
                      <i className="fas fa-book"></i>&nbsp;My favorite books
                    </h1>
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
