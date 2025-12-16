import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  //   console.log(props.color);


// HERE WE ACCEPT THE ALL THE CONTENT FROM RIGHT SIDE CARD CONTENT THROUGH PROPS DRILLING    
  return (
    <div className="h-full shrink-0 overflow-hidden relative w-80 rounded-4xl">
      <img className="h-full w-full object-cover" src={props.img} alt="" />
      <RightCardContent color={props.color} id={props.id} tag={props.tag} />
    </div>
  );
};

export default RightCard;
