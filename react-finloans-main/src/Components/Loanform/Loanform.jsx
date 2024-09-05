import React from 'react'

const Loanform = () => {
  return (
    <>
    <div className="container mx-auto px-4 mt-12">
      <div className="flex justify-center">
        <div className="w-full lg:w-8/12">
          <form className="apply_form">
            <div className="flex flex-col">
              <div className="w-full text-center mb-8">
                <h3 className="text-2xl font-semibold">How much do you want?</h3>
                <p className="text-gray-600">
                  We provide online instant cash loans with quick approval that suit your term length
                </p>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Phone no."
                  className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <select
                  className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue="Purpose"
                >
                  <option disabled>Purpose</option>
                  <option value="1">Purpose 1</option>
                  <option value="2">Purpose 2</option>
                </select>
              </div>
              <div className="mb-4">
                <select
                  className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue="Amount"
                >
                  <option disabled>Amount</option>
                  <option value="1">$10</option>
                  <option value="2">$20</option>
                  <option value="3">$30</option>
                </select>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Month"
                  className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4 text-center">
                <p className="text-gray-600">
                  You have to pay: <span className="text-black font-semibold">$0</span>
                </p>
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Message"
                  className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="5"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 w-full text-white font-semibold py-3 px-8 rounded-md hover:bg-blue-600 transition duration-200"
                >
                  Apply loan
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Loanform