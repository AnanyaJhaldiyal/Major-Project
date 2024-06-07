//quotation
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './css/Navbar2.css';
function ContainerOutsideExample() {
  return (
    <Container>
        <Container className='Quote'>
          <Navbar.Brand className='writing' > “Success usually comes to those who are too busy to be looking for it.” -Henry David Thoreau</Navbar.Brand>
        </Container>
    </Container>
  );
}

export default ContainerOutsideExample;