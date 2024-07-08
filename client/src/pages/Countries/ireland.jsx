import React, { useEffect } from "react";
import { Countries } from "../../utils/data";

export default function Ireland() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="py-16 lg:px-52 max-md:px-3 text-[#1F0259] bg-[#F1F5F9]">
      {Countries.map(
        (item, index) =>
          index === 0 && (
            <div key={item.id} className="flex flex-col gap-3">
              <h1 className="text-6xl text-center">{item.country}</h1>
              <div>
                <h1 className="font-bold py-2">{item.heading}</h1>
                <p>{item.details}</p>
              </div>
              <div>
                <h3 className="font-bold">{item.advantage}</h3>
                {item.advantageLists.map((advantageItem) => (
                  <div key={advantageItem.id} className="flex flex-col gap-2">
                    <h3 className="font-semibold">{advantageItem.title}</h3>
                    <p>{advantageItem.description}</p>
                    <div>
                      <ul>
                        {advantageItem.points.map((point, index) => {
                          return (
                            <li key={index} className="">
                              &diams;&nbsp;{point}
                              <br />
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="my-3">
                      <h3 className="font-semibold">{advantageItem.title1}</h3>
                      <ul>
                        {advantageItem.courses.map((course, index) => {
                          return (
                            <li key={index} className="">
                              &diams;&nbsp;{course}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold">{advantageItem.title2}</h3>
                      <ul>
                        {advantageItem.universities.map((university, index) => {
                          return (
                            <li key={index} className="">
                              &diams;&nbsp;{university}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
      )}
    </div>
  );
}
