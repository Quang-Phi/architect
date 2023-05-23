import Slider from "react-slick";

const Slick = (props) => {
  const { children, config } = props;
  return (
    <>
      <Slider {...config}>{children}</Slider>
    </>
  );
};
export default Slick;
