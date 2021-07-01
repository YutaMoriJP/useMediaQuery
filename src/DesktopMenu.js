import MenuOption from "./MenuOption";
import { useEffect } from "react";

const DesktopMenu = ({ options }) => {
  useEffect(() => {
    return () => console.log("desktop unmounts");
  }, []);
  return (
    <>
      {options.map(option => (
        <MenuOption key={option.key} name={option.desktop} />
      ))}
    </>
  );
};

export default DesktopMenu;
