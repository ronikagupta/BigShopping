import React from 'react';
import { Card } from 'antd';
import { Button } from 'antd';
import { Sdata } from './Sdata'
import { Row, Col } from 'antd';

import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-bootstrap';
import Authnet from "../src/Authnet"
const { Meta } = Card;


export default function CartItems(props) {
    const dispatch = useDispatch()


    const data = useSelector((state) =>
        state.cardItems


    )
    console.log("length", data)

    return (
        <div>
            <Row>
                <Col span={12}>
                    <Card title="My Cart" style={{ fontSize: '15px' }}>

                        {data.map((data) => (
                            <Card type="inner" title='' extra={<a href="#"></a>}>
                                <img alt="example" height="20%" width="20%" src={data.cardData.imgscr} />
                                <Meta color="red" title={data.cardData.title} description={data.cardData.description} />

                                <div style={{ marginTop: "2%" }}>
                                    <Button>Save for later</Button>
                                    <Button>Remove</Button>
                                </div>
                            </Card>
                        ))}
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Price details" extra={<a href="#">More</a>} style={{ width: 500, height: 330, marginLeft: "5%", marginTop: "2%" }}>
                        <Row>
                            <Col span={12}>
                                <h6>Price of {data.length} Items</h6>
                                <h6>Discount</h6>
                                <h6>Buy more $ save more</h6>
                                <h6>Delivery Charges</h6>
                            </Col>
                            <Col span={12}>
                                <h6>Price of {data.length} Items</h6>

                                <h6 style={{ color: "red" }}>20% off</h6>
                                <h6 style={{ color: "red" }}>-$12,00</h6>
                                <h6 style={{ color: "red" }}>FREE</h6>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>

            <div className="site-button-ghost-wrapper">
                <a href='/Authnet'> <Button type="primary" danger ghost>
                    PLACE ORDER

                </Button></a>
            </div>

        </div >
    )
}
