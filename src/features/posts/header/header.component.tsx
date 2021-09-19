import { Navbar, Container } from "react-bootstrap";

function Header() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand>
                <img src="https://www.brandbastion.com/hubfs/black.svg" style={{width:'200px',borderWidth:'0px',border:'0px'}}alt="black" title="black" width="200"/>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Go to <a href="https://www.brandbastion.com/" rel="noreferrer noopener" target="_blank">BrandBastion</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;