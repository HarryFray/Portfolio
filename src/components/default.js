import React from "react";
import styled from "styled-components";
import { PROJECTS } from "./gallery";
import { Link } from "@reach/router";

const NON_POJECT_PAGES = [
  { title: "About me", slug: "about-me" },
  { title: "Approach", slug: "approach" },
  { title: "Design", slug: "design" },
  { title: "The Code", slug: "the-code" }
];

/* gets project data using slug from url */
const getProjectData = slug => {
  return [...PROJECTS, ...NON_POJECT_PAGES].filter(
    proj => proj.slug === slug
  )[0];
};

const DefaultBase = ({ projectId, className }) => {
  const { title, img } = getProjectData(projectId);
  return (
    <div className={className}>
      <h1 style={{ margin: "20px" }}>{`${title} comming soon!`}</h1>
      <div
        style={{
          width: "100%",
          height: "10vh",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img ||
            ""})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100vw 100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "white"
          }}
        >
          <h5>Go Back</h5>
        </Link>
      </div>
      <h2>
        Sorry, this page has not been built yet. <br /> Check back Feb 16, 2020!
      </h2>
    </div>
  );
};

const Default = styled(DefaultBase)`
  position: absolute;
  top: 10vh;
  text-align: center;
  width: 100vw;
`;

export default Default;
