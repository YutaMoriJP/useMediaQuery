import { menuOption } from "./data/menu";
import NavBar from "./Navbar";
import DesktopMenu from "./DesktopMenu";
import TabletMenu from "./TabletMenu";
import MobileMenu from "./MobileMenu";
import Globalstyle from "./GlobalStyles";
import Text from "./Text";
import Code from "./Code";
import styled from "styled-components";

//import Sandbox from "./Sandbox";

const Wrapper = styled.article`
  display: flex;
  justify-content: center;
`;

export default function App() {
  return (
    <div className="App">
      <Globalstyle />
      <NavBar
        Desktop={DesktopMenu}
        Mobile={MobileMenu}
        Tablet={TabletMenu}
        options={menuOption}
      />
      {/* <Sandbox>CodeSandbox</Sandbox> */}
      <Wrapper>
        <Text>
          Re-size your window to see the UI update and how{" "}
          <Code>useMediaQuery</Code> keeps track of the changes for you!
        </Text>
      </Wrapper>
      <Wrapper>
        <Text>
          EXPLANATION: The <Code>useMediaQuery</Code> hook uses the Window
          interface’s matchMedia function to check whether the given media query
          parameter matches document. So, if the media query is{" "}
          <Code>`(max-width: 550px)`</Code> and the viewport is{" "}
          <Code>500px</Code>, then the hook returns the boolean value{" "}
          <Code>true</Code>. The hook keeps track of document size changes, so
          if the screen is enlarged and the viewport is now 800px, then the
          state updates, and <Code>useMediaQuery</Code> now returns{" "}
          <Code>false</Code>. This hook should mostly be used for design
          purposes, like using a different navbar UI for desktop, tablet, and
          mobile.{" "}
        </Text>
      </Wrapper>
    </div>
  );
}
