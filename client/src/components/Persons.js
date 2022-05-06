import React from 'react'
import {useQuery, gql} from 'graphql';
import { Link } from 'react-router-dom';


const PERSONS_QUERY = gql`
  queryGetPeople{
    allPeople{
      name
      height
      mass
      gender
      homeworld
    }
  }
`  

function Persons() {
  const { loading, error, data } = useQuery(PERSONS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.allPeople.map(({ name, gender }) => (
    <div key={name} className="card" style={{ maxWidth: 30 + "rem" }}>
      <div className="card-body">
        <h4 className="card-title" style={{ textAlignLast: "left" }}>
          {name}
        </h4>
        <p className="card-text"></p>
        <Link to={`/person/${name}`} className="btn btn-outline-info">
          Details
        </Link>
      </div>
    </div>
  ));
}

export default Persons;