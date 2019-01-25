import React, { useState } from 'react'
import { useDoAjax } from '../../common/commonHooks'
import { Modal, Button, Spin } from 'antd'

const NewApplyComp = ({ onSubmit }) => {
  const [visible, setVisible] = useState(false)
  const [selectedItem, setSelectItem] = useState('')
  const { result, loading } = useDoAjax(visible, {
    url: 'http://localhost:8989/sampleList',
    method: 'get',
  })
  const list = result || []
  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>+add new</Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={() => {
          setVisible(false)
          onSubmit(list && list.find((item, index) => index === selectedItem))
        }}
        onCancel={() => setVisible(false)}
      >
        <Spin tip="Loading..." spinning={loading}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {list && list.map((item, index) => {
              return (
                <div key={index} onClick={() => setSelectItem(index)}>
                  <img style={{ width: 50, height: 50 }} src={item.img} alt="pre" />
                  <div>{item.title}</div>
                  {selectedItem === index ? <div style={{ color: 'red' }}>selected</div> : null}
                </div>
              )
            })}
          </div>
        </Spin>
      </Modal>
    </div>
  )
}

export default NewApplyComp