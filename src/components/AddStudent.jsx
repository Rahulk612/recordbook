import axios from "axios";
import { useEffect, useState } from "react";
import { RiMenu2Line } from "react-icons/ri";

export const AddNew = ({ show, GetData, HideAdd }) => {
  const [form, setForm] = useState({});
  const [list, setList] = useState([]);

  useEffect(()=>{
    axios
      .get("https://fast-oasis-38540.herokuapp.com/Colleges")
      .then((d) => setList(d.data));
  },[])

  const handleChange = (e) => {
    const { name } = e.target;
    setForm({ ...form, [name]: e.target.value });
  };

  const btnHandler = () => {
    axios
      .post("https://fast-oasis-38540.herokuapp.com/students", form)
      .then(GetData);
  };
  return show ? (
    <div className="addNewContainer">
      <div className="forHeading">
        <p>Add Row</p>
      </div>
      <div className="InputContainer">
        <div className="inpudDiv">
          <label>
            {" "}
            <RiMenu2Line className="MenuIcon" />
            Student Name{" "}
          </label>
          <input
            name="name"
            type="text"
            onChange={handleChange}
            placeholder="Enter full name"
          />
        </div>
        <div className="inpudDiv">
          <label>
            <RiMenu2Line className="MenuIcon" /> Rank
          </label>
          <input
            name="rank"
            type="text"
            onChange={handleChange}
            placeholder="Enter NUmber"
          />
        </div>
        <div className="inpudDiv">
          <label>College Preference 1</label>
          <select
            onChange={handleChange}
            className="SelectClass"
            name="collegePreference 1"
          >
            <option value="">--Please select one--</option>
            {list.map((each) => {
              return each.noOfSeats>0?(
                <option key={each.name} value={each.name}>
                  {each.name}
                </option>
              ):"";
            })}
          </select>
        </div>
        <div className="inpudDiv">
          <label>College Preference 2</label>
          <select
            onChange={handleChange}
            className="SelectClass"
            name="collegePreference 2"
          >
            <option value="">--Please select one--</option>
            {list.map((each) => {
              return each.noOfSeats>0?(
                <option key={each.name} value={each.name}>
                  {each.name}
                </option>
              ):"";
            })}
          </select>
        </div>
        <div className="inpudDiv">
          <label>College Preference 3</label>
          <select
            onChange={handleChange}
            className="SelectClass"
            name="collegePreference 3"
          >
            <option value="">--Please select one--</option>
            {list.map((each) => {
              return each.noOfSeats>0? (
                <option key={each.name} value={each.name}>
                  {each.name}
                </option>
              ):"";
            })}
          </select>
        </div>
      </div>

      <div className="SaveCancelButtonDiv">
        <button className="CancelBtn" onClick={HideAdd}>
          <p className="crossIcon">+</p> Cancel
        </button>
        <button onClick={btnHandler} className="SaveBtn">
          Save
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};
