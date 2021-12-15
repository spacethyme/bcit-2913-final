import "./profile.css"; // provided to us in class
import "./luxa_modified.css"; // additional styles needed for containers, rows, cards, etc.
import { Link, useMatch } from 'react-location';

function InfoBar ({ icon, children }) {
  return (
    <span>
      <i className={icon}></i>&nbsp;&nbsp;
      {children}
    </span>
  )
}

function ConnectButton({ url, icon }) {
  return (
    <a
      className="has-dflex-center bs-md"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className={icon}></i>
    </a>
  )
}

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

  let id = useMatch().params.id;
  if (!id || !formData.users[id]) {
    id = 0;
  }
  const userData = formData.users[id];
  // if no ID is provided in url, OR if the ID provided doesn't exist in the data set, then use the blank user = 0

  const firstName = userData.fullname.split(' ')[0];
  // cuts the firstName field at the first space
  // this is a temporary fix, but wouldn't be sufficient for production
  // e.g.: will not work for "Mary Sue Smith" or "Dr. David Jones" -- in the first case, the given name is made of two parts, in the second case the user has included their title.  There are also international considerations.
  // ideally the user should be able to choose this at the intake form level, but this is going to require some rejiggering
  // I'm leaving it like this for now, with the (incorrect) assumption that everyone has a "Firstname Lastname" naming structure

  const booklist = userData.books.split(',');
  // user was instructed to separate books by comma
  // this splits the 1 text field into an array of individual books
  // there may be extra space at the beginning of some of the books, but this doesn't get rendered in the final html, so I'm not going to worry about trimming it

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
                          alt={firstName}
                        />
                      </div>
                      <div className="infos">
                        <InfoBar icon="fas fa-user-circle">{userData.fullname}</InfoBar>
                        <InfoBar icon="fas fa-briefcase">Full Stack Developer</InfoBar>
                      </div>
                    </div>
                  </div>
                  <div className="lx-card">
                    <div className="lx-row">
                      <h1 className="title">Connect with {firstName}</h1>
                      <div className="mini-cards">
                        <ConnectButton icon="fab fa-github-alt" url={userData.urlgit} />
                        <ConnectButton icon="fab fa-twitter" url={userData.urltwit} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lx-column">
                <div className="lx-row">
                  <div className="lx-row lx-card">
                    <HeadingWithIcon icon="fas fa-info-circle">
                      Welcome to {firstName}'s corner of the Internet
                    </HeadingWithIcon>
                  </div>
                  <div className="lx-row lx-card">
                    <HeadingWithIcon icon="fas fa-hand-point-right">
                      About me
                    </HeadingWithIcon>
                    <div className="text">
                      {userData.aboutme}
                    </div>
                  </div>
                  <div className="lx-row lx-card">
                    <HeadingWithIcon icon="fas fa-terminal">
                      Technologies
                    </HeadingWithIcon>
                    <div className="mini-cards">
                      {userData.html ? <TechButton title="HTML" icon="fab fa-html5" /> : "" }
                      {userData.css ? <TechButton title="CSS" icon="fab fa-css3-alt" /> : "" }
                      {userData.sass ? <TechButton title="SASS" icon="fab fa-sass" /> : "" }
                      {userData.js ? <TechButton title="JS" icon="fab fa-js" /> : "" }
                      {userData.git ? <TechButton title="Git" icon="fab fa-git" /> : "" }
                      {userData.react ? <TechButton title="React" icon="fab fa-react" /> : ""}
                      {userData.nodejs ? <TechButton title="Node.JS" icon="fab fa-node-js" /> : ""}
                      {userData.php ? <TechButton title="PHP" icon="fab fa-php" /> : ""}
                    </div>
                  </div>
                  <div className="lx-row lx-card">
                    <HeadingWithIcon icon="fas fa-book">
                      My favorite books
                    </HeadingWithIcon>
                    <div className="text">
                      <ol>
                        {
                          Object.keys(booklist)
                            .map(key => 
                              <li key={key}>{booklist[key]}</li>
                              )
                        }
                      </ol>
                    </div>
                  </div>
                  <div className="lx-row mini-cards">
                    <Link to="/">
                        <InfoBar icon="fas fa-plus-square">
                          Create Another Site
                      </InfoBar>
                    </Link>
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
