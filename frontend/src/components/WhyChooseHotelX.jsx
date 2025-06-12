import iconTriangle from "../assets/iconTriangle.png"
const WhyChooseHotelX = ({ title, desc }) => (
  <div className="flex mb-15 items-center pr-20">
    <img src={iconTriangle} alr="iconTriangle"></img>
    <div>
        <h3 className="font-lodestone mb-3">{title}</h3>
        <p>{desc}</p>
    </div>
  </div>
);

export default WhyChooseHotelX;
