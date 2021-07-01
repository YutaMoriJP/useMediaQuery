import { useEffect } from "react";
import MenuOption from "./MenuOption";

const MobileDesktop = ({ options }) => {
  useEffect(() => {
    return () => console.log("mobile unmounts");
  }, []);
  return (
    <>
      {options.slice(0, 1).map(option => (
        <MenuOption key={option.key} name={option.mobile} />
      ))}
    </>
  );
};

export default MobileDesktop;
