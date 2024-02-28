// Homepage.js
import React from 'react';
import './styleshome.css'; // Import your CSS file

const Homepage = () => {
    return (
        <div>
            <header className="header">
                <a href="/homepage"><img id="logo" src="/images/logo_text.png" alt="Company Logo" width="10px" height="auto" /></a>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="/home">Profile</a></li>
                    </ul>
                    
                </nav>
            </header>

            <div className="container">
                <img width="1000" height="550" src="/images/bg.jpg" className="slider-11938 slide-11952" alt="Customer Learning solution" decoding="async" loading="lazy" rel="" title="Jan-08-Banner" style={{ margin: "0 auto", width: "100%" }} srcSet="/images/bg.jpg" />
                <div className="text-center"><h1>“Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world.”</h1></div>
            </div>

            <div className="About">
                <center>
                    <h2>ABOUT US</h2>
                    <br></br>

                    <p>Since 1991, Edutech is a leading provider of World Class educational equipments, digital learning solutions and services for academic institutions, corporates & government initiatives.</p>
                </center>
            </div>
<br></br>
<br></br>
            <div className="courses">
                <h1>Courses</h1>
            </div>

            <div className="course-container">
            <article class="course-card course card--primary">
                <div class="course-card_banner">
                    Most popular
                </div>
                <h3>Web Development</h3>
                <div>Advanced  knowledge of full stack development</div>
                <div class="course-card__price--original"><s>$110</s></div>
                <div class="course-card__price">$93.6</div>
                <div class="period">/ month</div>
                <ul>
                    <li>All features of the Web development course</li>
                </ul>
                <a href="#" class="enroll">Choose Web Development</a>
            </article>
            <article class="course-card course card--primary">
                <div class="course-card_banner">
                    Highly in Demand
                </div>
                <h3>Web Development</h3>
                <div>Advanced  knowledge of full stack development</div>
                <div class="course-card__price--original"><s>$110</s></div>
                <div class="course-card__price">$93.6</div>
                <div class="period">/ month</div>
                <ul>
                    <li>All features of the Web development course</li>
                </ul>
                <a href="#" class="enroll">Choose Web Development</a>
            </article>
            <article class="course-card course card--primary">
                <div class="course-card_banner">
                    Most popular
                </div>
                <h3>Web Development</h3>
                <div>Advanced  knowledge of full stack development</div>
                <div class="course-card__price--original"><s>$110</s></div>
                <div class="course-card__price">$93.6</div>
                <div class="period">/ month</div>
                <ul>
                    <li>All features of the Web development course</li>
                </ul>
                <a href="#" class="enroll">Choose Web Development</a>
            </article>
            </div>

            <div className="signup">
                <form method="get">
                    <div className="form-title"><h1>Book Mentor</h1></div>
                    <label htmlFor="name">Name :
                        <input type="text" name="name" id="name" placeholder="Enter your Name" required />
                    </label>
                    <br />
                    <label htmlFor="mb-num">Mobile Number :
                        <input type="text" name="number" id="mb-num" placeholder="Mobile number" required />
                    </label>
                    <br />
                    <label htmlFor="email">Email-id :
                        <input type="email" name="email" id="email" placeholder="Email-id" required />
                    </label><br />
                    <button type="submit" id="bookMentorBtn">Book Mentor</button>
                </form>
            </div>

            <script>
                {`
                    document.getElementById("bookMentorBtn").addEventListener("click", function(event){
                        event.preventDefault();
                        alert("Thank you for booking a mentor!");
                        setTimeout(function(){
                            location.reload(); 
                        }, 500); 
                    });
                `}
            </script>
        </div>
    );
};

export default Homepage;
