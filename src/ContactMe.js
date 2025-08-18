import './App.css';


//Code For The Contact Page, With The Text That Is Displayed On The Page
function ContactMe(){
    return (
        <div className="app-contact">

            <h1>
                Ways to contact me
            </h1>

            <div className="contact-text">

                <div className="contact-sub">
                    Personal Email (Preferred):
                </div>

                <a href="mailto:tasopagiatakis@gmail.com?body=My custom mail body" className='mail-to'>
                    tasopagiatakis@gmail.com
                </a>
            </div>

            <div className="contact-text">

                <div className="contact-sub">
                    School Email:
                </div>

                <a href="mailto:ajpagiatakis@wpi.edu?body= " className='mail-to'>
                ajpagiatakis@wpi.edu
                </a>
            </div>

            <div>
                Please contact me if you have interest in any of the projects, me, or have any suggestions on improvements for the site!
            </div>
            
        </div>
    );
}

export default ContactMe