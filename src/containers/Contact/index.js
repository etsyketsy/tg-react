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
                        <li>Instagram:
                            <a
                                href="https://instagram.com/twelvegaugehc"
                                target="_blank"
                            >
                                @twelvegaugehc
                            </a>
                        </li>
                            <li>Twitter:
                                <a href="https://twitter.com/twelvegaugehc"
                                    target="_blank"
                                >
                                    @twelvegaugehc
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/twelvegaugehc"
                                    target="_blank"
                                >
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://music.twelvegaugehc.com/"
                                    target="_blank"
                                >
                                    Bandcamp
                                </a>
                            </li>
                    </ul>
                        <br></br>
                    
          </div>
                </div>
        )
    }
}

export default Contact;
