import React from 'react';
import right from "../../Images/left.webp";
import can from "../../Images/can.webp";
import aus from "../../Images/aus.webp";
import ban from "../../Images/ban.webp";
import bel from "../../Images/bel.webp";
import china from "../../Images/china.webp";
import ger from "../../Images/ger.webp";
import uk from "../../Images/uk.webp";
import usa from "../../Images/usa.webp";
import img1 from "../../Images/img1.webp";
import img2 from "../../Images/img2.webp";
import img3 from "../../Images/img3.webp";
import img4 from "../../Images/img4.webp";
import img5 from "../../Images/img5.webp";
import img6 from "../../Images/img6.webp";
import img7 from "../../Images/img7.webp";
import img8 from "../../Images/img8.webp";

const Left = () => {
  return (
    <>
      <div className="p-4">
        <div className="container mx-auto">
          <div className="border-b pb-4">
            <h3 className="mb-8 text-2xl font-bold">Left Aligned</h3>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/3 lg:w-1/4">
                <img src={right} alt="" className="w-full h-auto mb-4 md:mb-0" />
              </div>
              <div className="w-full md:w-2/3 lg:w-3/4">
                <p>
                  Recently, the US Federal government banned online casinos from operating in
                  America by making it illegal to transfer money to them through any US bank or
                  payment system. As a result of this law, most of the popular online casino
                  networks such as Party Gaming and PlayTech left the United States. Overnight,
                  online casino players found themselves being chased by the Federal government.
                  But, after a fortnight, the online casino industry came up with a solution and
                  new online casinos started taking root. These began to operate under a different
                  business umbrella, and by doing that, rendered the transfer of money to and from
                  them legal. A major part of this was enlisting electronic banking systems that
                  would accept this new clarification and start doing business with me. Listed in
                  this article are the electronic banking systems that accept players from the
                  United States that wish to play in online casinos.
                </p>
              </div>
            </div>
          </div>

          <div className="border-b pb-4">
            <h3 className="mb-8 text-2xl font-bold">Right Aligned</h3>
            <div className="flex flex-wrap">
              <div className="w-full md:w-2/3 lg:w-3/4">
                <p>
                  Over time, even the most sophisticated, memory-packed computer can begin to run
                  slow if we don’t do something to prevent it. The reason why has less to do with
                  how computers are made and how they age and more to do with the way we use them.
                  You see, all of the daily tasks that we do on our PC from running programs to
                  downloading and deleting software can make our computer sluggish. To keep this
                  from happening, you need to understand the reasons why your PC is getting slower
                  and do something to keep your PC running at its best. You can do this through
                  regular maintenance and PC performance optimization programs.
                </p>
                <p>
                  Before we discuss all of the things that could be affecting your PC’s performance,
                  let’s talk a little about what symptoms...
                </p>
              </div>
              <div className="w-full md:w-1/3 lg:w-1/4">
                <img src={right} alt="" className="w-full h-auto" />
              </div>
            </div>
          </div>

          <div className="border-b pb-4">
            <h3 className="mb-8 font-bold text-lg">Definition</h3>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <div className="p-4 bg-gray-100 rounded">
                  <h4 className="mb-3 text-lg font-semibold">Definition 01</h4>
                  <p className='text-sm'>
                    Recently, the US Federal government banned online casinos from operating in
                    America by making it illegal to transfer money to them through any US bank or
                    payment system. As a result of this law, most of the popular online casino networks...
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <div className="p-4 bg-gray-100 rounded">
                  <h4 className="mb-3 text-lg font-semibold">Definition 02</h4>
                  <p className='text-sm'>
                    Recently, the US Federal government banned online casinos from operating in
                    America by making it illegal to transfer money to them through any US bank or
                    payment system. As a result of this law, most of the popular online casino networks...
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <div className="p-4 bg-gray-100 rounded">
                  <h4 className="mb-3 text-lg font-semibold">Definition 03</h4>
                  <p className='text-sm'>
                    Recently, the US Federal government banned online casinos from operating in
                    America by making it illegal to transfer money to them through any US bank or
                    payment system. As a result of this law, most of the popular online casino networks...
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b pb-4">
            <h3 className="mb-8 font-bold text-lg">Block Quotes</h3>
            <div className="w-full lg:w-2/3">
              <blockquote className="border-l-4 border-orange-900 pl-4 italic text-gray-700">
                “Recently, the US Federal government banned online casinos from operating in America
                by making it illegal to transfer money to them through any US bank or payment system.
                As a result of this law, most of the popular online casino networks such as Party Gaming
                and PlayTech left the United States. Overnight, online casino players found themselves
                being chased by the Federal government. But, after a fortnight, the online casino industry
                came up with a solution and new online casinos started taking root...”
              </blockquote>
            </div>
          </div>

          <div className="border-b pb-4">
            <h3 className="mb-8 font-bold text-lg">Table</h3>
            <div className="overflow-x-auto">
              <div className="min-w-full">
                <div className="bg-gray-100 flex flex-wrap p-2">
                  <div className="w-1/4 text-blue-600">#</div>
                  <div className="w-1/2 sm:w-1/4 text-blue-600">Countries</div>
                  <div className="w-1/2 sm:w-1/4 text-blue-600">Visits</div>
                  <div className="w-1/2 sm:w-1/4 text-blue-600">Percentages</div>
                </div>
                {[
                  { serial: '01', img: can, country: 'Canada', visit: '645032', percentage: 80 },
                  { serial: '02', img: aus, country: 'Canada', visit: '645032', percentage: 30 },
                  { serial: '03', img: china, country: 'Canada', visit: '645032', percentage: 55 },
                  { serial: '04', img: ban, country: 'Canada', visit: '645032', percentage: 60 },
                  { serial: '05', img: uk, country: 'Canada', visit: '645032', percentage: 40 },
                  { serial: '06', img: bel, country: 'Canada', visit: '645032', percentage: 70 },
                  { serial: '07', img: usa, country: 'Canada', visit: '645032', percentage: 30 },
                  { serial: '08', img: ger, country: 'Canada', visit: '645032', percentage: 60 },
                ].map((row, index) => (
                  <div key={index} className="flex flex-wrap p-2 border-t">
                    <div className="w-1/4">{row.serial}</div>
                    <div className="w-1/2 sm:w-1/4 flex items-center">
                      <img src={row.img} alt="flag" className="w-12 h-auto mr-2" />
                      {row.country}
                    </div>
                    <div className="w-1/2 sm:w-1/4">{row.visit}</div>
                    <div className="w-1/2 sm:w-1/4">
                      <div className="bg-gray-300 h-2 rounded">
                        <div
                          style={{ width: `${row.percentage}%` }}
                          className="bg-blue-600 h-full rounded"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-b pb-4">
            <h3 className="mb-8 font-bold text-lg">Image Gallery</h3>
            <div className="flex flex-wrap -m-2">
              {[img1, img2, img3, img4, img5, img6, img7, img8].map((img, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-2">
                  <img src={img} alt="" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Left;
