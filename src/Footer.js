import React from 'react';

function Footer() {
    return (
        <footer>
            <h2 className="footer--title">Mary Ferrer &#10047; Web Developer</h2>
            <ul>
                <li>
          <a
            className="nav"
            href="https://www.linkedin.com/in/mary-ferrer-909700162/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin" aria-hidden="true"></i>
            <span class="sr-only">LinkedIn</span></a
          >
        </li>
        <li>
          <a className="nav" href="https://github.com/maryferrer" target="_blank" rel="noreferrer">
            <i class="fab fa-github-square" aria-hidden="true"></i>
            <span class="sr-only">GitHub</span></a
          >
        </li>
        <li>
          <a className="nav" href="mailto:mary.ferrer6@gmail.com">
            <i className="fas fa-envelope" aria-hidden="true"></i>
            <span class="sr-only">Email</span></a
          >
        </li>
            </ul>
            <p className="copyright"><small>&copy; 2022 Mary Ferrer. All rights reserved.</small></p>
        </footer>
    )
}

export default Footer;