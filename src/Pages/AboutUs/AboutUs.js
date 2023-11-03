import React from "react";
import ReactGA from "react-ga";

const AboutUs = () => {
  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });

  return (
    <div>
      <h1>AboutUs</h1>
      <iframe
        width="729"
        height="362"
        seamless
        frameborder="0"
        scrolling="no"
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRnC5uEHoF7E9J9YXw_fxIWXJ9mTYmYb7L6WryRg7Xd32RFB0zmjxUPYGHcljILNsci7YsUJsV5m1Cn/pubchart?oid=1271570570&amp;format=interactive"
      ></iframe>
    </div>
  );
};

export default AboutUs;
