import React, { useState, useReducer, useContext } from 'react'
import { Button, Modal } from 'antd'

const reducer = (state, action) => {
  switch(action.type) {
    case 'increase':
      return { value: state.value + 1}
    case 'decrease': 
      return { value: state.value - 1}
    default:
      return state
  }
}

const action = {
  increase: () => ({ type: 'increase' }),
  decrease: () => ({ type: 'decrease' })
}

const GlobalStore = React.createContext({ value: 0 })

const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { value: 0 })
  return (
    <GlobalStore.Provider value={{ state, action, dispatch }} >
      {props.children}
    </GlobalStore.Provider>
  )
}
const ChildrenInChildren = () => {
  const { state } = useContext(GlobalStore)
  return <div style={{ border: '1px solid grey', padding: 5 }}>
    <div>number is {state.value}</div>
  </div>
}

const Children = () => {
  const { action, dispatch } = useContext(GlobalStore)
  return <div style={{ border: '1px solid grey', padding: 5 }}>
    <Button type="primary" onClick={() => dispatch(action.increase())}>加</Button>
    <ChildrenInChildren />
  </div>
}

const ParentWrapper = () => {
  return <GlobalProvider>
    <Children />
  </GlobalProvider>
}

const Demo1 = () => {
  const [visible, setVisible] = useState(false)
  const [state, dispatch] = useReducer(reducer, { value: 0 }) 
  return (
    <div style={{ margin: '10%' }}>
      <h1>useState</h1>
      <Button type="primary" onClick={() => setVisible(true)}>show modal by useState</Button>
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
      <h1>useReducer</h1>
      <Button type="primary" onClick={() => dispatch(action.increase())}>加</Button>
      <Button style={{ marginLeft: 10 }} type="primary" onClick={() => dispatch(action.decrease())}>减</Button>
      <div>number is: {state.value}</div>
      <h1>useReducer + useContext</h1>
      <ParentWrapper />
    </div>
  )
}

export default Demo1
