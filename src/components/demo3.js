import React, { useState } from 'react'
import { Button, Modal, Row, Col } from 'antd'
import { useCustomForm } from '../common/commonHooks'

import NewApplyComp from './demo3/newApplyComp'

const schema = [
  {
    name: 'applyReason',
    label: 'applyReason',
    type: 'input',
    rule: {
      required: true,
    }
  }
]
const values = {
  applyReason: 'default reason'
}


const Demo3 = () => {
  const [data, setData] = useState({})
  const handleSubmit = (values) => {
    const merged = {
      ...data,
      ...values
    }
    window.alert(JSON.stringify(merged))
  }
  const handleModalSubmit = (value) => {
    setData({
      material: value
    })
  }
  const { renderSchema, submit } = useCustomForm({
    values,
    schema,
    onSubmit: handleSubmit,
  })

  const { material = {} } = data
  return (
    <div style={{ margin: '10%' }}>
      <h1>A modal form example</h1>
      <NewApplyComp onSubmit={handleModalSubmit}/>
      <div>
        you select: {material && material.title}
      </div>
      <div>
        {renderSchema()}
      </div>
      <Button type="primary" onClick={submit}>submit</Button>
    </div>
  )
}

export default Demo3
