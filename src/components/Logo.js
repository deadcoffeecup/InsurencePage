import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const StyledLink = styled(Link)`
  justify-content: flex-start;
  margin: 0;
  padding-top: 0;
`;
const Logo = () => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "logo.png" }) {
        id
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  console.log(data);
  return (
    <StyledLink to="/">
      <Img fixed={data.image.childImageSharp.fixed} />
    </StyledLink>
  );
};
export default Logo;
