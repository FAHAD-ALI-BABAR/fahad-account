import React, { useState } from 'react'
import "./Accordian.css"
import accpic from "../../Images/acc.webp"
const Accordian = () => {
    const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
    <section className='acc-sec'>
        <div className='acc-pic'>
          <img src={accpic} alt='acc-pic' />
        </div>
        <div className='acc-info'>
          <h2>Frequently ask</h2>

          {[ 
            { title: "Adieus who direct esteem It esteems luckily?", content: "Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing" }, 
            { title: "Who direct esteem it esteems?", content: "Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing" }, 
            { title: "Duis consectetur feugiat auctor?", content: "Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing." }, 
            { title: "Consectetur feugiat auctor?", content: "Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing." } 
          ].map((item, index) => (
            <div key={index} className="relative mb-3">
              <h6 className="mb-0">
                <button
                  className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
                  onClick={() => toggleAccordion(index)}
                >
                  <span >{item.title}</span>
                  <i
                    className={`absolute right-0 pt-1 text-base transition-transform fa fa-chevron-down ${activeIndex === index ? 'rotate-180' : ''
                      }`}
                  ></i>
                </button>
              </h6>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'h-auto' : 'h-0'
                  }`}
              >
                <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Accordian