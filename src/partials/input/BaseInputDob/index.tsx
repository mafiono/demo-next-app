import React, { useEffect, useState } from 'react'
import BaseInputSelect from '../BaseInputSelect'
import { getDaysInMonth, startOfYear } from 'date-fns'
interface Props {
  onChange: (e: any) => void
  name: string
}
enum FORM_DATA {
  DAY = 'DAY',
  MONTH = 'MONTH',
  YEAR = 'YEAR',
}
const BaseInputDob = (props: Props) => {
  const [days, setDays] = useState([])
  const [months, setMonths] = useState(
    Array(12)
      .fill(0)
      .map((el, i) => ({
        value: i + 1,
        label: `${i + 1}`,
      })),
  )
  const [years, setYears] = useState([])
  const [formData, setFormData] = useState({})
  const [values, setValues] = useState<any>(null)

  useEffect(() => {
    getValues()
  }, [])

  const getValues = async () => {
    const year = new Date().getFullYear() - 18
    const years = Array.from(
      { length: year - 1900 },
      (value, index) => 1901 + index,
    )
      .map((el, i) => ({
        value: el,
        label: el,
      }))
      .reverse()

    const initialValue = startOfYear(new Date().setFullYear(years[0].value))
    const limitDate = getDaysInMonth(initialValue)
    const days = new Array(limitDate).fill(0).map((e, i) => ({
      label: i + 1,
      values: i + 1,
    }))
    setDays(days)
    setYears(years)
    setValues(initialValue)
    return props.onChange({
      target: {
        name: props.name,
        value: initialValue.toISOString(),
      },
    })
  }
  const handleChangeValue = (e: any) => {
    try {
      const { name, value } = e.target || {}
      var date = new Date(values)
      if (name === FORM_DATA.DAY) {
        date.setDate(value)
        setValues(date)
      } else if (name === FORM_DATA.MONTH) {
        date.setMonth(+value - 1)
        const limitDay = getDaysInMonth(date)
        const dayValue = date.getDay()
        const days = new Array(limitDay).fill(0).map((e, i) => ({
          label: i + 1,
          values: i + 1,
        }))
        setDays(days)
        if (+dayValue >= limitDay) {
          setValues(date.setDate(limitDay))
        } else {
          setValues(date)
        }
      } else if (name === FORM_DATA.YEAR) {
        date.setFullYear(value)
        setValues(date)
      }
      return props.onChange({
        target: {
          name: props.name,
          value: date.toISOString(),
        },
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <React.Fragment>
      <BaseInputSelect
        id='day'
        name={FORM_DATA.DAY}
        onChange={handleChangeValue}
        placeholder='day'
        data={days}
        value={formData[FORM_DATA.DAY]}
      />
      <BaseInputSelect
        id='month'
        placeholder='month'
        name={FORM_DATA.MONTH}
        onChange={handleChangeValue}
        data={months}
        value={formData[FORM_DATA.MONTH]}
      />
      <BaseInputSelect
        id='year'
        placeholder='year'
        name={FORM_DATA.YEAR}
        onChange={handleChangeValue}
        data={years}
        value={formData[FORM_DATA.YEAR]}
      />
    </React.Fragment>
  )
}

export default BaseInputDob
