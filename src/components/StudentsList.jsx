import { useEffect, useState } from "react";
import {RiMenu2Line} from "react-icons/ri"
import axios from "axios"
import { AddNew } from "./AddStudent";

export const StudentList = () => {
    const [show,setShow] = useState(true)
    const [data,setData] = useState([])
    const color = ["#fada5f", "#bde0ff", "#Cea2fd"];

    useEffect(()=>{
        GetData()
    },[])

    const GetData = () => {
      axios
        .get("https://fast-oasis-38540.herokuapp.com/students")
        .then((d) => setData(d.data))
        .then(setShow(!show));
    }

    const HideAdd = () => {
      setShow(!show)
    }
    return (
      <div>
        {show ? <div className="hide"></div> : ""}
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>
                  <RiMenu2Line />
                  Student Name
                </th>
                <th># Rank</th>
                <th>College Preference 1</th>
                <th>College Preference 2</th>
                <th>College Preference 3</th>
              </tr>
            </thead>
            <tbody>
              {data.map((e) => {
                return (
                  <tr key={e.id}>
                    <td> {e.name}</td>
                    <td>{e.rank}</td>
                    <td>
                      <p
                        style={{
                          background: `${
                            color[Math.floor(Math.random() * color.length)]
                          }`,
                        }}
                      >
                        {e["collegePreference 1"]}
                      </p>
                    </td>
                    <td>
                      <p
                        style={{
                          background: `${
                            color[Math.floor(Math.random() * color.length)]
                          }`,
                        }}
                      >
                        {e["collegePreference 2"]}
                      </p>
                    </td>
                    <td>
                      <p
                        style={{
                          background: `${
                            color[Math.floor(Math.random() * color.length)]
                          }`,
                        }}
                      >
                        {e["collegePreference 3"]}
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="forButton">
            {/* <Link> */}
            <div onClick={() => setShow(!show)}>Add New Student</div>
            {/* </Link> */}
            <div>Get Result</div>
          </div>
        </div>
        
        <AddNew show={show} GetData={GetData} HideAdd={HideAdd} />
      </div>
    );
}