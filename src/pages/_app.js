import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import SideBar from '../components/sideBar';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Row>
        <Col xs={2}>      
          <SideBar />
        </Col>
        <Col xs={10}>
          <Component {...pageProps} />
        </Col> 
      </Row>
    </>
  )
}

export default MyApp
