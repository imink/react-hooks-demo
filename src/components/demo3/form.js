import React, { useState } from 'react'
import { Modal, Button } from 'antd'

const NewApplyComp = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>+新增申请</Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  )
}