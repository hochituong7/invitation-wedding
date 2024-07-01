/* eslint-disable no-unused-vars */
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel
} from '@mui/material'
import { ChangeEvent } from 'react'
import { Control, useController } from 'react-hook-form'

export interface CheckboxOption {
  label?: string
  value: number | string
}

export interface ICheckboxGroupFieldProps {
  name: string
  control: Control<any>
  label?: string
  disabled?: boolean
  row: boolean
  options: CheckboxOption[]
}

export function CheckboxGroupField({
  name,
  control,
  label,
  disabled,
  row,
  options
}: ICheckboxGroupFieldProps) {
  const {
    field: { value = [], onChange, onBlur },
    fieldState: { invalid, error }
  } = useController({
    name,
    control
  })

  const handleChange = (optionValue: number | string) => (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.checked
      ? [...value, optionValue]
      : value.filter((v: number | string) => v !== optionValue)

    onChange(newValue)
  }

  return (
    <FormControl margin="normal" component="fieldset" error={invalid} disabled={disabled}>
      <FormLabel component="legend">{label}</FormLabel>
      <FormGroup row={row}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            control={
              <Checkbox
                checked={value.includes(option.value)}
                onChange={handleChange(option.value)}
                onBlur={onBlur}
              />
            }
            label={option.label}
          />
        ))}
      </FormGroup>
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  )
}
