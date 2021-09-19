import React, { useState } from 'react'
import { Typography, Card, Tooltip } from 'antd'
import { EyeFilled, WarningOutlined } from '@ant-design/icons'
import moment from 'moment'
import PropTypes from 'prop-types'

/* Helper function to determine the time label */
function getTimeLabel (timestamp) {
    let now = moment()
    let eventTime = moment(timestamp)
    let moreInfo = eventTime.format("M/d")
    if (eventTime < now.add(2, "hours")) {
        moreInfo = "right now 🔥"
    } else if (eventTime < now.add(1, "day").startOf("day")) {
        moreInfo = "today"
    }
    return `${eventTime.format("h:m a")} - ${moreInfo}`
}

function FoodCard (props) {
    return (
        <Card className='card' actions={
            [
                <Tooltip placement="bottom" title="View"> <EyeFilled /> </Tooltip>
            ]
        }>
            <Card.Meta title={props.title} description={getTimeLabel(props.timestamp)} />
            <br />
            <Typography.Paragraph>
                {`By ${props.poster} @ ${props.description}`}
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