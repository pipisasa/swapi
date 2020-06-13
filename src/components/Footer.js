import React, { Component } from 'react';
import { Container } from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <footer className="Footer">
        <Container className="py-5">
          made by <a href="https://github.com/pipisasa" target="_blank" rel="noopener noreferrer">pipisasa</a> with ❤️
        </Container>
      </footer>
    );
  }
}

export default Header;
