import React, { useState, useEffect } from 'react'
import { Typography, message, Row, Col, Spin, Empty } from 'antd'
import FoodCard from '../components/FoodCard'

const { Title } = Typography

function Landing() {
    const [loaded, setLoaded] = useState(true)
    const [foodEntries, setFoodEntries] = useState([])

    useEffect(() => {
        async function fetchFoodEntries() {
            console.log(process.env)
            let response = (await fetch(process.env.REACT_APP_API_URL + '/food').then((res) => res.json()))
            setFoodEntries(response)
            setLoaded(true)
        }
        fetchFoodEntries().catch(() => message.error('Failed to fetch food entries from the API.'))
    }, [])

    return (
        <main>

            {
                loaded ? (
                    <Row gutter={[16]} justify='center'>
                        <Col xs={24} md={18}>
                            <Col span={24} className='text-center'>
                                <Title> FreeFood@MIT </Title>
                            </Col>
                            <Row gutter={[12, 24]} justify='center'>
                                {
                                    foodEntries.length > 0 ? foodEntries.map(foodEntry =>
                                    (
                                        <Col xs={24} sm={24} md={12} lg={6} gutter={[4, 4]}>
                                            <FoodCard title={`${foodEntry.food} at ${foodEntry.location}`} description={foodEntry.description} timestamp={+ new Date(foodEntry.createdAt)} poster={foodEntry.poster} />
                                        </Col>
                                    )
                                    ) : <Empty description="Sorry, it seems like there's no free food reported right now. Please try again later." />
                                }

                            </Row>
                        </Col>
                    </Row>
                ) : (
                    <div className='text-center' style={{ height: '85vh', padding: '40vh' }}>
                        <Spin size='large' />
                    </div>
                )
            }

        </main>
    )
}

export default Landing