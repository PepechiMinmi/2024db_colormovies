import { text } from "node:stream/consumers";

export default function Header() {
    return (
      <header style={headerStyle}>
        <h1>Color Movie Database</h1>
        <nav>
          <a href="/" style={linkStyle}>HOME</a>
        </nav>
      </header>
    );
  }
  
  const headerStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    height: '100px',
    backgroundColor: '#88bfbf',//'#66cccc',
    color: '#eb6101',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    zIndex: 1000,
  };
  
  const linkStyle = {
    margin: '0 10px',
    color: '#fff',
    textDecoration: 'none',
  };
  