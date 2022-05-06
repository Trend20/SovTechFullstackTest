import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link to="/" style={styles.linkStyle}>Home</Link>
    </div>
  )
}

const styles = {
  linkStyle:{
    padding: 18,
    fontWeight: 'bold',
    textDecoration: 'none',
    width: 50,
    display: 'flex',
    marginLeft: 30
  }
}

export default Header;