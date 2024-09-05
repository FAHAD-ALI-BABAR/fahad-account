import React from 'react';
import blogs1 from "../../Images/blogs1.webp";
import rec1 from "../../Images/recent1.webp";
import rec2 from "../../Images/recent2.webp";
import rec3 from "../../Images/recent3.webp";
import rec4 from "../../Images/recent4.webp";
import post1 from "../../Images/post1.webp";
import post2 from "../../Images/post2.webp";
import post3 from "../../Images/post3.webp";
import post4 from "../../Images/post4.webp";
import post5 from "../../Images/post5.webp";
import post6 from "../../Images/post6.webp";
import author1 from "../../Images/author1.webp";
import com from "../../Images/comment.webp";
import com1 from "../../Images/comment2.webp";
import com2 from "../../Images/comment33.webp";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const Singleblog = () => {
  const images = [blogs1];
  const recent = [rec1, rec2, rec3, rec4];
  const instagram = [post1, post2, post3, post4, post5, post6];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap">
        {/* Left Column */}
        <div className="w-full lg:w-8/12 mb-6 lg:mb-0">
          <div className="space-y-6">
            {images.map((img, index) => (
              <article key={index} className="flex flex-col">
                <div className="relative">
                  <img
                    className="w-full lg:w-3/4 rounded-lg mt-12"
                    src={img}
                    alt=""
                  />
                </div>
                <div className="mt-8">
                  <a href="single-blog.html" className="text-xl font-semibold block">
                    Second divided from form fish beast made every of seas all gathered us saying he our
                  </a>
                  <p className="mt-2 text-base">
                    That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.
                  </p>
                  <ul className="flex flex-wrap space-x-4 mt-3 text-sm">
                    <li>
                      <a href="#">
                        <i className="fa fa-user"></i> Travel, Lifestyle
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-comments"></i> 03 Comments
                      </a>
                    </li>
                  </ul>
                  <p className="text-base mt-4">
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.
                  </p>
                  <div className="quote-wrapper mt-4">
                    <div className="quotes text-base border-l-4 border-blue-500 pl-4">
                      MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.
                    </div>
                  </div>
                  <p className="text-base mt-4">
                    MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower
                  </p>
                </div>

                <div className="navigation-top mt-6">
                  <div className="flex flex-wrap justify-between items-center text-center text-xs">
                    <p className="like-info">
                      <span className="align-middle"><i className="fa fa-heart"></i></span> Lily and 4 people like this
                    </p>
                    <ul className="social-icons flex space-x-4 text-blue-500">
                      <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                      <li><a href="#"><i className="fa fa-behance"></i></a></li>
                    </ul>
                  </div>
                  <div className="navigation-area mt-6">
                    <div className="flex flex-wrap">
                      <div className="lg:w-6/12 md:w-6/12 w-full flex items-center justify-start mb-4">
                        <div className="thumb w-full">
                          <a href="#">
                            <img className="w-full h-auto" src={post6} alt="" />
                          </a>
                        </div>
                        <div className="arrow text-white">
                          <a href="#">
                            <ChevronLeftIcon className="h-6 w-6" />
                          </a>
                        </div>
                        <div className="details ml-4">
                          <p className="text-xs">Prev Post</p>
                          <a href="#">
                            <h4 className="text-sm">Space The Final Frontier</h4>
                          </a>
                        </div>
                      </div>
                      <div className="lg:w-6/12 md:w-6/12 w-full flex items-center justify-end mb-4">
                        <div className="details mr-4">
                          <p className="text-xs">Next Post</p>
                          <a href="#">
                            <h4 className="text-sm">Telescopes 101</h4>
                          </a>
                        </div>
                        <div className="arrow text-white">
                          <a href="#">
                            <ChevronRightIcon className="h-6 w-6" />
                          </a>
                        </div>
                        <div className="thumb w-full">
                          <a href="#">
                            <img className="w-full h-auto" src={post3} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="blog-author mt-6">
                  <div className="media flex items-center bg-gray-50 p-4 rounded-lg">
                    <img src={author1} alt="" className="w-16 h-16 rounded-full" />
                    <div className="media-body ml-4">
                      <a href="#">
                        <h4 className="text-sm font-medium">Harvard Milan</h4>
                      </a>
                      <p className="text-xs text-gray-700">Second divided from form fish beast made. Every of seas all gathered use saying you're, he our dominion twon Second divided from</p>
                    </div>
                  </div>
                </div>

                <div className="comments-area mt-6">
                  <h4 className="text-sm font-medium">05 Comments</h4>
                  <div className="comment-list mt-4">
                    {[
                      { img: com, author: "Emilly Blunt", date: "December 4, 2017 at 3:12 pm", comment: "Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser" },
                      { img: com1, author: "Emilly Blunt", date: "December 4, 2017 at 3:12 pm", comment: "Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser" },
                      { img: com2, author: "Emilly Blunt", date: "December 4, 2017 at 3:12 pm", comment: "Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser" }
                    ].map((comment, index) => (
                      <div key={index} className="single-comment flex flex-wrap mb-4">
                        <div className="user flex items-center w-full">
                          <div className="thumb">
                            <img src={comment.img} alt="" className="w-12 h-12 rounded-full" />
                          </div>
                          <div className="desc ml-4">
                            <p className="comment text-xs">{comment.comment}</p>
                            <div className="flex justify-between text-xs mt-2">
                              <div className="flex items-center">
                                <h5><a href="#" className="text-blue-500">{comment.author}</a></h5>
                                <p className="date ml-2">{comment.date}</p>
                              </div>
                              <div className="reply-btn">
                                <a href="#" className="btn-reply text-blue-500 uppercase">Reply</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="comment-form mt-6">
                  <h4 className="text-sm font-medium">Leave a Reply</h4>
                  <form action="#">
                    <div className="form-group flex flex-wrap mt-4">
                      <div className="w-full md:w-1/2 pr-2">
                        <input type="text" placeholder="Name *" className="form-control w-full px-4 py-2 border border-gray-300 rounded-lg"/>
                      </div>
                      <div className="w-full md:w-1/2 pl-2">
                        <input type="text" placeholder="Email *" className="form-control w-full px-4 py-2 border border-gray-300 rounded-lg"/>
                      </div>
                      <div className="w-full mt-4">
                        <textarea rows="5" placeholder="Comment" className="form-control w-full px-4 py-2 border border-gray-300 rounded-lg"/>
                      </div>
                    </div>
                    <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">Post Comment</button>
                  </form>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-4/12">
          <div className="widget recent-posts bg-gray-100 p-4 rounded-lg mb-6">
            <h4 className="text-lg font-semibold mb-4">Recent Posts</h4>
            {recent.map((rec, index) => (
              <div key={index} className="recent-post flex mb-4">
                <div className="thumb w-1/3">
                  <img src={rec} alt="" className="w-full h-auto rounded-lg" />
                </div>
                <div className="desc w-2/3 pl-2">
                  <a href="#" className="text-sm font-medium">The Wonders of Space</a>
                  <p className="text-xs text-gray-600">December 4, 2017</p>
                </div>
              </div>
            ))}
          </div>

          <div className="widget instagram bg-gray-100 p-4 rounded-lg mb-6">
            <h4 className="text-lg font-semibold mb-4">Instagram</h4>
            <div className="flex flex-wrap">
              {instagram.map((insta, index) => (
                <div key={index} className="instagram-item w-1/3 p-1">
                  <img src={insta} alt="" className="w-full h-auto rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleblog;
