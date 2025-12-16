import React from "react";

//  HERE WE RECIVE THE DATA FROM PROPS 
const Card = (props) => {
  return (
    <div>
      <img src={props.img} alt="" />
      <h1>
        {props.user},{props.age}
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
        temporibus, dolore veniam ducimus in consectetur modi. Doloremque,
        voluptatem impedit. Corrupti, iure quidem minus temporibus repellendus
        veritatis aspernatur? Ex, dolores illum!
      </p>
      <button>veiw profile</button>
    </div>
  );
};

export default Card;
