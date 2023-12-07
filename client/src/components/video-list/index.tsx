import { Col, Row } from 'antd'
import React from 'react'
import VideoCard from '../video-card'

export default function VideoList() {
  return (
    <Row gutter={14}>
      <Col span={8}>
        <VideoCard />
      </Col>
    </Row>
  )
}
