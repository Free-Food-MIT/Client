import React, { useState, useEffect } from 'react'
import { Typography, message, Row, Col, Spin, Empty, Button, Modal, Form, Input, Card } from 'antd'
import { PlusCircleOutlined, UserOutlined, MailOutlined, PushpinOutlined, FileTextOutlined, QuestionOutlined } from '@ant-design/icons'
import FoodCard from '../components/FoodCard'
import config from './../config'
import PropTypes from 'prop-types'

const { Title } = Typography

function AddFoodEntryForm(props) {
    const [visible, setVisible] = useState(false)
    const [confirmLoading, setConfirmLoading] = useState(false);

    const [poster, setPoster] = useState('')
    const [posterEmail, setPosterEmail] = useState('')
    const [location, setLocation] = useState('')
    const [food, setFood] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = async () => {
        fetch(`${config.apiUrl}/food/create`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ poster, posterEmail, location, food, description }) }).then(async (res) => {
            if (res.status === 200) {
                message.success('Food item has been created.')
                setVisible(false)
                setPoster('')
                setPosterEmail('')
                setLocation('')
                setFood('')
                setDescription('')
                await props.fetchFoodEntries()
            }
        }).catch((err) => message.error(err))
    }

    const handleOk = () => {
        setConfirmLoading(true);
        handleSubmit().then(() => {
            setVisible(false);
            setConfirmLoading(false);
        })
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };

    return (<>
        <Button icon={<PlusCircleOutlined />} onClick={() => setVisible(!visible)}> Add New </Button>
        <Modal
            title="Add Free Food"
            visible={visible}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            okText="Submit"
        >
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{}}
                autoComplete="off"
            >
                <Form.Item
                    label="Poster"
                    name="poster"
                    rules={[{ required: true, message: 'Please input your name.' }]}
                >
                    <Input placeholder="Name" prefix={<UserOutlined />} value={poster} onChange={(e) => setPoster(e.target.value)} />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="posterEmail"
                    rules={[{ required: true, message: 'Please input your MIT email!' }]}
                >
                    <Input placeholder="kerb@mit.edu" prefix={<MailOutlined />} value={posterEmail} onChange={(e) => setPosterEmail(e.target.value)} />
                </Form.Item>
                <Form.Item
                    label="Location"
                    name="location"
                    rules={[{ required: true, message: 'Please input the location of the food!' }]}
                >
                    <Input placeholder="La Sala" prefix={<PushpinOutlined />} value={location} onChange={(e) => setLocation(e.target.value)} />
                </Form.Item>
                <Form.Item
                    label="Food"
                    name="food"
                    rules={[{ required: true, message: 'Please input the the type(s) of food available!' }]}
                >
                    <Input placeholder="Pizza" prefix={<QuestionOutlined />} value={food} onChange={(e) => setFood(e.target.value)} />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                >
                    <Input placeholder="Quantity, times, and any other info" prefix={<FileTextOutlined />} value={description} onChange={(e) => setDescription(e.target.value)} />
                </Form.Item>
            </Form>
        </Modal>
    </>)
}

AddFoodEntryForm.propTypes = {
    fetchFoodEntries: PropTypes.func
}

function Landing() {
    const [loaded, setLoaded] = useState(true)
    const [foodEntries, setFoodEntries] = useState([])

    async function fetchFoodEntries() {
        console.log(process.env)
        let response = (await fetch(config.apiUrl + '/food').then((res) => res.json()))
        setFoodEntries(response)
        setLoaded(true)
    }

    useEffect(() => {
        fetchFoodEntries().catch(() => message.error('Failed to fetch food entries from the API.'))
    }, [])

    return (
        <main>

            {
                loaded ? (
                    <Row gutter={[16]} justify='center'>
                        <Col xs={24} md={18}>
                            <Col span={24} className='text-center'>
                                <Title> FreeFood @ MIT 🍌 </Title>
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
                                <Card className='transparent-card' >
                                    <AddFoodEntryForm fetchFoodEntries={fetchFoodEntries} />
                                </Card>
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