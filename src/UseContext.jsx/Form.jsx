
import React, { useContext } from "react";
import Mycontext from "./Context";

const Form = () => {
  const { mydata, blankarr, handleChang } = useContext(Mycontext);

  return (
    <div>
      <form onSubmit={blankarr}>
        <input
          type="text"
          name="name"
          onChange={handleChang}
          value={mydata.name}
          required
          placeholder="NAME"
          style={{ width: "50%", margin: "0 auto" }}
        />
        <br />
        <input
          type="number"
          name="age"
          onChange={handleChang}
          value={mydata.age}
          required
          placeholder="AGE"
          style={{ width: "50%", margin: "0 auto" }}
         
        />
        <br />
        <input
          type="text"
          name="address"
          onChange={handleChang}
          value={mydata.address}
          required
          placeholder="ADDRESS"
          style={{ width: "50%", margin: "0 auto" }}
        />
        <br />
        <input
          type="text"
          name="email"
          onChange={handleChang}
          value={mydata.email}
          required
          placeholder="EMAIL"
          style={{ width: "50%", margin: "0 auto" }}
         
        />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
;
export default Form;


 
