import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Modal, Spin, Alert } from 'antd'
import { useDoAjax } from '../common/commonHooks'

const Demo2 = () => {
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [trigger, setTrigger] = useState(false)
  const [data, setData] = useState('')
  useEffect(() => {
    // only modal visbile triggle ajax
    if (!visible) return
    setLoading(true)
    axios.get('http://localhost:8989/list').then(({ data }) => {
      setData(data.data)
      setLoading(false)
    })
  }, [visible])

  const { result, loading: customLoading } = useDoAjax(trigger, {
    url: 'http://localhost:8989/list',
    method: 'get',
  })
  return (
    <div style={{ margin: '10%' }}>
      <h1>useEffect</h1>
      <Button type="primary" onClick={() => setVisible(true)}>show modal</Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <Spin tip="Loading..." spinning={loading}>
          <Alert
            message="Result"
            description={data}
            type="info"
          />
        </Spin>
      </Modal>
      <h1>use custom hook</h1>
      <Button type="primary" loading={customLoading} onClick={() => setTrigger(true)}>trigger ajax</Button>
      <div>result is <em>{result}</em></div>
    </div>
  )
}

export default Demo2
