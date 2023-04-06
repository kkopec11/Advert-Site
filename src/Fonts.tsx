import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: "MainFont";  
        src: local("Marta_Bold"),
          url("./font/Marta_Bold.otf") format("otf");
      }
      `}
  />
);

export default Fonts;
