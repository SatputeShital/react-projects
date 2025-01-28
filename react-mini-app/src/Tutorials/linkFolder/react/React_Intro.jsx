import LeftSidebar from "../Left-sidebarReact";

const React_Intro = () => {
  return (
    <>
      <div className="row">
        <div class="col-md-2 customDiv">
         <LeftSidebar />
        </div>
        <div class="col-md-8">
          <h2>React Introduction</h2>
          <h5>What is React?</h5>
          <p>
            React, sometimes referred to as a frontend JavaScript framework, is
            a JavaScript library created by Facebook. React is a tool for
            building UI components.
          </p>
        </div>
      </div>
    </>
  );
};

export default React_Intro;
