import React from "react";
import styled from "styled-components";
// import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
// import { animateScroll as scroll } from "react-scroll";
import Default from "./default";

/* reach router puts the url query on react props!!! */
const ProjectBase = ({ projectId, className }) => {
  //   const handleScroll = () => {
  //     scroll.scrollToBottom();
  //   };

  return (
    <div className={className}>
      <div className="Section">
        <Default projectId={projectId} />
        {/* <div className="ScrollCTA" onClick={handleScroll}>
            <ArrowDownwardIcon className="Icon" />
            <h3>Scroll Down</h3>
          </div> */}
      </div>
    </div>
  );
};

const Project = styled(ProjectBase)`
  width: 100vw;
  height: 100vh;
  background-color: white;
  position: fixed;

  .Section {
    height: 100vh;
  }

  .ScrollCTA {
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100vw;
    align-items: center;
    margin: 20px;
    flex-direction: column-reverse;
    h3 {
      margin: 0;
    }
  }
`;
export default Project;
