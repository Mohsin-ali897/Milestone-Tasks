import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h2>
            <Link
              href="https://www.linkedin.com/in/mohsin-ali-8380922b7"
              target="_blank"
            >
              Mohsin Ali
            </Link>
          </h2>

          <ul className="footer-social-icons">
            <li>
              <Link
                href="mailto:mohsinlashari897915@gmail.com"
              >
                Gmail
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/share/194r4qgme1/"
                target="_blank"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/mohsin-ali-8380922b7"
                target="_blank"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} All rights reserved | Made by{' '}
          <Link
            href="https://www.linkedin.com/in/mohsin-ali-8380922b7"
            target="_blank"
          >
            Mohsin Ali
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
