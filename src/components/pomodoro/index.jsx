import { Col, Row } from "react-bootstrap";
import style from "./style.module.css";

export default function Pomodoro() {
    return (
        <Col>
            <Row>
                {/*TODO INTERVALOS */}
            </Row>
            <Row className={style.counter}>
                <div>
                    <h1>25:00</h1>
                </div>
            </Row>
            <Row>
                {/*TODO PREVISÃO DE TERMINO */}
            </Row>
        </Col>

    )
}