import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const[count2]=useState(2)
  return (
    <div className="user-card">
      {/* <h2>Name:MD Basirul Haque</h2> */}
      <h2>Count:{count}</h2>
      <h2>Count:{count2}</h2>

      <h2>{props.name}</h2>

      <h2>Location: Muzaffarpur Bihar </h2>
      <h3>Contact:@Basirulquadri786</h3>
    </div>
  );
};
export default User;
