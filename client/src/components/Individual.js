import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router";
import styled from 'styled-components'

const PERSON_QUERY = gql`
  query getPerson($name: String!) {
    person(name: $name) {
      name
      height
      mass
      gender
      homeworld
    }
  }
`; 


const  Individual = () =>{
  const { name } = useParams();

  const { loading, error, data } = useQuery(PERSON_QUERY, {
    variables: { name },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const person = data.person[0];
  const names = person.name;
  const height = person.height;
  const mass = person.mass;
  const gender = person.gender;
  const homeworld = person.homeworld;
  return (
    <MainContainer
      key={names}
      className="card"
      style={{ maxWidth: 30 + "rem", textAlignLast: "left" }}
    >
      <div className="card-body">
        <h4 className="card-title" style={{ textAlignLast: "left" }}>
          {names}
        </h4>
        <h6 className="card-subtitle mb-2 text-muted">Mass: {mass}</h6>
        <h6 className="card-subtitle mb-2 text-muted">Height: {height}</h6>
        <h6 className="card-subtitle mb-2 text-muted">Gender: {gender}</h6>
        <h6 className="card-subtitle mb-2 text-muted">Homeworld: {homeworld}</h6>
      </div>
    </MainContainer>
  );
}


const MainContainer = styled.div`
  display:flex;
  flex-direction: column;
  background: '#fff';
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  height: auto;
  padding: 30px;
  margin: auto;
  margin-top: 200px;
  background: linear-gradient(135deg, #f34079 40%, #fc894d);
  color: #fff;
`
export default Individual