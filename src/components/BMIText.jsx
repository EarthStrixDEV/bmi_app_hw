import React from 'react'
import { Space, Card, Typography } from "antd";

const { Title } = Typography;

export default function BMIText({result}) {
    if (result < 18.5) {
        return (
            <Space 
                direction='vertical'
                size='small'
                style={{ display: "flex", maxWidth: "760px", margin: "0 auto" }}
            >
                <Card title='BMI Meaning'>
                    <Title level={1}>UnderWeight</Title>
                </Card>
            </Space>
        )
    } else if (result >= 18.5 && result <= 24.9) {
        return (
            <Space 
                direction='vertical'
                size='small'
                style={{ display: "flex", maxWidth: "760px", margin: "0 auto" }}
            >
                <Card title='BMI Meaning'>
                    <Title level={1}>Normal</Title>
                </Card>
            </Space>
        )
    } else if (result >= 25 && result <= 29.9) {
        return (
            <Space 
                direction='vertical'
                size='small'
                style={{ display: "flex", maxWidth: "760px", margin: "0 auto" }}
            >
                <Card title='BMI Meaning'>
                    <Title level={1}>Overweight</Title>
                </Card>
            </Space>
        )
    } else if (result >= 30) {
        return (
            <Space 
                direction='vertical'
                size='small'
                style={{ display: "flex", maxWidth: "760px", margin: "0 auto" }}
            >
                <Card title='BMI Meaning'>
                    <Title level={1}>Obese Class I</Title>
                </Card>
            </Space>
        )
    } else {
        return (
            <Space 
                direction='vertical'
                size='small'
                style={{ display: "flex", maxWidth: "760px", margin: "0 auto" }}
            >
                <Card title='BMI Meaning'>
                    <Title level={1}>Unknown</Title>
                </Card>
            </Space>
        )
    }
}
