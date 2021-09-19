import React, { useState } from 'react'
import { Typography, Card, Tooltip } from 'antd'
import { EyeFilled, WarningOutlined } from '@ant-design/icons'
import moment from 'moment'
import PropTypes from 'prop-types'

function FoodCard (props) {
    return (
        <Card className='card' actions={
            [
                <Tooltip placement="bottom" title="Report"> <WarningOutlined /> </Tooltip>,
                <Tooltip placement="bottom" title="View"> <EyeFilled /> </Tooltip>
            ]
        }>
            <Card.Meta title={props.title} description={`Posted by ${props.poster} ${moment(props.timestamp).from()}`} />
            <br />
            <Typography.Paragraph>
                {props.description}
            </Typography.Paragraph>
        </Card>
    )
}

FoodCard.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    poster: PropTypes.string,
    timestamp: PropTypes.number
}

export default FoodCard