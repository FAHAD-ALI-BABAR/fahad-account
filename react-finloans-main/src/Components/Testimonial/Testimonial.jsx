import React, { useState } from 'react'
import "./Testimonial.css"
import author from "../../Images/author.webp"
const testimonials = [
    {
      name: "John Doe",
      review: "Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering through animal welfare when people might depend on livestock as their only source of income or food.",
      img: author, // Replace with actual image URLs
    },
    {
      name: "Jane Smith",
      review: "Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering through animal welfare when people might depend on livestock as their only source of income or food.",
      img: author,
    },
    {
      name: "Mark Johnson",
      review: "Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering through animal welfare when people might depend on livestock as their only source of income or food.",
      img: author,
    },
  ];
const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState("");

    const handleNext = () => {
      setCurrentIndex((currentIndex + 1) % testimonials.length);
      setDirection("next")
    };
  
    const handlePrev = () => {
        setDirection("prev")
      setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
    };
  
    const { name, review, img } = testimonials[currentIndex];
  
    return (
      <div className="testimonial w-3/5 h-20vh mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={img}
            alt={name}
            className="w-40 h-40 rounded-full object-cover"
          />
          <div className="ml-6 max-w-2xl">
            <p className="text-lg font-medium">{review}</p>
            <p className="text-gray-500 mt-2">{name}</p>
          </div>
        </div>
        <div className="flex">
          <button
            onClick={handlePrev}
            className="forward p-2 mx-2 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 ml-1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="backward p-2 mx-2  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 ml-1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
  )
}

export default Testimonial