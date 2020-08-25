import React, { Component } from 'react';

class Contact extends Component {

    render() {
        return (
            <div className="content" id="contact">
                <div className="sectionHeader">{'//'} Contact</div>
                <div className="contactDisplay">
                    <p>Label matters: jihad@twelvegaugehc.com</p>

                    <p>Distribution/wholesale inquiries:
                    Deathwish Direct, distro@deathwishinc.com</p>

                    <p>Follow us on social media:</p>
                    <ul>
                        <li>Instagram: <a href="https://instagram.com/twelvegaugehc">@twelvegaugehc</a></li>
                        <li>Twitter: <a href="https://twitter.com/twelvegaugehc">@twelvegaugehc</a></li>
                        <li><a href="https://www.facebook.com/tgrex/">Facebook</a></li>
                    </ul>
                    
          </div>
            </div>
        )
    }
}

export default Contact;
