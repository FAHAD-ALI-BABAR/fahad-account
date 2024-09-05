import React, { useState } from 'react';

const Toggle = () => {
  const [switchStates, setSwitchStates] = useState({
    defaultSwitch: false,
    primarySwitch: true,
    confirmSwitch: true,
    defaultCheckbox: false,
    primaryCheckbox: true,
    confirmCheckbox: false,
    defaultRadio: false,
    primaryRadio: true,
    confirmRadio: true,
  });

  const handleToggle = (e) => {
    const { id, checked } = e.target;
    setSwitchStates((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  return (
    <>
      <div className="p-4">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h3 className="mb-4 text-sm font-bold">Form Element</h3>
            <form action="#">
              <div className="mb-4">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  required
                  className="w-full p-2 border rounded text-sm"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  required
                  className="w-full p-2 border rounded text-sm"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  className="w-full p-2 border rounded text-sm"
                />
              </div>
              <div className="mb-4 flex items-center">
                <i className="fa fa-thumb-tack mr-2"></i>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  required
                  className="w-full p-2 border rounded text-sm"
                />
              </div>
              <div className="mb-4 flex items-center">
                <i className="fa fa-plane mr-2"></i>
                <select className="w-full p-2 border rounded text-sm">
                  <option value="city">City</option>
                  <option value="dhaka">Dhaka</option>
                  <option value="dilli">Dilli</option>
                  <option value="newyork">New York</option>
                  <option value="islamabad">Islamabad</option>
                </select>
              </div>
              <div className="mb-4 flex items-center">
                <i className="fa fa-globe mr-2"></i>
                <select className="w-full p-2 border rounded text-sm">
                  <option value="country">Country</option>
                  <option value="bangladesh">Bangladesh</option>
                  <option value="india">India</option>
                  <option value="england">England</option>
                  <option value="srilanka">Sri Lanka</option>
                </select>
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Message"
                  required
                  className="w-full p-2 border rounded text-sm"
                ></textarea>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="primary_color"
                  placeholder="Primary color"
                  required
                  className="w-full p-2 border rounded text-sm"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="accent_color"
                  placeholder="Accent color"
                  required
                  className="w-full p-2 border rounded text-sm"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="secondary_color"
                  placeholder="Secondary color"
                  required
                  className="w-full p-2 border rounded text-sm"
                />
              </div>
            </form>
          </div>
          <div className="w-full lg:w-1/2">
            <div>
              <h3 className="mb-4 text-sm font-bold">Switches</h3>
              <div className="mb-2 flex justify-between items-center text-sm">
                <p>01. Sample Switch</p>
                <input
                  type="checkbox"
                  id="defaultSwitch"
                  checked={switchStates.defaultSwitch}
                  onChange={handleToggle}
                  className="checked:bg-orange-500"
                />
              </div>
              <div className="mb-2 flex justify-between items-center text-sm">
                <p>02. Primary Color Switch</p>
                <input
                  type="checkbox"
                  id="primarySwitch"
                  checked={switchStates.primarySwitch}
                  onChange={handleToggle}
                  className="toggle-checkbox"
                />
              </div>
              <div className="mb-2 flex justify-between items-center text-sm">
                <p>03. Confirm Color Switch</p>
                <input
                  type="checkbox"
                  id="confirmSwitch"
                  checked={switchStates.confirmSwitch}
                  onChange={handleToggle}
                  className="toggle-checkbox"
                />
              </div>
            </div>

            <div className="mt-4">
              <h3 className="mb-4 text-sm font-bold">Checkboxes</h3>
              <div className="mb-2 flex justify-between items-center text-sm">
                <p>01. Sample Checkbox</p>
                <input
                  type="checkbox"
                  id="defaultCheckbox"
                  checked={switchStates.defaultCheckbox}
                  onChange={handleToggle}
                  className="toggle-checkbox"
                />
              </div>
              <div className="mb-2 flex justify-between items-center text-sm">
                <p>02. Primary Color Checkbox</p>
                <input
                  type="checkbox"
                  id="primaryCheckbox"
                  checked={switchStates.primaryCheckbox}
                  onChange={handleToggle}
                  className="toggle-checkbox"
                />
              </div>
              <div className="mb-2 flex justify-between items-center text-sm">
                <p>03. Confirm Color Checkbox</p>
                <input
                  type="checkbox"
                  id="confirmCheckbox"
                  checked={switchStates.confirmCheckbox}
                  onChange={handleToggle}
                  className="toggle-checkbox"
                />
              </div>
              <div className="mb-2 flex justify-between items-center text-sm">
                <p>04. Disabled Checkbox</p>
                <input
                  type="checkbox"
                  id="disabledCheckbox"
                  disabled
                  className="toggle-checkbox"
                />
              </div>
              <div className="mb-2 flex justify-between items-center text-sm">
                <p>05. Disabled Checkbox active</p>
                <input
                  type="checkbox"
                  id="disabledCheckboxActive"
                  checked
                  disabled
                  className="toggle-checkbox"
                />
              </div>
            </div>

            <div className="mt-4">
              <h3 className="mb-4 text-sm font-bold">Radios</h3>
              <div className="mb-2 flex justify-between items-center text-sm">
                <p>01. Sample Radio</p>
                <input
                  type="radio"
                  id="defaultRadio"
                  checked={switchStates.defaultRadio}
                  onChange={handleToggle}
                  className="toggle-radio"
                />
              </div>
              <div className="mb-2 flex justify-between items-center text-sm">
                <p>02. Primary Color Radio</p>
                <input
                  type="radio"
                  id="primaryRadio"
                  checked={switchStates.primaryRadio}
                  onChange={handleToggle}
                  className="toggle-radio"
                />
              </div>
              <div className="mb-2 flex justify-between items-center text-sm">
                <p>03. Confirm Color Radio</p>
                <input
                  type="radio"
                  id="confirmRadio"
                  checked={switchStates.confirmRadio}
                  onChange={handleToggle}
                  className="toggle-radio"
                />
              </div>
              <div className="mb-2 flex justify-between items-center text-sm">
                <p>04. Disabled Radio</p>
                <input
                  type="radio"
                  id="disabledRadio"
                  disabled
                  className="toggle-radio"
                />
              </div>
              <div className="mb-2 flex justify-between items-center text-sm">
                <p>05. Disabled Radio active</p>
                <input
                  type="radio"
                  id="disabledRadioActive"
                  checked
                  disabled
                  className="toggle-radio"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toggle;
