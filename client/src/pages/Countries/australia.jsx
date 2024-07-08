import React, { useEffect } from "react";
import { AustraliaBenefits } from "../../utils/data";
import Button from "../../button/Button";
import ContactMessage from "../../components/contactMessage";
import ausCover from "../../assets/covers/ausCover.png";
import { Link } from "react-router-dom";

export default function Australia() {
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
      answer: "Variable, depending on course and institution",
    },
    {
      id: "3",
      point: "Source of funding",
      answer: "Grants, Student loans",
    },
    {
      id: "4",
      point: "Exams required",
      answer: "IELTS, TOEFL, PTE (depending on the university)",
    },
    {
      id: "5",
      point: "Degrees",
      answer: "Undergraduate, Postgraduate",
    },
    {
      id: "6",
      point: "Intakes",
      answer: "February,July and September",
    },
  ];
  const tableData2 = [
    {
      id: "1",
      point: "Bachelor’s",
      answer: "AUD 20,000 - 35,000",
    },
    {
      id: "2",
      point: "Master’s",
      answer: "AUD 25,000 - 40,000",
    },
  ];

  return (
    <div>
      {/* covers */}
      <div className="relative">
        <div className="h-full">
          <img
            src={ausCover}
            alt="ausCover"
            className="w-full h-[65vh] object-cover"
          />
          <div className="absolute inset-0 bg-[#1F0259] opacity-40"></div>
          <div className="flex flex-col gap-4 absolute left-10 bottom-1/2 transform translate-y-1/2 w-1/2 max-md:w-auto max-md:right-10">
            <h2 className="text-white font-bold text-5xl max-md:text-3xl">
              Your <span className="text-[#1F0259]">dream</span> of studying in{" "}
              <span className="text-[#1F0259]">Australia</span> is closer than
              you think!
            </h2>
            <p className="text-white text-lg font-medium">
              Learn everything you need to know about studying in Austraila and
              get end to end expert guidance from us.
            </p>
            <div>
              <Link to="/register">
                <Button subject="Get Started For FREE" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Why Study In  Australia ? */}
      <section className="m-12 max-md:m-8 flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-[#1F0259] font-bold text-2xl max-md:text-lg">
            Why Study In Australia ?
          </h1>
          <p className="text-[#1F0259]">
            Australia, with its world-class institutions, diverse culture, and
            unparalleled natural beauty, beckons global students for an
            unforgettable educational journey. As a pioneer in research and
            innovation, the country offers an array of courses tailored to equip
            students for the future. While 
            <span className="font-bold">studying in Australia</span>, you're not
            just earning a degree but also gaining a holistic experience that
            moulds you both personally and professionally.
          </p>
        </div>
        <div className="flex items-start max-md:items-stretch">
          <div>
            <table>
              <thead>
                <tr className="flex gap-8 items-center bg-vim">
                  <th className="text-[#1F0259] font-semibold p-2 max-md:p-3 max-md:text-xl">
                    Key Facts to study in Australia
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData1.map((row) => (
                  <tr
                    key={row.id}
                    className="flex gap-8 items-center border font-semibold rounded-md p-2"
                  >
                    <td className="w-[350px] max-md:w-[100px] border-r-2 max-md:p-2">
                      {row.point}
                    </td>
                    <td className="w-[550px] max-md:w-[150px] p-0">
                      {row.answer}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <h1 className="text-[#1F0259] font-bold text-2xl">
            Benefits of Studying in the Australia
          </h1>
          <p className="text-[#1F0259]">
            <span className="font-bold">Studying in Australia</span> offers a
            plethora of advantages for international students. The country's
            education system not only provides academic excellence but also
            focuses on nurturing holistic individual development
          </p>
          <div className="flex flex-col gap-y-3 max-md:gap-y-4">
            {AustraliaBenefits.map((benefit) => (
              <ul className="list-disc ml-8">
                <li key={benefit.id} className="text-[#1F0259]">
                  <span className="font-bold">{benefit.point}</span>: &nbsp;
                  {benefit.answer}
                </li>
              </ul>
            ))}
          </div>
          <div className="flex flex-col gap-4 items-center my-3">
            <p className="italic text-center text-[#1F0259] text-sm">
              Need to learn more about Applying to Study in AUSTRALIA and all
              the benefits that you
              <br /> can gain by it? Contact NSA and book a FREE consultation
              Today
            </p>
            <Link to="/register">
              <Button subject="Want to study in Australia? Get FREE counselling" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[#1F0259] font-bold text-2xl">
            Popular Courses to Study in the Austraila
          </h1>
          <p className="text-[#1F0259]">
            Studying these 
            <span className="font-bold">popular courses in Australia</span>
             equips International students with industry-relevant skills and
            immerses them in a multicultural environment that encourages
            personal growth and fosters lasting connections. Australian
            universities, backed by NSA`s expert guidance and support, open
            doors to an exceptional educational journey that empowers students
            to shape a successful and fulfilling future.
          </p>
          <div className="flex max-md:flex-col items-center max-md:items-start flex-1 max-md:gap-6">
            <ul className="text-[#1F0259] list-disc ml-8 font-bold">
              <li>Medicine</li>
              <li>Business and Management</li>
              <li>Engineering</li>
              <li>Computer Science</li>
              <li>Art and Design</li>
              <li>Tourism and Hospitality</li>
            </ul>
            <div className="flex flex-1 items-center justify-center">
              <ContactMessage
                message="Fascinating, right? Eager to explore further, aren't you?
Then click to discover more about the Best Courses to Study in the Australia for International Students!"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[#1F0259] font-bold text-2xl">
            Cost of Studying in the Australia for International Students
          </h1>
          <p className="text-[#1F0259]">
            Australia is renowned for its quality of education, but it's
            essential for international students to understand the costs
            involved. Tuition fees can vary significantly between institutions
            and courses. Let's break down the average yearly costs for
            international students.
          </p>
          <div className="my-4">
            <div>
              <table>
                <thead>
                  <tr className="flex gap-8 items-center bg-vim">
                    <th className="w-[350px] text-[#1F0259] font-semibold p-2 max-md:w-[100px]">
                      Level of Education
                    </th>
                    <th className="text-[#1F0259] font-semibold py-2 pr-2 max-md:w-[150px]">
                      Average Tuition Fee (AUD/Year) (approx.)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData2.map((row) => (
                    <tr
                      key={row.id}
                      className="flex gap-8 items-center border font-semibold rounded-md p-2"
                    >
                      <td className="w-[350px] max-md:w-[150px] border-r-2">
                        {row.point}
                      </td>
                      <td className="max-md:w-[120px] max-md:p-0">
                        {row.answer}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[#1F0259] font-bold text-2xl">
            Documents Required to Study in the Australia for International
            Students
          </h1>
          <div className="flex max-md:flex-col items-center flex-1">
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
            <div className="flex flex-1 items-center justify-center mt-4">
              <ContactMessage message="Studying abroad can be difficult. Simplify it with NSA!" />
              {/* use shadcn button */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
