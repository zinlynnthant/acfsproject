const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeButton = document.querySelector(".close");

function showModal(id) {
  let content = "";
  switch (id) {
    case "university1":
      content = `
        <h2>Burma Academy</h2>
        <p>How we partner: Academy Federal School (ACFS), with over 6000 students from elementary to high school, has teamed up with Burma Academy to enhance its educational offerings. Burma Academy specializes in language, programming, and other courses designed to boost students' skills. This collaboration integrates specialized courses into ACFS's curriculum, providing practical skill development across different fields. Burma Academy's expertise ensures high-quality education aligned with industry standards, offering internships and practical training opportunities. ACFS is committed to adapting its programs to meet students' evolving needs, aiming to empower them for success in academic and professional pursuits alongside Burma Academy.</p>
        <p>Contact: www.burma.ac</p>
      `;
      break;
    case "university2":
      content = `
        <h2>Dugga</h2>
        <p>How we partner: Dugga provides an innovative assessment platform that integrates seamlessly with ACFS's digital learning environment. This collaboration focuses on enhancing the assessment process, making it more interactive and efficient. Dugga's platform supports various question types, automated grading, and detailed analytics, helping teachers to better understand student performance and adapt their teaching strategies accordingly. This partnership emphasizes personalized learning experiences, promoting student engagement and academic excellence through advanced assessment techniques.</p>
        <p>Contact: www.dugga.com</p>
      `;
      break;
    case "activity1":
      content = `
        <h2>Music Production</h2>
        <p>Description: Our music production activity allows students to explore their musical talents, learn about different aspects of music creation, and produce their own tracks. This activity includes lessons on songwriting, audio engineering, and digital production techniques. Students have access to professional-grade equipment and software, providing a hands-on experience in the music industry. Regular workshops with guest artists and industry professionals offer insights and inspiration, helping students to develop their unique sound and artistic vision.</p>
      `;
      break;
    case "activity2":
      content = `
        <h2>World Teachers Day</h2>
        <p>Description: World Teachers Day is an annual event celebrating the contributions and achievements of teachers worldwide. At ACFS, this day is marked with various activities, including special assemblies, awards for outstanding teachers, and student performances. The event aims to show appreciation for the hard work and dedication of our educators, highlighting their crucial role in shaping the future of our students. It also provides an opportunity for the community to come together and support the ongoing development of our teaching staff.</p>
      `;
      break;
    case "activity3":
      content = `
        <h2>7th July Day</h2>
        <p>Description: 7th July Day commemorates a significant historical event and is observed with a range of educational and cultural activities. Students participate in themed projects, presentations, and discussions, fostering a deeper understanding of the event's importance and its impact on our society. The day also features exhibitions, guest speakers, and interactive workshops, encouraging students to engage with history in a meaningful and reflective manner. This activity promotes historical awareness and civic responsibility among our students.</p>
      `;
      break;
    case "activity4":
      content = `
        <h2>CDM Students & Future Education Seminar</h2>
        <p>Description: The CDM Students & Future Education Seminar is a forum for discussing current trends and future directions in education. It brings together students, educators, industry experts, and policymakers to share insights and ideas. The seminar covers topics such as innovative teaching methods, the role of technology in education, and strategies for preparing students for the evolving job market. Participants have the opportunity to network, collaborate, and explore new approaches to learning and development, contributing to the advancement of educational practices at ACFS.</p>
      `;
      break;
    case "activity5":
      content = `
        <h2>Earth Day</h2>
        <p>Description: Earth Day is celebrated at ACFS with various eco-friendly activities and initiatives aimed at raising environmental awareness. Students participate in tree planting, recycling drives, and clean-up campaigns, learning about the importance of sustainability and conservation. The event also includes educational sessions on topics such as climate change, renewable energy, and biodiversity. Through hands-on projects and community involvement, Earth Day encourages students to take active steps in protecting our planet and promoting environmental stewardship.</p>
      `;
      break;
    case "activity6":
      content = `
        <h2>Others</h2>
        <p>Description: In addition to our regular activities, ACFS organizes a variety of events and programs throughout the year to enrich the student experience. These include cultural festivals, sports tournaments, science fairs, and community service projects. Each activity is designed to foster personal growth, teamwork, and a sense of community among students. By offering a diverse range of opportunities, we aim to support the holistic development of our students, helping them to discover their passions and achieve their full potential.</p>
      `;
      break;
    case "alumni1":
      content = `
        <h2>202204451</h2>
        <p>Nickname: Ethan</p>
        <p>Attended: G10, Alpha-7, B2, 2022-23 Academic Year</p>
        <p>Currently: Computer Science at Harvard University</p>
        <p>Contact: zinmintun20060221@gmail.com</p>
      `;
      break;
    case "alumni2":
      content = `
        <h2>202204444</h2>
        <p>Nickname: Dania</p>
        <p>Attended: G10, Alpha-7, B2, 2022-23 Academic Year</p>
        <p>Currently: Computer Science at University of Tokyo</p>
        <p>Contact: danialzinc@gmail.com</p>
      `;
      break;
    case "alumni3":
      content = `
        <h2>202207866</h2>
        <p>Nickname: EPK</p>
        <p>Attended: G10, Alpha-7, B2, 2022-23 Academic Year</p>
        <p>Currently: Environmental Science at University of Melbourne</p>
        <p>Contact: epkkkkkk@gmail.com</p>
      `;
      break;
    case "alumni4":
      content = `
        <h2>202207878</h2>
        <p>Nickname: Erwin Walker</p>
        <p>Attended: G10, Alpha-7, B2, 2022-23 Academic Year</p>
        <p>Currently: Business Administration at University of British Columbia</p>
        <p>Contact: erika786754@gmail.com</p>
      `;
      break;
    case "alumni5":
      content = `
        <h2>202204378</h2>
        <p>Nickname: Mitsuki</p>
        <p>Attended: G11, Room-9, B2, 2022-23 Academic Year</p>
        <p>Currently: Engineering at National University of Singapore (NUS)</p>
        <p>Contact: mitsuki.tartar006@gmail.com</p>
      `;
      break;
    case "alumni6":
      content = `
        <h2>202204299</h2>
        <p>Nickname: Mary May</p>
        <p>Attended: G11, Room-9, B2, 2023-24 Academic Year</p>
        <p>Currently: International Relations at Seoul National University</p>
        <p>Contact: marymay.virus@gmail.com</p>
      `;
      break;
    case "alumni7":
      content = `
          <h2>202204319</h2>
          <p>Nickname: Akira</p>
          <p>Attended: G11, Room-9, B2, 2023-24 Academic Year</p>
          <p>Currently: Law at University of Cambridge</p>
          <p>Contact: akirawantable@gmail.com</p>
        `;
      break;
    case "alumni8":
      content = `
            <h2>202204307</h2>
            <p>Nickname: BPK</p>
            <p>Attended: G11, Room-9, B2, 2023-24 Academic Year</p>
            <p>Currently: Mechnical Engineering at Techinal University of Munich</p>
            <p>Contact: roryjake110bpk@gmail.com</p>
          `;
      break;
    case "alumni9":
      content = `
            <h2>2023001582</h2>
            <p>Nickname: Nway Oo Moe</p>
            <p>Attended: G12, Room-8, B2, 2024-25 Academic Year</p>
            <p>Currently: Public Health at University of Cape Town</p>
            <p>Contact: moems778@gmail.com</p>
          `;
      break;
    case "alumni10":
      content = `
            <h2>2023000163</h2>
            <p>Nickname: Yolanda</p>
            <p>Attended: G12, Room-8, B2, 2024-25 Academic Year</p>
            <p>Currently: Sociology at University of Delhi</p>
            <p>Contact: sleepy.ynmd@gmail.com</p>
          `;
      break;
  }

  modalBody.innerHTML = content;
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

window.onkeydown = function (event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach(function (item) {
    item.addEventListener("click", function () {
      const itemId = item.getAttribute("data-id");
      showModal(itemId);
    });
  });

  closeButton.addEventListener("click", closeModal);
});

// Add your existing JavaScript here

// Alumni Gallery Scroll
function scrollAlumni(direction) {
  const gallery = document.querySelector(".alumni-gallery");
  const scrollAmount = gallery.clientWidth / 3;
  gallery.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function () {
  const countUpOptions = {
    duration: 2, // Duration of the count up animation
    useGrouping: true, // Use grouping (1,000 instead of 1000)
    separator: ",", // Separator for thousands
  };

  const countElements = document.querySelectorAll(".count-up");
  countElements.forEach((el) => {
    const count = parseInt(el.getAttribute("data-count"), 10);
    const countUp = new CountUp(el.id, count, countUpOptions);
    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }
  });

  // Toggle navbar collapse
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navbarToggler.addEventListener("click", function () {
    navbarCollapse.classList.toggle("show");
  });
});
