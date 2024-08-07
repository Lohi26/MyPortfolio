document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler.getAttribute('aria-expanded') === 'true') {
            navbarToggler.click();
        }
    });
});
const contents = document.querySelectorAll('.about-me');
    contents.forEach(content => {
        const text = content.innerHTML.trim();
        content.innerHTML = '';
        let index = 0;
        const typingSpeed = 40;
        function type() {
            if (index < text.length) {
                content.insertAdjacentHTML('beforeend', text.charAt(index));
                index++;
                setTimeout(type, typingSpeed);
            }
        }
        type();
    });
document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('.display-left').forEach(function(element) {
        const projectCard = element.closest('.project-card');
        const lsElement = projectCard.querySelector('.ls');
        const image = projectCard.querySelector('.project-img');
        let check = projectCard.classList.contains('left-side');
        element.addEventListener('click', function() {
            if (check) {
                lsElement.classList.remove('left-side');
                lsElement.classList.add('ls');
                image.classList.remove('guess-img');
            } else {
                lsElement.classList.add('left-side');
                lsElement.classList.remove('ls');
                image.classList.add('guess-img');
            }
            check = !check;
        });
    });
    document.querySelectorAll('.display-right').forEach(function(element) {
        const projectCard = element.closest('.project-card');
        const lsElement = projectCard.querySelector('.rs');
        let check = projectCard.classList.contains('right-side');
        element.addEventListener('click', function() {
            if (check) {
                lsElement.classList.remove('right-side');
                lsElement.classList.add('rs');
            } else {
                lsElement.classList.add('right-side');
                lsElement.classList.remove('rs');
            }
            check = !check;
        });
    });
})
document.addEventListener('DOMContentLoaded', function() {
    const education = document.querySelector('#education-section');
    const educate = document.querySelector('.education');
    const header = document.querySelector('header'); 

    educate.addEventListener('click', function(e) {
        e.preventDefault(); 
        setTimeout(function() {
            education.innerHTML = `
                <div class="container custom-container01">
        <div class="row">
            <div class="col-md-6">
              <img src="Photos/Education.jpg" class="img-fluid custom-image" alt="Education Image">
            </div>
            <div class="col-md-6">
                <div class="mb-4 box-1 box boxes">
                    <h5 style="z-index: 20;">Secondary School</h5>
                    <h6 style="z-index: 20;">Green Garden Matric Higher Secondary School</h6>
                    <h5 style="z-index: 20;">Percentage: 88.06%</h5>
                </div>
                <div class="mb-4 box-2 box boxes">
                    <h5 style="z-index: 20;">Higher Secondary School</h5>
                    <h6 style="z-index: 20;">Green Garden Matric Higher Secondary School</h6>
                    <h5 style="z-index: 20;">Percentage: 91.06%</h5>
                </div>
                <div class="mb-4 box-3 box boxes">
                    <h5 style="z-index: 20;">BE. Computer Science and Engineering</h5>
                    <h6 style="z-index: 20;">Karpagam College of Engineering</h6>
                    <h5 style="z-index: 20;">CGPA: 8.88</h5>
                </div>
            </div>
        </div>
    </div>
            `;
            education.classList.add('loaded');
            const rect = education.getBoundingClientRect();
            const offset = rect.top + window.scrollY - header.offsetHeight;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
            history.pushState(null, null, '#education-section');
        }, 100); 
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const homeSection = document.querySelector('#home-section');
    const home = document.querySelector('.home');
    const header = document.querySelector('header'); 

    home.addEventListener('click', function(e) {
        e.preventDefault(); 
        setTimeout(function() {
            homeSection.innerHTML = `
                <div class="container custom-container0">
        <div class="box">
          <img src="Photos/port.jpeg" class="img-fluid profile-img" alt="My Photo">
          <p class="about-me">
            I am Lohita, a Computer Science Engineering student at Karpagam College of Engineering. 
            Aspiring to become a Full-Stack web developer, I am passionate about both web and app development. 
            Although my formal education is ongoing, I have already undertaken several mini projects using Front End Technologhies, 
            showcasing my hands-on skills in coding and problem-solving and also to add on theses I have learnt some Programming 
            languages like Java,C and Python with undergone of some exercises. 
            While I have yet to embark on internships, my enthusiasm and commitment drive me to continuously learn and apply my knowledge. 
            Eager to contribute to the tech industry, 
            I am actively seeking opportunities that allow me to further enhance my skills and make a positive impact in the field.
          </p>
        </div>
      </div>
            `;
             const contents = document.querySelectorAll('.about-me');
            contents.forEach(content => {
                const text = content.innerHTML.trim();
                content.innerHTML = '';
                let index = 0;
                const typingSpeed = 40;
                function type() {
                    if (index < text.length) {
                        content.insertAdjacentHTML('beforeend', text.charAt(index));
                        index++;
                        setTimeout(type, typingSpeed);
                    }
                }
                type();
            });
            homeSection.classList.add('loaded');
            const rect = homeSection.getBoundingClientRect();
            const offset = rect.top + window.scrollY - header.offsetHeight;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
            history.pushState(null, null, '#home-section');
        }, 100); 
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const techSection = document.querySelector('#technical-section');
    const technical = document.querySelector('.technical');
    const header = document.querySelector('header'); 

    technical.addEventListener('click', function(e) {
        e.preventDefault(); 
        setTimeout(function() {
            techSection.innerHTML = `
                <div class="container custom-container">
      <div class="row" style="margin-left: 25px;">
          <div class="col-md-4 col-sm-6 mb-5">
              <div class="tech-1" id="tech-1">
                  <img class="img-1" src="Photos/C.jpg" style="z-index: 10;position: relative;">
                  <p style="margin-left: 35px;margin-top: 30px;z-index: 10;position: relative;">C PROGRAMMING</p>
              </div>
          </div>
          <div class="col-md-4 col-sm-6 mb-5">
              <div class="tech-1" id="tech-2">
                <img class="img-1" src="Photos/Java.jpg">
                <p style="margin-left: 25px;margin-top: 30px;">JAVA PROGRAMMING</p>
              </div>
          </div>
          <div class="col-md-4 col-sm-6 mb-5">
              <div class="tech-1" id="tech-3">
                <img class="img-1" src="Photos/py.webp">
                <p style="margin-left: 35px;margin-top: 30px;">PYTHON PROGRAMMING</p>
              </div>
          </div>
          <div class="col-md-4 col-sm-6 mb-5">
              <div class="tech-1" id="tech-4">
                <img class="img im-1" src="Photos/HTML.jpg">
                <img class="img im-2" src="Photos/CSS.jpg">
                <img class="img im-3" src="Photos/JS.jpg">
                <img class="img im-4" src="Photos/boot.png">
                <p style="margin-left: 35px;margin-top: 15px;">HTML, CSS, JS, BOOTSTRAP</p>
              </div>
          </div>
          <div class="col-md-4 col-sm-6 mb-5">
              <div class="tech-1" id="tech-5">
                <img class="img-1" src="Photos/React.jpeg">
                <p style="margin-left: 70px;margin-top: 30px;">REACT</p>
              </div>
          </div>
          <div class="col-md-4 col-sm-6">
              <div class="tech-1" id="tech-6">
                <img class="img-fluid img im-1" src="Photos/Spring Boot.jpeg" style="margin-top: 50px;">
                <img class="img-fluid img im-2" src="Photos/sql.webp" style="margin-top: 50px;">
                <p style="margin-left: 30px;margin-top: 40px;">SPRING BOOT, SQL</p>
              </div>
          </div>
      </div>
    </div>  
            `;
            techSection.classList.add('loaded');
            const rect = techSection.getBoundingClientRect();
            const offset = rect.top + window.scrollY - header.offsetHeight;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
            history.pushState(null, null, '#technical-section');
        }, 100); 
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const certiSection = document.querySelector('#certification-section');
    const certification = document.querySelector('.certification');
    const header = document.querySelector('header'); 

    certification.addEventListener('click', function(e) {
        e.preventDefault(); 
        setTimeout(function() {
            certiSection.innerHTML = `
                <div class="container custom-container2">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-12 mb-5">
          <section id="certifications" class="certifications-section box">
            <div class="certification-grid">
              <div class="certification-card" style="z-index: 20;">
                <div class="certification-front">
                  <img src="Photos/nptel.png" alt="Certification Logo" style="width: 50px;height: 50px;">
                  <p style="font-weight: bolder;">Data Structures and Algorithm using Java</p>
                  <p>NPTEL</p>
                  <p>July 2023</p>
                </div>
                <div class="certification-back">
                  <p>Collections and DS using Java</p>
                  <p>Skills gained: Deep Knowledge in DS using Java</p>
                  <a href="https://github.com/Lohi26/Certifications/blob/main/Data%20Structure%20And%20Algorithms%20Using%20Java%20(1).pdf" target="_blank">View Here</a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="col-lg-4 col-md-6 col-12 mb-5">
          <section id="certifications" class="certifications-section box">
            <div class="certification-grid">
              <div class="certification-card" style="z-index: 20;">
                <div class="certification-front">
                  <img src="Photos/udemy.png" alt="Certification Logo" style="width: 50px;height: 50px;">
                  <p style="font-weight: bolder;">The Complete Web Development Bootcamp</p>
                  <p>UDEMY</p>
                  <p>March 2024</p>
                </div>
                <div class="certification-back">
                  <p>Basic Knowledge in HTML,CSS,JS,REACT</p>
                  <p>Skills gained: Web Development</p>
                  <a href="https://github.com/Lohi26/Certifications/blob/main/The%20Complete%20Web%20Development%20Bootcamp.pdf" target="_blank">View Here</a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="col-lg-4 col-md-6 col-12 mb-5">
          <section id="certifications" class="certifications-section box">
            <div class="certification-grid">
              <div class="certification-card" style="z-index: 20;">
                <div class="certification-front">
                  <img src="Photos/coursera.png" alt="Certification Logo" style="width: 50px;height: 50px;">
                  <p style="font-weight: bolder;">Front-end Development</p>
                  <p>COURSERA</p>
                  <p>March 2024</p>
                </div>
                <div class="certification-back">
                  <p>Deep Knowledge in HTML,CSS and BOOTSTRAP</p>
                  <p>Skills gained: Front-end Development</p>
                  <a href="https://github.com/Lohi26/Certifications/blob/main/Introduction%20to%20front-end%20development.pdf" target="_blank">View Here</a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="col-lg-4 col-md-6 col-12 mb-5">
          <section id="certifications" class="certifications-section box">
            <div class="certification-grid">
              <div class="certification-card" style="z-index: 20;">
                <div class="certification-front">
                  <img src="Photos/udemy.png" alt="Certification Logo" style="width: 50px;height: 50px;">
                  <p style="font-weight: bolder;">Complete JavaScript</p>
                  <p>UDEMY</p>
                  <p>April 2024</p>
                </div>
                <div class="certification-back">
                  <p>Advanced Knowledge in JS and hands on projects</p>
                  <p>Skills gained: DS and Web development using JS</p>
                  <a href="https://github.com/Lohi26/Certifications/blob/main/The%20Complete%20JavaScript%20Course.pdf" target="_blank">View Here</a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="col-lg-4 col-md-6 col-12 mb-5">
          <section id="certifications" class="certifications-section box">
            <div class="certification-grid">
              <div class="certification-card" style="z-index: 20;">
                <div class="certification-front">
                  <img src="Photos/hackerrank.png" alt="Certification Logo" style="width: 50px;height: 50px;">
                  <p style="font-weight: bolder;">HackerRank Certifications</p>
                  <p>HackerRank</p>
                  <p>2023 and 2024</p>
                </div>
                <div class="certification-back">
                  <p>Problem solving test in Java,C,SQL and JS</p>
                  <p>Skills gained: Competitive Programming</p>
                  <a href="https://github.com/Lohi26/Certifications/tree/main/HACKERANK" target="_blank">View Here</a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="col-lg-4 col-md-6 col-12 mb-5">
          <section id="certifications" class="certifications-section box">
            <div class="certification-grid">
              <div class="certification-card" style="z-index: 20;">
                <div class="certification-front">
                  <img src="Photos/workshop.png" alt="Certification Logo" style="width: 50px;height: 50px;">
                  <p style="font-weight: bolder;">Data Science - IIT Chennai </p>
                  <p>Data Science</p>
                  <p>Feb 2024</p>
                </div>
                <div class="certification-back">
                  <p>Basic Knowledge in Data Science</p>
                  <p>Skills gained: Data Science</p>
                  <a href="cert-link.pdf" target="_blank">View Here</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
            `;
            certiSection.classList.add('loaded');
            const rect = certiSection.getBoundingClientRect();
            const offset = rect.top + window.scrollY - header.offsetHeight;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
            history.pushState(null, null, '#certification-section');
        }, 100); 
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const projectSection = document.querySelector('#project-scroll');
    const project = document.querySelector('.project');
    const header = document.querySelector('header');

    project.addEventListener('click', function(e) {
        e.preventDefault();

        // Check if the project section is already loaded
        if (!projectSection.classList.contains('loaded')) {
            // Load content dynamically
            setTimeout(function() {
                projectSection.innerHTML = `
                    <div class="container custom-container3">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-12 mb-5">
          <div class="project-card box" id="tech-1">
            <h4 style="z-index: 20;position: relative;color: black;">Mail Verify Link</h4>
            <div class="slide-left">
              <div class="display-left">
                <i class="fas fa-laptop-house icon i-1" style="color: black;"></i>
              </div>
              <div class="ls">
                <p>Technologies Used:SpringBoot, SMTP mail protocol, Maven, MYSQL database</p>
                <p>"Mail Verify Link" - I have wrapped up a Spring Boot project that was meant to make email notifications and form submissions go more smoothly. Users of this application can fill out a form and submit it; the information through PDF is then sent straight to their email addresses. This project highlights my abilities to create dynamic web applications and my skill at fusing several technologies together to provide a smooth user experience.
                </p>
              </div>
            </div>
            <img src="Photos/maillink.png" class="img-fluid project-img" style="margin-top: 10px;margin-bottom: 10px;z-index: 20;position: relative;">
            <div class="slide-right" style="z-index: 20;position: relative;">
              <div class="rs">
                <p><a href="https://github.com/Lohi26/MailLink" style="color: black;text-decoration: none;">Source Code</a></p>
                <p><a href="https://angelic-passion-production.up.railway.app/" style="color: black;text-decoration: none;">Website Link</a></p>
              </div>
              <div class="display-right">
                <i class="fas fa-laptop-house icon i-2" style="color: black;"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 mb-5">
          <div class="project-card box" id="tech-2">
            <h4 style="z-index: 20;position: relative;color: black;">Financical Application</h4>
            <div class="slide-left">
              <div class="display-left">
                <i class="fas fa-laptop-house icon" style="color: black;"></i>
              </div>
              <div class="ls">
                <p>Technologies Used:HTML, CSS and JavaScript</p>
                <p>I'm thrilled to announce the completion of my "Bankist" project, crafted using HTML, CSS, and JavaScript. This application, built entirely by me during my journey of learning JavaScript from Udemy with Jonas Schmedtmann, features deposit and withdrawal displays, money transfers, loan requests, account closures, and sorting of transactions. It also showcases total bank balances and includes a session timeout for logging out.</p>
              </div>
            </div>
            <img src="Photos/bankist.png" class="img-fluid project-img" style="margin-top: 10px;margin-bottom: 10px;z-index: 20;position: relative;">
            <div class="slide-right" style="z-index: 20;position: relative;">
              <div class="rs">
                <p><a href="https://github.com/Lohi26/Bankist" style="color: black;text-decoration: none;">Source Code</a></p>
                <p><a href="https://bankist-one-roan.vercel.app/" style="color: black;text-decoration: none;">Website Link</a></p>
              </div>
              <div class="display-right">
                <i class="fas fa-laptop-house icon" style="color: black;"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 mb-5">
          <div class="project-card box" id="tech-3">
            <h4 style="z-index: 20;position: relative;color: black;">Digital Resume</h4>
            <div class="slide-left">
              <div class="display-left">
                <i class="fas fa-laptop-house icon i-1" style="color: black;"></i>
              </div>
              <div class="ls">
                <p>Technologies Used:HTML, CSS and JavaScript</p>
                <p>I have crafted my digital resume using HTML, CSS, and JavaScript. This interactive and visually appealing resume showcases my technical skills, projects, and professional experiences. It features animations, hover effects, and dynamic content to enhance the user experience, demonstrating my web development abilities and attention to detail.</p>
              </div>
            </div>
            <img src="Photos/digital.png" class="img-fluid project-img" style="margin-top: 10px;margin-bottom: 10px;z-index: 20;position: relative;">
            <div class="slide-right" style="z-index: 20;position: relative;">
              <div class="rs">
                <p><a href="https://github.com/Lohi26/My_Resume" style="color: black;text-decoration: none;">Source Code</a></p>
                <p><a href="https://my-resume-five-sand.vercel.app/" style="color: black;text-decoration: none;">Website Link</a></p>
              </div>
              <div class="display-right">
                <i class="fas fa-laptop-house icon i-2" style="color: black;"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 mb-5">
          <div class="project-card box" id="tech-4">
            <h4 style="z-index: 20;position: relative;color: black;">Medical Management</h4>
            <div class="slide-left">
              <div class="display-left">
                <i class="fas fa-laptop-house icon i-1" style="color: black;"></i>
              </div>
              <div class="ls">
                <p>Technologies Used:Java, JDBC, MYSQL Driver</p>
                <p>I developed a console-based application utilizing Java, JDBC, and MySQL. This application features robust database connectivity and operations, enabling users to perform tasks such as data insertion, retrieval, updating, and deletion through a command-line interface. It demonstrates my proficiency in Java programming, SQL database management, and the implementation of JDBC for seamless interaction between Java applications and MySQL databases.</p>
              </div>
            </div>
            <img src="Photos/medical.jpg" class="img-fluid project-img" style="margin-top: 10px;margin-bottom: 10px;height: 155px;z-index: 20;position: relative;">
            <div class="slide-right" style="z-index: 20;position: relative;">
              <div class="rs">
                <p><a href="https://github.com/Lohi26/miniproject/tree/main/717821p231" style="color: black;text-decoration: none;">Source Code</a></p>
                <p><a href="https://guess-my-number-gamma-lake.vercel.app/" style="color: black;text-decoration: none;">Website Link</a></p>
              </div>
              <div class="display-right">
                <i class="fas fa-laptop-house icon i-2" style="color: black;"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 mb-5">
          <div class="project-card box" id="tech-5">
            <h4 style="z-index: 20;position: relative;color: black;">Pig Dice Rolling - Game</h4>
            <div class="slide-left">
              <div class="display-left">
                <i class="fas fa-laptop-house icon i-1"  style="color: black;"></i>
              </div>
              <div class="ls">
                <p>Technologies Used:HTML, CSS and JavaScript</p>
                <p>"Pig Dice Rolling" is an interactive web game where two players play a real time dice rolling with certain sort of rules mentinoed.Everything was done using DOM manipulation of JavaScript.</p>
              </div>
            </div>
            <img src="Photos/pig.png" class="img-fluid project-img" style="margin-top: 10px;margin-bottom: 10px;z-index: 20;position: relative;">
            <div class="slide-right" style="z-index: 20;position: relative;">
              <div class="rs">
                <p><a href="https://github.com/Lohi26/Pig_Game" style="color: black;text-decoration: none;">Source Code</a></p>
                <p><a href="https://pig-game-sage-chi.vercel.app/" style="color: black;text-decoration: none;">Website Link</a></p>
              </div>
              <div class="display-right">
                <i class="fas fa-laptop-house icon i-2" style="color: black;"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 mb-5">
          <div class="project-card box" id="tech-6">
            <h4 style="z-index: 20;position: relative;color: black;">Guess My Number - Game</h4>
            <div class="slide-left">
              <div class="display-left">
                <i class="fas fa-laptop-house icon i-1" style="color: black;"></i>
              </div>
              <div class="ls">
                <p>Technologies Used:HTML, CSS and JavaScript</p>
                <p>"Guess My Number" is an interactive web game where players try to guess a randomly generated number within a specified range. Utilizing HTML for structure, CSS for styling, and JavaScript for game logic, it provides real-time feedback on each guess, guiding players to the correct number.</p>
              </div>
            </div>
            <img src="Photos/Guess.png" class="img-fluid project-img" style="margin-top: 10px;margin-bottom: 10px;z-index: 20;position: relative;">
            <div class="slide-right" style="z-index: 20;position: relative;">
              <div class="rs">
                <p><a href="https://github.com/Lohi26/Guess-My-number" style="color: black;text-decoration: none;">Source Code</a></p>
                <p><a href="https://guess-my-number-gamma-lake.vercel.app/" style="color: black;text-decoration: none;">Website Link</a></p>
              </div>
              <div class="display-right">
                <i class="fas fa-laptop-house icon i-2" style="color: black;"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
                `;

                // Add event listeners for the dynamically loaded content
                document.querySelectorAll('.display-left').forEach(function(element) {
                    const projectCard = element.closest('.project-card');
                    const lsElement = projectCard.querySelector('.ls');
                    const image = projectCard.querySelector('.project-img');
                    let check = projectCard.classList.contains('left-side');
                    element.addEventListener('click', function() {
                        if (check) {
                            lsElement.classList.remove('left-side');
                            lsElement.classList.add('ls');
                            image.classList.remove('guess-img');
                        } else {
                            lsElement.classList.add('left-side');
                            lsElement.classList.remove('ls');
                            image.classList.add('guess-img');
                        }
                        check = !check;
                    });
                });
                document.querySelectorAll('.display-right').forEach(function(element) {
                    const projectCard = element.closest('.project-card');
                    const lsElement = projectCard.querySelector('.rs');
                    let check = projectCard.classList.contains('right-side');
                    element.addEventListener('click', function() {
                        if (check) {
                            lsElement.classList.remove('right-side');
                            lsElement.classList.add('rs');
                        } else {
                            lsElement.classList.add('right-side');
                            lsElement.classList.remove('rs');
                        }
                        check = !check;
                    });
                });

                projectSection.classList.add('loaded');
                const rect = projectSection.getBoundingClientRect();
                const offset = rect.top + window.scrollY - header.offsetHeight;
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
                history.pushState(null, null, '#project-scroll');
            }, 100); // Simulated delay for loading (replace with actual loading logic)
        } else {
            // If already loaded, just scroll to the section
            const rect = projectSection.getBoundingClientRect();
            const offset = rect.top + window.scrollY - header.offsetHeight;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
            history.pushState(null, null, '#project-scroll');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const referenceSection = document.querySelector('#reference-section');
    const refere = document.querySelector('.ref');
    const header = document.querySelector('header'); 

    refere.addEventListener('click', function(e) {
        e.preventDefault(); 
        setTimeout(function() {
            referenceSection.innerHTML = `
                <div class="container custom-container4">
      <h3 style="padding: 10px;cursor: pointer;font-size: 30px;" class="begin">&lt;</h3>
      <div class="reference-1">
        <a href="www.linkedin.com/in/lohitacp" class="link">
          <img src="Photos/linkedin.jpg" class="img-fluid linked linkedin" alt="LinkedIn">
        </a>
      </div>
      <div class="reference-2">
        <a href="https://leetcode.com/u/lohita26/" class="code">
          <img src="Photos/leetcode.jpg" class="img-fluid leet leetcode" alt="Leetcode">
        </a>
      </div>
      <div class="reference-3">
        <a href="https://github.com/Lohi26">
          <img src="Photos/github.webp" class="img-fluid git github" alt="GitHub">
        </a>
      </div>
      <div class="reference-4">
        <a href="https://www.codechef.com/users/kce717821p231">
          <img src="Photos/codechef.png" class="img-fluid code codechef" alt="CodeChef">
        </a>
      </div>
      <div class="reference-5">
        <a href="https://my-resume-five-sand.vercel.app/">
          <img src="Photos/resume.jpg" alt="Resume" class="img-fluid resume">
        </a>
      </div>
      <h3 style="padding: 10px;cursor: pointer;font-size: 30px;" class="end">&gt;</h3>
    </div>
            `;
            const start = document.querySelector('.begin');
            const end = document.querySelector('.end');
            const ref3 = document.querySelector('.reference-3');
            let showingLinkedIn = false;
            let showingGithub = false;
            let showingLeetcode = false;
            let showingCodechef = false;
            let showingResume = false;
        
            start.addEventListener('click', function() {
                if (showingGithub) {
                    if(showingLeetcode==false)
                    {
                        ref3.innerHTML = `
                        <a href="https://leetcode.com/u/lohita26/">
                            <img src="Photos/leetcode.jpg" class="img-fluid leet leetcode" alt="Leetcode">
                        </a>`;
                        ref3.querySelector('.leetcode').style.display = 'block';
                        showingGithub = false;
                        showingLeetcode = true;
                    }
                    else
                    {
                        ref3.innerHTML = `
                        <a href="https://www.codechef.com/users/kce717821p231">
                            <img src="Photos/codechef.png" class="img-fluid code codechef" alt="CodeChef">
                        </a>`;
                        ref3.querySelector('.codechef').style.display = 'block';
                        showingGithub = false;
                        showingCodechef = true;
                    }
                }  else if(showingLinkedIn && showingResume==false)
                {
                    console.log("Hello");
                }
                else if (showingCodechef) {
                    ref3.innerHTML = `
                    <a href="https://github.com/Lohi26">
                        <img src="Photos/github.webp" class="img-fluid git github" alt="GitHub">
                    </a>`;
                    ref3.querySelector('.github').style.display = 'block';
                    showingCodechef = false;
                    showingGithub = true;
                } else if (showingLeetcode) {
                    ref3.innerHTML = `
                        <a href="https://www.linkedin.com/in/lohitacp">
                            <img src="Photos/linkedin.jpg" class="img-fluid linked linkedin" alt="LinkedIn">
                        </a>`;
                    ref3.querySelector('.linkedin').style.display = 'block';
                    showingLeetcode = false;
                    showingLinkedIn = true;
                }
                else if(showingResume){
                    ref3.innerHTML = `
                        <a href="https://www.codechef.com/users/kce717821p231">
                            <img src="Photos/codechef.png" class="img-fluid code codechef" alt="CodeChef">
                        </a>`;
                    ref3.querySelector('.codechef').style.display = 'block';
                    showingResume=false;
                    showingCodechef=true;
                } 
                else {
                    ref3.innerHTML = `
                        <a href="https://leetcode.com/u/lohita26/">
                            <img src="Photos/leetcode.jpg" class="img-fluid leet leetcode" alt="Leetcode">
                        </a>`;
                    ref3.querySelector('.leetcode').style.display = 'block';
                    showingLinkedIn = false;
                    showingLeetcode = true;
                }
            });
        
            end.addEventListener('click', function() {
                if (showingResume) {
                    console.log("Hello");
                } else if (showingCodechef) {
                    ref3.innerHTML = `
                        <a href="https://my-resume-five-sand.vercel.app/">
                            <img src="Photos/resume.jpg" alt="Resume" class="img-fluid resume">
                        </a>`;
                    ref3.querySelector('.resume').style.display = 'block';
                    showingCodechef = false;
                    showingResume = true;
                } else if (showingLinkedIn) {
                    ref3.innerHTML = `
                        <a href="https://leetcode.com/u/lohita26/">
                            <img src="Photos/leetcode.jpg" class="img-fluid leet leetcode" alt="Leetcode">
                        </a>`;
                    ref3.querySelector('.leetcode').style.display = 'block';
                    showingLinkedIn = false;
                    showingLeetcode = true;
                }
                else if(showingGithub)
                {
                    ref3.innerHTML = `
                    <a href="https://www.codechef.com/users/kce717821p231">
                        <img src="Photos/codechef.png" class="img-fluid code codechef" alt="CodeChef">
                    </a>`;
                    ref3.querySelector('.codechef').style.display = 'block';
                    showingGithub = false;
                    showingCodechef = true;
                } 
                else {
                    ref3.innerHTML = `
                        <a href="https://github.com/Lohi26">
                            <img src="Photos/github.webp" class="img-fluid git github" alt="GitHub">
                        </a>`;
                    ref3.querySelector('.github').style.display = 'block';
                    showingLeetcode = false;
                    showingGithub = true;
                }
            });
            referenceSection.classList.add('loaded');
            const rect = referenceSection.getBoundingClientRect();
            const offset = rect.top + window.scrollY - header.offsetHeight;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
            history.pushState(null, null, '#education-section');
        }, 100); 
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const start = document.querySelector('.begin');
    const end = document.querySelector('.end');
    const ref3 = document.querySelector('.reference-3');
    let showingLinkedIn = false;
    let showingGithub = false;
    let showingLeetcode = false;
    let showingCodechef = false;
    let showingResume = false;

    start.addEventListener('click', function() {
        if (showingGithub) {
            if(showingLeetcode==false)
            {
                ref3.innerHTML = `
                <a href="https://leetcode.com/u/lohita26/">
                    <img src="Photos/leetcode.jpg" class="img-fluid leet leetcode" alt="Leetcode">
                </a>`;
                ref3.querySelector('.leetcode').style.display = 'block';
                showingGithub = false;
                showingLeetcode = true;
            }
            else
            {
                ref3.innerHTML = `
                <a href="https://www.codechef.com/users/kce717821p231">
                    <img src="Photos/codechef.png" class="img-fluid code codechef" alt="CodeChef">
                </a>`;
                ref3.querySelector('.codechef').style.display = 'block';
                showingGithub = false;
                showingCodechef = true;
            }
        }  else if(showingLinkedIn && showingResume==false)
        {
            console.log("Hello");
        }
        else if (showingCodechef) {
            ref3.innerHTML = `
            <a href="https://github.com/Lohi26">
                <img src="Photos/github.webp" class="img-fluid git github" alt="GitHub">
            </a>`;
            ref3.querySelector('.github').style.display = 'block';
            showingCodechef = false;
            showingGithub = true;
        } else if (showingLeetcode) {
            ref3.innerHTML = `
                <a href="https://www.linkedin.com/in/lohitacp">
                    <img src="Photos/linkedin.jpg" class="img-fluid linked linkedin" alt="LinkedIn">
                </a>`;
            ref3.querySelector('.linkedin').style.display = 'block';
            showingLeetcode = false;
            showingLinkedIn = true;
        }
        else if(showingResume){
            ref3.innerHTML = `
                <a href="https://www.codechef.com/users/kce717821p231">
                    <img src="Photos/codechef.png" class="img-fluid code codechef" alt="CodeChef">
                </a>`;
            ref3.querySelector('.codechef').style.display = 'block';
            showingResume=false;
            showingCodechef=true;
        } 
        else {
            ref3.innerHTML = `
                <a href="https://leetcode.com/u/lohita26/">
                    <img src="Photos/leetcode.jpg" class="img-fluid leet leetcode" alt="Leetcode">
                </a>`;
            ref3.querySelector('.leetcode').style.display = 'block';
            showingLinkedIn = false;
            showingLeetcode = true;
        }
    });

    end.addEventListener('click', function() {
        if (showingResume) {
            console.log("Hello");
        } else if (showingCodechef) {
            ref3.innerHTML = `
                <a href="https://my-resume-five-sand.vercel.app/">
                    <img src="Photos/resume.jpg" alt="Resume" class="img-fluid resume">
                </a>`;
            ref3.querySelector('.resume').style.display = 'block';
            showingCodechef = false;
            showingResume = true;
        } else if (showingLinkedIn) {
            ref3.innerHTML = `
                <a href="https://leetcode.com/u/lohita26/">
                    <img src="Photos/leetcode.jpg" class="img-fluid leet leetcode" alt="Leetcode">
                </a>`;
            ref3.querySelector('.leetcode').style.display = 'block';
            showingLinkedIn = false;
            showingLeetcode = true;
        }
        else if(showingGithub)
        {
            ref3.innerHTML = `
            <a href="https://www.codechef.com/users/kce717821p231">
                <img src="Photos/codechef.png" class="img-fluid code codechef" alt="CodeChef">
            </a>`;
            ref3.querySelector('.codechef').style.display = 'block';
            showingGithub = false;
            showingCodechef = true;
        } 
        else {
            ref3.innerHTML = `
                <a href="https://github.com/Lohi26">
                    <img src="Photos/github.webp" class="img-fluid git github" alt="GitHub">
                </a>`;
            ref3.querySelector('.github').style.display = 'block';
            showingLeetcode = false;
            showingGithub = true;
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const footerSection = document.querySelector('#footer-section');
    const footer = document.querySelector('.contact');
    const header = document.querySelector('header'); 

    footer.addEventListener('click', function(e) {
        e.preventDefault(); 
        setTimeout(function() {
            footerSection.innerHTML = `
                <div class="container" style="background-color: #CCFFFF;">
      <div class="row">
        <div class="col-md-4 col-sm-6 mb-5">
          <h3>Contact Me</h3>
          <form action="#" method="post">
              <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" class="form-control" id="name" name="name" required>
              </div>
              <div class="form-group">
                  <label for="email">Email address</label>
                  <input type="email" class="form-control" id="email" name="email" required>
              </div>
              <div class="form-group">
                  <label for="message">Message</label>
                  <textarea class="form-control" id="message" name="message" rows="3" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <div class="col-md-4 col-sm-6 mb-5">
          <h3>Quick Links</h3>
          <ul class="footer-links">
              <li>
                <a href="#" class="home">Home</a>
              </li>
              <li>
                <a href="https://my-resume-five-sand.vercel.app/">Digital Resume</a>
              </li>
              <li>
                <a href="https://wa.me/1234567890" target="_blank">Contact</a>
              </li>
          </ul>
        </div>
        <div class="col-md-4 col-sm-6 mb-5">
          <h3>Follow Me On</h3>
          <ul class="social-links">
            <li>
              <a href="#">
                <i class="fab fa-twitter" style="color: black;"></i>
              </a>
            </li>
            <li>
              <a href="www.linkedin.com/in/lohitacp">
                <i class="fab fa-linkedin" style="color: black;"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/Lohi26">
                <i class="fab fa-github" style="color: black;"></i>
              </a>
            </li>
          </ul>        
          <h3>Resume</h3>
          <p><a href="https://drive.google.com/file/d/19JoikztLnRqRiZ2atXnczOw5xOSe_bL1/view?usp=drive_link">Download Resume</a></p>
        </div>
      </div>
    </div>
    <div class="container" style="margin-top: 0px;">
      <div class="row">
          <div class="col-md-12 text-center">
              <p>&copy; 2024 Lohita<i class="fas fa-heart" style="color: red;"></i>. A Professional portfolio.</p>
          </div>
      </div>
    </div>
            `;
            footerSection.classList.add('loaded');
            const rect = footerSection.getBoundingClientRect();
            const offset = rect.top + window.scrollY - header.offsetHeight;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
            history.pushState(null, null, '#footer-section');
        }, 100); 
    });
});