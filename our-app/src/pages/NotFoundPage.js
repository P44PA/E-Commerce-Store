import React from "react";
import PageHeading from "../common/PageHeading";

const NotFoundPage = () => {
  return (
    <div>
      <PageHeading home={"404"} pagename={"Page Not Found"} />
      <div className="flex justify-center items-center m-10 ">
            <img src="./images/NothinHere.png" alt="logo"   />

      </div>
    </div>
  );
};

export default NotFoundPage;
