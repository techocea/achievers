//home page images`s links
import Aflag from "../assets/flags/usa-flag.jpg";
import Cflag from "../assets/flags/canada-flag.jpg";
import Ukflag from "../assets/flags/UK-flag.jpg";
import Usaflag from "../assets/flags/usa-flag.jpg";
import irish from "../assets/flags/irish-flag.jpg";
import Itflag from "../assets/flags/italian-flag-.png";

//university logos
import rmit from "../assets/universityLogos/rmit.png";
import deakin from "../assets/universityLogos/deakin.png";
import monash from "../assets/universityLogos/monash.png";
import greenwich from "../assets/universityLogos/greenwich.png";

//import service icons
import { FaUniversity } from "react-icons/fa";
import { FaPassport } from "react-icons/fa";
import { MdOutlineAirplaneTicket } from "react-icons/md";
import { ImHome } from "react-icons/im";
import { FaUserFriends } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";

//import service 3d images
import admission from "../assets/serviceImages/admission.svg";
import passport from "../assets/serviceImages/passport.svg";
import ticket from "../assets/serviceImages/ticket.svg";
import scholarship from "../assets/serviceImages/scholarship.svg";
import health from "../assets/serviceImages/health.png";
import accomodation from "../assets/serviceImages/accomodation.svg";

export {
  rmit,
  deakin,
  monash,
  greenwich,
  Itflag,
  Aflag,
  Cflag,
  Ukflag,
  Usaflag,
  irish,
};

export const Menu = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Study Destinations",
    path: "/study-destinations",
  },
  {
    id: 5,
    name: "Financial",
    path: "/financial",
  },
  {
    id: 6,
    name: "Apply Now",
    path: "/register",
  },
];
export const Countries = [
  {
    id: 1,

    heading: "Why Study In Ireland",
    country: "Ireland",
    details:
      "In recent years, Ireland has become an increasingly popular destination for international students, offering high-quality education and a variety of academic options. The country is home to prestigious universities, not only in Europe but around the world. Here is a comprehensive guide for you to consider when contemplating studying in Ireland.",
    advantage: "Top Reasons to Study in Ireland",
    advantageLists: [
      {
        title:
          "Here are some of the main reasons for international students to study in Ireland:",
        title1: "Best Courses to Study in Ireland:",
        title2: "Top Universities in Ireland:",
        description:
          "Ireland is widely known for being an education hub of Europe and is home to impressive universities which feature in various global rankings.",
        points: [
          "The colleges and universities in Ireland conduct their classes, programs, and courses in English, allowing international students to study comfortably.",
          "Ireland is renowned for its friendly culture, rich history, and beautiful landscapes, providing a delightful experience for students during their studies.",
          "The country has a strong focus on research and development, fostering a conducive environment for scientific advancements.",
        ],
        courses: [
          "Study Business in Ireland",
          "Study Computer Science in Ireland",
          "Study Medicine in Ireland",
          "Study Arts and Humanities in Ireland",
          "Study Law in Ireland",
          "Study Engineering in Ireland",
          "Study Environmental Science in Ireland",
        ],
        universities: [
          "University College Dublin (UCD)",
          "Trinity College Dublin",
          "University of Limerick (UL)",
          "National University of Ireland, Galway (NUIG)",
          // Add more universities as needed
        ],
      },
    ],
  },

  {
    id: 2,

    heading: "Why Study In Italy",
    country: "Italy",
    details:
      "In recent years, Italy has become increasingly popular among international students. They go to the country to take advantage of its high standard of education and multiple academic options that are available. Universities in Italy are some of the most prestigious universities, not only in Europe but also all around the world. Here is the complete guide for you to know about studying in Italy.",
    advantage: "Top Reasons to Study in Italy",
    advantageLists: [
      {
        title:
          "Here are some of the main reasons for international students to study in Italy:",
        title1: "Best Courses to Study in Italy:",
        title2: "Top Universities in Italy:",
        description:
          "Italy is widely known for being an education hub of Europe and is home to impressive universities which feature in the QS World University Rankings 2022. ",
        points: [
          "The colleges and universities in Italy conduct their classes, programs, and courses in English also. This means international students can now study in any of the universities in Italy even if their Italian is decent or poor.",
          "Italy is popular for its food, fashion, and football. An international student who wants to study abroad in Italy will get plenty of options to enjoy his or her stay in the country, along with working hard for building a bright future.",
          "Italy has built a large number of scientists and researchers. It has one of the best infrastructures for research and development.",
        ],
        courses: [
          "Study Architecture in Italy",
          "Study art in Italy",
          "Study medicine in Italy",
          "Study Social Science & Humanities in Italy",
          "Study law in Italy",
          "Study Product Designing in Italy",
          "Study Engineering in Italy",
        ],
        universities: [
          "Politecnico di Milano",
          "Alma Mater Studiorum - University of Bologna",
          "Sapienza University of Rome",
          "Università di Padova",
          "University of Milan",
          "Politecnico di Torino",
          "University of Pisa",
          "Università Vita-Salute San Raffaele",
          "University of Naples - Federico II",
          "University of Trento",
        ],
      },
    ],
  },
];
export const Finances = {
  array: [
    {
      id: 1,
      title: "Student Loans",
      description:
        "Investing in education is an investment in your future. Our student loan options are tailored to meet your unique needs, offering competitive interest rates and flexible repayment plans. Whether you're pursuing undergraduate or postgraduate studies, we're here to provide the financial support you need to focus on your education",
      features: "Key Features",
      points: [
        "Low-interest rates",
        "Flexible repayment terms",
        "Quick and hassle-free application process",
        "Dedicated support team to guide you through the loan journey",
      ],
    },
    {
      id: 2,
      title: "Bank Finance Balance",
      description:
        "Managing your finances is a crucial aspect of student life. Our Bank Finance Balance service ensures that you have a clear understanding of your financial standing. Easily access information about your account balances, transactions, and more, all in one convenient location.",
      features: "Features and Benefits",
      points: [
        "Real-time balance updates",
        "Transaction history at your fingertips",
        "Secure and user-friendly online banking platform",
        "Personalized financial insights to help you make informed decisions",
      ],
    },
  ],
  additionalArray: [
    {
      topic: "Commitment to Education",
      icon: FaUserGraduate,
      description:
        "We understand the importance of education in shaping your future. Our student loan options reflect our dedication to supporting students in their academic endeavors.",
    },
    {
      topic: "Transparent Banking",
      icon: BsBank,
      description:
        "Our team is committed to providing personalized support throughout your financial journey. Whether you have questions about student loans or need assistance with online banking, we're here to help.",
    },
    {
      topic: "Personalized Support",
      icon: FaUserFriends,
      description:
        "Our team is committed to providing personalized support throughout your financial journey. Whether you have questions about student loans or need assistance with online banking, we're here to help.",
    },
  ],
};
export const Universities = [
  {
    id: 2,
    name: "University rmit",
    imageUrl: rmit,
    websiteUrl: "https://www.rmit.edu.au/",
  },
  {
    id: 3,
    name: "University deakin",
    imageUrl: deakin,
    websiteUrl: "https://www.deakin.edu.au/",
  },
  {
    id: 9,
    name: "University monash",
    imageUrl: monash,
    websiteUrl: "https://www.monash.edu/",
  },
  {
    id: 12,
    name: "University greenwich",
    imageUrl: greenwich,
    websiteUrl: "https://www.gre.ac.uk/",
  },
];
export const UKBenefits = [
  {
    id: 1,
    point: "Global recognition",
    answer:
      "UK degrees are globally recognized and respected by employers and academic institutions. A qualification from a UK university can enhance your career prospects and open doors to opportunities worldwide.",
  },
  {
    id: 2,
    point: "World-renowned universities",
    answer:
      "The UK is home to some of the world's top-ranking universities, known for their academic excellence, cutting-edge research, and high-quality teaching.",
  },
  {
    id: 3,
    point: "Diverse range of programs",
    answer:
      "UK universities offer a wide variety of programs, ensuring that students can find courses that suit their interests and career goals. The flexibility of the education system allows students to tailor their degrees to their specific needs.",
  },
  {
    id: 4,
    point: "Multicultural environment",
    answer:
      "Studying in the UK provides a chance to experience a diverse and multicultural environment. Students from different backgrounds and nationalities come together, fostering cultural exchange and a global perspective.",
  },
  {
    id: 5,
    point: "English language proficiency",
    answer:
      " As English is the primary language of instruction, studying in the UK can significantly improve your English language skills. This is advantageous for future employment and communication in an increasingly globalized world.",
  },
  {
    id: 6,
    point: "Internship and work opportunities",
    answer:
      "The UK offers excellent opportunities for internships, work placements, and part-time jobs during studies. This provides students with practical experience, enhancing their employability upon graduation.",
  },
];
export const USABenefits = [
  {
    id: 1,
    point: "Global recognition",
    answer:
      "The degrees earned by international students in the USA enjoy unparalleled recognition across the globe. This recognition underscores the nation's commitment to upholding rigorous academic standards, equipping graduates to excel not only in their respective fields but also on an international stage. ",
  },
  {
    id: 2,
    point: "Diverse and Inclusive Environment",
    answer:
      "The appeal of studying in the USA lies in its mosaic of cultures and environments. Vibrant cities and serene campuses alike embrace students from around the world, fostering an inclusive atmosphere that encourages intercultural exchanges and personal growth.",
  },
  {
    id: 3,
    point: "Cultural Exchange",
    answer:
      "Beyond the confines of textbooks and lecture halls, studying in the USA offers a chance to engage in cultural exchange firsthand. From events celebrating global diversity to student clubs representing various traditions, international students find ample avenues to share their heritage while embracing new ones",
  },
  {
    id: 4,
    point: "Internship and work opportunities",
    answer:
      "The USA offers excellent opportunities for internships, work placements, and part-time jobs during studies. This provides students with practical experience, enhancing their employability upon graduation.",
  },
  {
    id: 5,
    point: "Support for International Students",
    answer:
      " As English is the primary language of instruction, studying in the USA can significantly improve your English language skills. This is advantageous for future employment and communication in an increasingly globalized world.",
  },
  {
    id: 6,
    point: "Internship and work opportunities",
    answer:
      "American institutions recognise the unique challenges that international students face when studying abroad. To ensure a seamless transition and holistic growth, universities in the USA offer a comprehensive network of support services. From tailored orientation programs to specialised career guidance, these services pave the way for a successful academic and personal journey.",
  },
];
export const CanadaBenefits = [
  {
    id: 1,
    point: "World-Class Education",
    answer:
      "Canadian qualifications are universally revered, making studying in Canada a coveted opportunity for those seeking a top-tier education. Whether students are considering scholarships to study in Canada or looking at the requirements to study in Canada for international students ",
  },
  {
    id: 2,
    point: "Value for Money",
    answer:
      "One of the most attractive aspects of study in Canada is its balance between quality education and affordability, which is particularly advantageous for international students.",
  },
  {
    id: 3,
    point: "Cultural Exchange",
    answer:
      "Beyond the confines of textbooks and lecture halls, studying in the Canada offers a chance to engage in cultural exchange firsthand. From events celebrating global diversity to student clubs representing various traditions, international students find ample avenues to share their heritage while embracing new ones",
  },
  {
    id: 4,
    point: "Internship and work opportunities",
    answer:
      "The Canada offers excellent opportunities for internships, work placements, and part-time jobs during studies. This provides students with practical experience, enhancing their employability upon graduation.",
  },
  {
    id: 5,
    point: "Support for International Students",
    answer:
      " As English is the primary language of instruction, studying in the Canada can significantly improve your English language skills. This is advantageous for future employment and communication in an increasingly globalized world.",
  },
  {
    id: 6,
    point: "Internship and work opportunities",
    answer:
      "Canadian institutions recognise the unique challenges that international students face when studying abroad. To ensure a seamless transition and holistic growth, universities in the Canada offer a comprehensive network of support services. From tailored orientation programs to specialised career guidance, these services pave the way for a successful academic and personal journey.",
  },
];
export const AustraliaBenefits = [
  {
    id: 1,
    point: "Global recognition",
    answer:
      "Degrees earned from Australian institutions carry significant global recognition and prestige. Graduates are highly sought-after by employers worldwide, providing them with a competitive edge in their chosen career paths.",
  },
  {
    id: 2,
    point: "Practical Learning",
    answer:
      "Australian universities prioritise practical learning, offering students hands-on training, workshops, internships, and fieldwork opportunities. This approach ensures graduates are equipped with real-world skills and experiences, enhancing their employability in competitive job markets.",
  },
  {
    id: 3,
    point: "Diverse range of programs",
    answer:
      "Australia's vibrant multicultural environment allows students to celebrate diverse cultural festivals, interact with people from various ethnic backgrounds, and engage in enriching cultural experiences. ",
  },
  {
    id: 4,
    point: "Flexible Courses",
    answer:
      "Australian institutions offer a wide array of courses across different disciplines. Students have the flexibility to choose from a diverse range of subjects and even design their own course structures based on their interests and career goals.",
  },
  {
    id: 5,
    point: "Support Systems",
    answer:
      "Recognizing the unique challenges faced by international students, Australian universities provide dedicated support services. These services assist students in their academic journey, mental health, and integration into the Australian way of life, ensuring a smooth and enriching experience while studying abroad.",
  },
  {
    id: 6,
    point: "Internship and work opportunities",
    answer:
      "Australian institutions recognise the unique challenges that international students face when studying abroad. To ensure a seamless transition and holistic growth, universities in the Australia a comprehensive network of support services. From tailored orientation programs to specialised career guidance, these services pave the way for a successful academic and personal journey.",
  },
];
export const ServiceData = [
  {
    id: 1,
    heading: "Admission Guidance",
    icon: FaUniversity,
    bgColor: "#FEC5E4",
    image: admission,
    description:
      "Our skilled counselors will guide you through the university admission process, applying on your behalf and securing the offer letter. We'll assist with fee payment and provide the necessary visa application documentation once you receive the offer letter.",
  },
  {
    id: 2,
    heading: "Visa Assistance",
    icon: FaPassport,
    bgColor: "#FFF9CD",
    image: passport,
    description:
      "Our visa officers will guide you through the application process step by step. Receive a checklist, prepare your documents, and upon completion, we'll apply for your visa.",
  },

  {
    id: 4,
    heading: "Air Tickets",
    icon: MdOutlineAirplaneTicket,
    bgColor: "#ABEFFE",
    image: ticket,
    description:
      "We can assist you in purchasing air tickets to your desired destination at special rates through reputable travel agents. Get the best price with us!",
  },
  {
    id: 6,
    heading: "Accommodation",
    icon: ImHome,
    bgColor: "#FFF9CD",
    image: accomodation,
    description:
      "At Negombo Smart Achievers, we simplify your move to a new country. Once your visa is approved, our dedicated team will assist you in finding accommodation for a smooth and hassle-free transition.",
  },

  {
    id: 8,
    heading: "Scholarship Guidance",
    icon: ImHome,
    bgColor: "#CDC6FF",
    image: scholarship,
    description:
      "As a premier institute dedicated to empowering ambitious learners, we specialize in navigating the vast array of scholarship options available to aspiring students. Our mission is to illuminate the path towards academic excellence, financial accessibility, and global education.",
  },
  {
    id: 9,
    heading: "Health Insurance",
    icon: ImHome,
    bgColor: "#FFF9CD",
    image: health,
    description:
      "Student`s Health Insurance is a vital component of our comprehensive support system for students studying abroad. It's designed to safeguard the well-being of our students during their academic journey in a foreign country.",
  },
];
