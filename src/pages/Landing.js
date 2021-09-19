import React, { useState, useEffect } from 'react'
import { Typography, Row, Col, Spin, Card } from 'antd'

const { Title } = Typography

function Landing() {
    const [loaded, setLoaded] = useState(true)
    return ( <
        main >

        {
            loaded ? ( <
                Row gutter = {
                    [16] }
                justify = 'center' >
                <
                Col xs = { 24 }
                md = { 18 } >
                <
                Col span = { 24 }
                className = 'text-center' >
                <
                Title > FreeFood @MIT < /Title> <
                /Col> <
                Row gutter = {
                    [4] } >
                <
                Col span = { 6 } >
                <
                Card className = 'card' >
                <
                Card.Meta title = "Pizza in 10-250"
                description = "15 slices left" / >
                <
                /Card> <
                /Col> <
                /Row> <
                /Col> <
                /Row>
            ) : ( <
                div className = 'text-center'
                style = {
                    { height: '85vh', padding: '40vh' } } >
                <
                Spin size = 'large' / >
                <
                /div>
            )
        }

        <
        /main>
    )
}

export default Landing