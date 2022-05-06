import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag';
import styled from 'styled-components'
import { Link } from 'react-router-dom';


const PERSONS_QUERY = gql`
  query GetPeople{
    allPeople{
      name
      height
      mass
      gender
      homeworld
    }
  }
`  

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 80%;
  padding: 15px;
  grid-gap: 10px;
  margin: 'auto'
  justify-content: 'center'
`

const CardContainer = styled.div`
  background: '#fff';
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  height: auto;
  padding: 30px;
`

const  Persons = () => {
  const { loading, error, data } = useQuery(PERSONS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return(
    <Container>
    {
      data.allPeople.map(({ name}) =>{
        return(
          <CardContainer key={name} className="card">
          <div className="card-body">
            <h4 className="card-title">
              {name}
            </h4>
            <p className="card-text"></p>
            <Link to={`/person/${name}`} style={styles.linkStyle} className="btn btn-outline-info">
              Details
            </Link>
          </div>
        </CardContainer>
        )
      })
    }
  </Container>
  )
}

const styles = {
  linkStyle:{
  alignItems: 'center',
  backgroundImage: 'linear-gradient(135deg, #f34079 40%, #fc894d)',
  border: 0,
  borderRadius: '10px',
  boxSizing: 'border-box',
  color: '#fff',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  fontSize: 16,
  fontWeight: 700,
  height: 54,
  justifyContent: 'center',
  letterSpacing: '.4px',
  lineHeight: 1,
  maxWidth: '30%',
  paddingLeft: '20px',
  paddingRight: '20px',
  paddingTop: 3,
  textDecoration: 'none',
  textTransform: 'uppercase',
  userSelect: 'none',
  touchAction: 'manipulation'
}}

export default Persons;