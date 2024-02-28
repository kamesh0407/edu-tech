import styled from "styled-components";
import Leftside from "./Leftside";
import Main from "./Main";
import Rightside from "./Rightside";

const Home = (props) => {
  return (
    <Container>
      <Section>
        <h5>
          {/* <a>Hiring in a hurry? - </a> */}
        </h5>
        <p>
        Explore the world through knowledge and share the journey with us.  
        </p>
      </Section>
      <Layout>
        <Leftside/>    
        <Main/>
        <Rightside/>

      </Layout>
    </Container>
  );
};


 //Need to remove these two left and right side



const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;

const Content = styled.div`
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
`;

const Section = styled.section`
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  /* h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  } */

  p {
    font-size: 20px;
    margin-right: 90px;
    color: #434649;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 0px;
  row-gap: 25px;
  /* grid-template-row: auto; */
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;




export default Home;

