import { Nav, Navbar } from 'react-bootstrap';

const MainNav = () => {
  return (
    <Navbar className='shadow-sm fixed-top' bg='white' expand='lg'>
      <Navbar.Brand href='#home' className='mr-1'>
        tony
      </Navbar.Brand>
      <small className='text-muted mt-1'>v0.1.1</small>

      <Nav.Link href='#link' className='p-0 pt-1'>
        <img width='30px' height='30px' src='/linkedin.webp'></img>
      </Nav.Link>
      <Nav.Link href='#link' className='p-0 pt-1'>
        <img width='30px' height='30px' src='/twitter.webp'></img>
      </Nav.Link>
      <Nav.Link href='#link' className='p-0 pt-1'>
        <img width='30px' height='30px' src='/github.svg'></img>
      </Nav.Link>

      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link href='#clients'>Clients</Nav.Link>
          <Nav.Link href='#work'>Work</Nav.Link>
          <Nav.Link href='#services'>Services</Nav.Link>
          <Nav.Link href='#articles'>Articles</Nav.Link>
          <Nav.Link href='#about'>About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default MainNav;
