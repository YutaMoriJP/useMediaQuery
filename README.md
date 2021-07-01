# useMediaQuery hooks

    EXPLANATION: The useMediaQuery hook uses the Window
          interface’s matchMedia function to check whether the given media query
          parameter matches document. So, if the media query is
          `(max-width: 550px)` and the viewport is
           500px, then the hook returns the boolean value
           true. The hook keeps track of document size changes, so
          if the screen is enlarged and the viewport is now 800px, then the
          state updates, and useMediaQuery now returns
          false. This hook should mostly be used for design
          purposes, like using a different navbar UI for desktop, tablet, and
          mobile.
