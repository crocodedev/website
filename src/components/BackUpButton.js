import * as React from "react";
import BackUpButtonWrapper from "./BackUpButton/BackUpButtonWrapper";
import Button from "./Button";
import ImageStatic from "./Image";

const BackUpButton = () => {
  const [visibleButton, setVisibleButton] = React.useState("");

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > "2000") {
        setVisibleButton("backUp");
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
    <BackUpButtonWrapper>
      <Button handler={backUp} variant={visibleButton}>
        <ImageStatic src="/uploads/back-up-button.svg" />
      </Button>
    </BackUpButtonWrapper>
  );
};

export default BackUpButton;
