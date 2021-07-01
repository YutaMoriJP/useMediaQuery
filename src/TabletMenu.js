import MenuOption from "./MenuOption";
import { useEffect } from "react";

const TabletMenu = ({ options }) => {
  useEffect(() => {
    return () => console.log("desktop unmounts");
  }, []);
  return (
    <>
      {options.slice(0, 2).map(option => (
        <MenuOption key={option.key} name={option.tablet} />
      ))}
    </>
  );
};

export default TabletMenu;
