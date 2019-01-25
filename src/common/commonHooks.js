import React, { useState, useEffect } from 'react'
import { message, Form, Input } from 'antd'
import axios from 'axios'

export const useDoAjax = (trigger = false, {
  url,
  data = {},
  method = 'get'
}) => {
  const [loading, setLoading] = useState(false)    
  const [result, setResult] = useState('')
  useEffect(() => {
    if (trigger === false) return
    setLoading(true)
    axios({
      url,
      method,
      data,
    }).then(({ data }) => {
      setResult(data.data)  
      setLoading(false)
    }).catch(error => {
      setLoading(false)
    })
  }, [trigger])
  return { result, loading }
}


// const schema = [
//   {
//     name: 'applyReason',
//     label: 'applyReason',
//     type: 'input',
//     rule: {
//       required: true,
//     }
//   }
// ]
// const values = {
//   applyReason: 'default reason'
// }
/**
 * ]
 */
export const useCustomForm = ({
  values = {},
  schema = {},
  onSubmit,
  onChange,
  hasError,
}) => {
  const formItems = schema.map(item => {
    const [formValue, setFormValue] = useState({
      value: values[item.name] || ''
    })  
    return {
      schema: item,
      value: formValue.value,
      onChange(e) {
        return setFormValue({ value: e.target.value })
      },
      formValue,
      setFormValue,
    } 
  })
  
  const renderSchema = () => {
    return (
      <Form>
        {
          formItems.map((item, index) => {
            let formEle
            switch (item.schema.type) {
              case 'input':
                formEle = <Input value={item.value} onChange={item.onChange}/>
                break
              default:
                formEle = null
            }
            return (
              <Form.Item key={index} label={item.schema.label} required={item.schema.rule.required}>
                {formEle} 
              </Form.Item>
            )
          })
        }
      </Form>
    )
  }
  
  const formApi = {
    renderSchema,
    submit() {
      if (onSubmit) {
        const formValues = {}
        formItems.forEach(item => {
          formValues[item.schema.name] = item.value
        })
        onSubmit(formValues)
      }
    },
  }

  return formApi
}