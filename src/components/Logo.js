import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const StyledLink = styled(Link)`
  //poprawić
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
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  console.log(data);
  return (
    <Link to="/">
      <Img fixed={data.image.childImageSharp.fixed} />
    </Link>
  );
};
export default Logo;
