import React, { useEffect } from "react";
import { USABenefits } from "../../data";
import Button from "../../button/Button";
import ContactMessage from "../../contactMessage/contactMessage";
import usaCover from "../../assets/covers/usaCover.png"
import { Link } from "react-router-dom";
function Usa() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const tableData1 = [
    {
      id: "1",
      point: "Language spoken",
      answer: "English",
    },
    {
      id: "2",
      point: "Cost of study",
      answer: "Varies by University",
    },
    {
      id: "3",
      point: "Source of funding",
      answer: "loans",
    },
    {
      id: "4",
      point: "Exams required",
      answer: "IELTS, TOEFL",
    },
    {
      id: "5",
      point: "Degrees",
      answer: "Undergraduate, Postgraduate, Doctoral",
    },
    {
      id: "6",
      point: "Intakes",
      answer: "Fall and Spring",
    },
  ];
  const tableData2 = [
    {
      id: "1",
      point: "Bachelor’s",
      answer: "USD 20,000 - 35,000",
    },
    {
      id: "2",
      point: "Master’s",
      answer: "USD 25,000 - 40,000",
    },
    {
      id: "3",
      point: "Doctorate",
      answer: "USD 18,000 - 32,000",
    },

  ];

  return (
    <div>
      {/* covers */}
      <div className="relative">
        <div className="h-full">
          <img src={usaCover} alt="usaCover" className="w-full h-auto" />
          <div className="absolute inset-0 bg-[#1F0259] opacity-40"></div>
        </div>
        <div className="absolute left-10 bottom-1/2 leading-[1.8] transform translate-y-1/2 w-1/2">
          <h2 className=" text-white font-bold text-5xl">Your <span className="text-[#1F0259]">dream</span> of studying in <span className="text-[#1F0259]">Australia</span>  is closer than you think!</h2>
          <p className="text-white text-lg font-medium">Learn everything you need to know about studying in the USA and get end to end expert guidance from us.</p>
          <div>
            <Link to="/register">
             <Button subject="Get Started For FREE" />
            </Link>
           
          </div>
        </div>
      </div>
      <nav className="bg-white flex list-none items-center justify-between font-semibold px-12 py-4 w-full shadow-lg shadow-white">
        <li>Why Study In  USA?</li>
        <li>Benefits</li>
        <li>Courses</li>
        <li>Cost</li>
        <li>Requirements</li>
      </nav>
      {/* Why Study In  USA? */}
      <section className="m-12 flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-[#1F0259] font-bold text-2xl">
            Why Study In  USA?
          </h1>
          <p className="text-[#1F0259]">
            Opportunities for growth abound for <span className="font-bold"> studying in the USA,</span> students a nation renowned for its diversity, innovation, and advanced research. Embarking on an educational journey in this vibrant country could prove deeply transformative to countless students from across all corners of the Earth. Every aspect of this land is woven with rich cultural fabrics, unparalleled academic rigour, and immense potential for post-graduation development.
          </p>
        </div>
        <div className="flex items-start">
          <div>
            <table>
              <thead>
                <tr className="flex gap-8 items-center  bg-vim">
                  <th className="text-[#1F0259] font-semibold p-2">
                    Key Facts to study in USA
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData1.map((row) => (
                  <tr
                    key={row.id}
                    className="flex gap-8 items-center border font-semibold rounded-md p-2"
                  >
                    <td className="w-[350px] border-r-2">{row.point}</td>
                    <td className="w-[550px]">{row.answer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <h1 className="text-[#1F0259] font-bold text-2xl">
            Benefits of Studying in the USA
          </h1>
          <p className="text-[#1F0259]">
            Opting to  When international students, drawn by the allure of <span className="font-bold">studying in the USA,</span> embark on this transformative journey, they are not simply choosing a destination but stepping into a realm of unbounded opportunities within American education.
          </p>
          <div className="flex flex-col gap-y-3">
            {USABenefits.map((benefit) => (
              <ul className="list-disc ml-8">
                <li key={benefit.id} className="text-[#1F0259]">
                  <span className="font-bold">{benefit.point}</span>:
                  &nbsp;{benefit.answer}
                </li>
              </ul>
            ))}
          </div>
          <div className="flex flex-col gap-4 items-center my-3">
            <p className="italic text-center text-[#1F0259] text-sm">
              Need to learn more about Applying to Study in USA and all the benefits that you<br /> can gain by it? Contact US and book a FREE consultation Today!
            </p>
            <Link to="/register">
             <Button subject="Want to  study in USA? Get FREE counseling" />
            </Link>
            
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[#1F0259] font-bold text-2xl">
            Popular Courses to Study in the USA
          </h1>
          <p className="text-[#1F0259]">

            The United States, as a beacon of higher education, offers an array of popular courses that resonate with the evolving demands of the modern world, making it an enticing destination for international students seeking to <span className="font-bold">study in the USA.</span> These courses span diverse disciplines and cater to a wide spectrum of aspirations.
          </p>
          <div className="flex items-center flex-1">
            <ul className="text-[#1F0259] list-disc ml-8 font-bold">
              <li>Medicine</li>
              <li>Business and Management</li>
              <li>Engineering</li>
              <li>Computer Science</li>
              <li>Art and Design</li>
              <li>Law</li>
            </ul>
            <div className="flex flex-1 items-center justify-center">
              <ContactMessage
                message="Fascinating, right? Eager to explore further, aren't you?
Then click to discover more about the Best Courses to Study in the USA for International Students!"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[#1F0259] font-bold text-2xl">
            Cost of Studying in the USA for International Students
          </h1>
          <p className="text-[#1F0259]">
            The cost of studying in the USA is a multifaceted consideration, encompassing tuition fees, living expenses, healthcare, and more. As international students seek to shape their academic aspirations and immerse themselves in the enriching American educational experience, evaluating the cost becomes an essential step in planning for their future.
          </p>
          <div className="my-4">
            <div>
              <table>
                <thead>
                  <tr className="flex gap-8 items-center bg-vim">
                    <th className="w-[350px] text-[#1F0259] font-semibold p-2">
                      Level of Education
                    </th>
                    <th className="text-[#1F0259] font-semibold p-2">
                      Average Tuition Fee (USD/Year) (approx.)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData2.map((row) => (
                    <tr
                      key={row.id}
                      className="flex gap-8 items-center border font-semibold rounded-md p-2"
                    >
                      <td className="w-[350px] border-r-2">{row.point}</td>
                      <td className="w-[550px]">{row.answer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div >
          </div >
        </div >
        <div className="flex flex-col gap-3">
          <h1 className="text-[#1F0259] font-bold text-2xl">
            Documents Required to Study in the USA for International
            Students
          </h1>
          <div className="flex items-center flex-1 ">
            <ul className="text-[#1F0259] list-disc ml-8 font-bold">
              <li>Academic Transcripts</li>
              <li>Statement of Purpose or Personal Statement</li>
              <li>Letters of Recommendation</li>
              <li>
                Proof of English Language Proficiency (IELTS, TOEFL, etc.)
              </li>
              <li>CV/Resume</li>
              <li>Passport-sized photographs</li>
            </ul>
            <div className="flex flex-1 items-center justify-center">
              <ContactMessage message="Studying abroad can be difficult. Simplify it with NSA!" />
              {/* use shadcn button */}
            </div>
          </div>
        </div>
      </section >
    </div >
  );
}

export default Usa;
