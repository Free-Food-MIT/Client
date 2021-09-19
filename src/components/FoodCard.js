import React, { useState } from 'react'
import { Typography, Card, Tooltip } from 'antd'
import { EyeFilled, WarningOutlined } from '@ant-design/icons'
import moment from 'moment'
import PropTypes from 'prop-types'

/* Helper function to determine the time label */
function getTimeLabel(timestamp) {
    let eventTime = moment(timestamp)

    return `${eventTime.format("h:m a")} - ${eventTime.fromNow()} ${moment().diff(eventTime, 'seconds') <= 600 ? '🔥' : ''}`
}

function FoodCard(props) {
    return (
        <Card className='card' actions={
            [
                <Tooltip placement="bottom" title="View"> <EyeFilled /> </Tooltip>
            ]
        }>
            <Card.Meta title={props.title} description={getTimeLabel(props.timestamp)} />
            <br />
            <Typography.Paragraph>
                {`By ${props.poster} ${props.description ? `- ${props.description}` : ''}`}
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