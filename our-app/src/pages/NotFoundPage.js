import React from "react";
import PageHeading from "../common/PageHeading";

const NotFoundPage = () => {
  return (
    <div>
      <PageHeading home={"Home"} pagename={"Page Not Found"} />
      <div className="flex justify-center items-center m-10 ">
            <img src="./images/logo.png" alt="logo"  width={500} height={500} />
      </div>
    </div>
  );
};

export default NotFoundPage;
