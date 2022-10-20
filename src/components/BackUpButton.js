import * as React from "react";
import BackUpButtonContent from "./BackUpButton/BackUpButtonContent";

const BackUpButton = () => {
  const [visibleButton, setVisibleButton] = React.useState("");

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > "1000") {
        setVisibleButton("on");
      } else {
        setVisibleButton(null);
      }
    });
  }, [visibleButton]);

  const backUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <BackUpButtonContent onClick={backUp} variant={visibleButton} />
  );
};

export default BackUpButton;
