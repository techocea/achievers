import React from "react";
import { UKBenefits } from "../../data";
import Button from "../../button/Button";
import ContactMessage from "../../contactMessage/contactMessage";
import canCover from "../../assets/covers/canCover.jpg"
import { Link } from "react-scroll";

function canada() {
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
      point: "Undergraduate (UG)",
      answer: "CAD 25,000 to CAD 30,000",
    },
    {
      id: "2",
      point: "Postgraduate (PG)",
      answer: "CAD 6,000 to CAD 70,000",
    },
    {
      id: "3",
      point: "PhD",
      answer: "CAD 8,000 to CAD 20,000",
    },

  ];

  return (
    <div>
      {/* covers */}
      <div className="relative">
        <div className="h-full">
          <img src={canCover} alt="canCover" className="w-full h-[60vh] object-cover" />
          <div className="absolute inset-0 bg-[#1F0259] opacity-40"></div>
        </div>
        <div className="flex flex-col gap-4 absolute left-10 bottom-1/2 leading-[1.8] transform translate-y-1/2 w-1/2 max-md:w-auto max-md:right-10">
          <h2 className=" text-white font-bold text-5xl max-md:text-3xl">Your <span className="text-[#1F0259]">dream</span> of studying in <span className="text-[#1F0259]">Canada</span>  is closer than you think!</h2>
          <p className="text-white text-lg font-medium">Learn everything you need to know about studying in Canada and get end to end expert guidance from us.</p>
          <div>
            <Button subject="Get Started For FREE" />
          </div>
        </div>
      </div>
      <div className="w-full">
        <nav className="max-md:overflow-x-auto justify-between w-full bg-white max-md:bg-fixed flex px-4 py-4 space-x-4 shadow-lg">
          <ul className=" flex list-none gap-4 items-center">
            <li className="whitespace-nowrap">
              <Link activeClass="active"
                to="why-study-in-canada"
                spy={true}
                smooth={true}
                offset={-32}
                duration={500}>Why Study In Canada?</Link>
            </li>
            <li className="whitespace-nowrap">
              <Link to="/benefits">Benefits</Link>
            </li>
            <li className="whitespace-nowrap">
              <Link to="/courses">Courses</Link>
            </li>
            <li className="whitespace-nowrap">
              <Link to="/cost">Cost</Link>
            </li>
            <li className="whitespace-nowrap">
              <Link to="/requirements">Requirements</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Why Study In Canada? */}
      <section className="m-12 max-md:m-8 flex flex-col gap-4">
        <div
          id="why-study-in-canada"
          className="flex flex-col gap-3">
          <h1 className="text-[#1F0259] font-bold text-2xl max-md:text-lg">
            Why Study In Canada?
          </h1>
          <p className="text-[#1F0259]">
            When contemplating options for studying abroad, studying in Canada invariably emerges as a top choice. The allure of pursuing education in Canada is undeniable, making Studying abroad in Canada a coveted opportunity for many. The combination of diverse, cosmopolitan cities, breathtaking natural landscapes, and a myriad of prestigious educational institutions makes Study in Canada an enticing destination for international students looking to <span className="font-bold"> study abroad in Canada.</span>
          </p>
        </div>
        <div className="flex items-start max-md:items-stretch">
          <div>
            <table>
              <thead>
                <tr className="flex gap-8 items-center bg-vim">
                  <th className="text-[#1F0259] font-semibold p-2 max-md:p-3 max-md:text-xl">
                    Key Facts top study in Canada
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData1.map((row) => (
                  <tr
                    key={row.id}
                    className="flex gap-8 items-center border font-semibold rounded-md p-2"
                  >
                    <td className="w-[350px] max-md:w-[100px] border-r-2 max-md:p-2">{row.point}</td>
                    <td className="w-[550px] max-md:w-[150px] p-0">{row.answer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <h1 className="text-[#1F0259] font-bold text-2xl">
            Benefits of Studying in the Canada
          </h1>
          <p className="text-[#1F0259]">
            Opting to The allure of Canada for international students isn't solely based on its scenic beauty or diverse culture, making it an ideal destination for those looking to study in Canada. The nation's education system stands out on the International stage, attracting students seeking scholarships to<span className="font-bold"> study in Canada</span>
          </p>
          <div className="flex flex-col gap-y-3 max-md:gap-y-4">
            {UKBenefits.map((benefit) => (
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
              Need to learn more about Applying to Study in CANADA and all the benefits that you<br /> can gain by it? Contact US and book a FREE consultation Today!
            </p>
            <Button subject="Want to study in Canada? Get FREE counselling" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[#1F0259] font-bold text-2xl">
            Popular Courses to Study in the Canada
          </h1>
          <p className="text-[#1F0259]">
            In the dynamic landscape of International education, the option to study in Canada has emerged as a beacon of innovation and excellence, offering a wide array of popular courses that cater to the evolving needs of today's world.
          </p>
          <div className="flex max-md:flex-col items-center max-md:items-start flex-1 max-md:gap-6">
            <ul className="text-[#1F0259] list-disc ml-8 font-bold">
              <li>Medicine</li>
              <li>Business and Management</li>
              <li>Engineering</li>
              <li>Computer Science</li>
              <li>Art and Design</li>
              <li>Law</li>
            </ul>
            <div className="flex flex-1 items-center justify-center max-md:items-start">
              <ContactMessage
                message="Fascinating, right? Eager to explore further, aren't you?
Then click to discover more about the Best Courses to Study in the Canada for International Students!"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[#1F0259] font-bold text-2xl">
            Cost of Studying in the Canada for International Students
          </h1>
          <p className="text-[#1F0259]">
            Understanding the cost of studying in Canada for international students becomes a pivotal step in making informed decisions. From tuition fees to living expenses, the comprehensive cost of studying in Canada encompasses various aspects that collectively shape the overall investment in education.
          </p>
          <div className="my-4">
            <div>
              <table>
                <thead>
                  <tr className="flex gap-8 items-center bg-vim">
                    <th className="w-[350px] text-[#1F0259] font-semibold p-2 max-md:w-[100px]">
                      Level of Education
                    </th>
                    <th className="text-[#1F0259] font-semibold p-2 max-md:w-[150px]">
                      Costs for International Students in CAD (Per year) (approx.)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData2.map((row) => (
                    <tr
                      key={row.id}
                      className="flex gap-8 items-center border font-semibold rounded-md "
                    >
                      <td className="w-[350px] max-md:w-[150px] border-r-2 max-md:p-2">{row.point}</td>
                      <td className="max-md:w-[120px] max-md:p-0">{row.answer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div >
          </div >
        </div >
        <div className="flex flex-col gap-3">
          <h1 className="text-[#1F0259] font-bold text-2xl">
            Documents Required to Study in the Canada for International Students
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

export default canada;
