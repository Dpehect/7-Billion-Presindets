export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Address */}
          <div className="footer-section">
            <h4>Address</h4>
            <p>
              Stichting 7 Billion Presidents<br />
              Van Oldenbarneveldtplein 9-iv<br />
              1052 JK Amsterdam<br />
              Netherlands
            </p>
          </div>

          {/* Legal Documents */}
          <div className="footer-section">
            <h4>Legal Documents</h4>
            <ul>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Policy Plan</a></li>
              <li><a href="#">Annual Report 2023</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact</h4>
            <p>
              <strong>Outreach:</strong><br />
              <a href="mailto:outreach@7billionpresidents.org">outreach@7billionpresidents.org</a><br /><br />
              <strong>Tel:</strong><br />
              <a href="tel:+31618514360">+31 6 18 51 43 60</a><br /><br />
              <strong>Internship:</strong><br />
              <a href="mailto:internship@7billionpresidents.org">internship@7billionpresidents.org</a>
            </p>
          </div>

          {/* Bank Info */}
          <div className="footer-section">
            <h4>Bank Info</h4>
            <p>
              <strong>Account Holder:</strong><br />
              Stichting 7 Billion Presidents<br /><br />
              <strong>IBAN:</strong><br />
              NL93 TRIO 0320 2820 82<br /><br />
              <strong>RSIN:</strong><br />
              861877202
            </p>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="footer-bottom">
          <div className="social-links">
            <a href="https://www.facebook.com/7BillionPresidents/" target="_blank" rel="noopener noreferrer" title="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/company/7-billion-presidents/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.youtube.com/@7billionpresidents" target="_blank" rel="noopener noreferrer" title="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.instagram.com/7billionpresidents/" target="_blank" rel="noopener noreferrer" title="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://t.me/+Aj-bRhQGCLU0OWQ0" target="_blank" rel="noopener noreferrer" title="Telegram">
              <i className="fab fa-telegram"></i>
            </a>
          </div>
          <p>&copy; 2024 7 Billion Presidents. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
