import { useRef, useState } from "react";
import { Button, Space, InputNumber, Card, Typography } from "antd";

import BMIText from "./components/BMIText";

const { Title } = Typography;

function App() {
  const weight = useRef(null);
  const height = useRef(null);
  const [result, setResult] = useState(0);

  const calculateBMI = () => {
    setResult((weight.current.value / ((height.current.value / 100) * (height.current.value / 100))).toFixed(2));
  };

  return (
    <div className="App">
      <Space
        direction="vertical"
        size="small"
        style={{ display: "flex", maxWidth: "760px", margin: "0 auto" }}
      >
        <Title level={2}>Weight</Title>
        <InputNumber min={0} max={500} style={{ width: "100%" ,fontSize: '30px' }} ref={weight}></InputNumber>
        <Title level={2}>Height</Title>
        <InputNumber min={0} max={500} style={{ width: "100%" ,fontSize: '30px' }} ref={height}></InputNumber>
        <Space style={{marginBlock: '15px'}}>
          <Button type="primary" style={{ width: "100%" }} shape="round" size="large" onClick={calculateBMI}>
            Calculate
          </Button>
        </Space>
        <Card title='Your BMI'>
          <Title level={1}>{result}</Title>
        </Card>
        <br />
        <BMIText result={result} />
      </Space>
    </div>
  );
}

export default App;
