AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Studies Engineer",
    cardImage: "assets/images/experience-page/car.webp",
    place: "NOMADE ENGINEERING",
    time: "(Mar, 2021 - present)",
    desp: "<li>Tested car prototypes and identify any potential problems</li><li>Design and implementation of a new canister model in matlab</li><li>Development With VBA and C</li>",
  },
  {
    title: "Project Graduation",
    cardImage: "assets/images/experience-page/ai.webp",
    place: "LafargeHolcime Meknes",
    time: "(Mars 2021 - july 2021)",
    desp: "<li>Tower simulation solidworks flow</li><li>Development of a predictive model based on deep learning</li><li>Development of bot to send sms alerts and call in case of failure</li><li>Dashboard creation to compare actual and predicted values</li>",
  },
  {
    title: "Technical Internship",
    cardImage: "assets/images/experience-page/renewable.jpeg",
    place: "GIE Ghriss Frekla Amagha",
    time: "(July 2020 - august 2020)",
    desp: "<li>Design study of a solar energy system</li><li>Electronic board programming for solar pumping automation</li><li>Implementation of energy audit</li>",
  },
  {
    title: "Introductory training",
    cardImage: "assets/images/experience-page/flipkart.jpeg",
    place: "Omaamr",
    time: "(July 2019 - august 2019)",
    desp: "<li>Vehicle diagnostics</li><li>Calculator Flash</li><li>Key chip programming</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "C",
    cardImage: "assets/images/experience-page/c.png",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "C++",
    cardImage: "assets/images/experience-page/c++.png",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "HTML/CSS",
    cardImage: "assets/images/experience-page/html.png",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Python",
    cardImage: "assets/images/experience-page/python.png",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
  {
    title: "JavaScript",
    cardImage: "assets/images/experience-page/javascriptpng.png",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
  {
    title: "Dart",
    cardImage: "assets/images/experience-page/dart.png",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
 {
    title: "Vusial studio code",
    cardImage: "assets/images/experience-page/vs_code.png",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
  {
    title: "Flutter",
    cardImage: "assets/images/experience-page/flutter.png",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
  {
    title: "Matlab",
    cardImage: "assets/images/experience-page/matlab.png",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
  {
    title: "Xcode",
    cardImage: "assets/images/experience-page/xcode.png",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
  {
    title: "Android Studio",
    cardImage: "assets/images/experience-page/android.webp",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Solana Hackathon",
    subtitle: "Devloper",
    image: "assets/images/experience-page/solana.jpeg",
    desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="https://solana.com/news/solana-riptide-announcement" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
