import React, { useState } from "react";
import { data as userList } from "./UserData";
import SearchUser from "../Search/SearchUser";

  const List = () => { 
  const [data, setData] = useState(userList)
  const [record,setRecord] = useState("")
  const [search, setSearch] = useState("");
  // const [update, setUpdate] = useState([{
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  // }]);

  const upDateUser = (updateValues) => {
    setRecord(updateValues)

    // const value = (event.target.value);
    // setUpdate(value)
    // console.log("bjcn")
  } 

  const onChangeSearch = (searchValue) => {
    setSearch(searchValue)
    if(searchValue === "" ){
      setData(userList)
    }else{
      const newArray = userList.filter((i) =>
        i.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||  i.lastName.toLowerCase().includes(searchValue.toLowerCase())
      );
      setData(newArray);
    }
  }

  return(
  <>
    <SearchUser  search={search} onChangeSearch={onChangeSearch} /> 
    <div id="table-wrapper">
        <div id="table-headers">
          <table>
            <thead>
              <tr>
                <th className="column1">Id</th>
                <th className="column2">FirstName</th>
                <th className="column3">LastName</th>
                <th className="column4">Email</th>
                <th className="column5">Phone</th>
                <th className="column6">Edit</th>

              </tr>
            </thead>
          </table>
        </div>
        {data.map((item,index) => {
        return(
        <div id="table-data" >
        <table>
          <tbody>
            <tr className="data-row" >
              <td className="column1">{item.id}</td>
              <td className="column2">{item.firstName}</td>
              <td className="column3">{item.lastName}</td>
              <td className="column4">{item.email}</td>
              <td className="column5">{item.phone}</td>.
              <div className="column6"><button type="submit" onClick={upDateUser}>Edit</button></div>

            </tr>

          </tbody>
        </table>
      </div>
      )
      })}
    </div>
  </>
  );
};
export default List;
