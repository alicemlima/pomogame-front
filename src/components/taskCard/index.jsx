import { Button, Col, Row } from 'react-bootstrap';

import style from "./style.module.css"

export default function TaskCard({name, qtd, cpt}) {
  console.log(qtd)
  return (
      <Row className={style.body}>
        <Col>
          <h4>{name}</h4>
          <p>Subtitle</p>
        </Col>
        <Col>
          <h5>{cpt}/{qtd}</h5>
        </Col>
      </Row>
  )
}
