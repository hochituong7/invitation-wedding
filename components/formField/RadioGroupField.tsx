import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup
} from '@mui/material'
import { Control, useController } from 'react-hook-form'

export interface RadioOption {
  label?: string
  value: number | string
}

export interface IRadioGroupFieldProps {
  name: string
  control: Control<any>
  label?: string
  disabled?: boolean
  row: boolean
  options: RadioOption[]
}

export function RadioGroupField({
  name,
  control,
  label,
  disabled,
  row,
  options
}: IRadioGroupFieldProps) {
  const {
    field: { value = '', onChange, onBlur },
    fieldState: { invalid, error }
  } = useController({
    name,
    control
  })

  return (
    <FormControl margin="normal" component="fieldset" error={invalid} disabled={disabled}>
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup name={name} value={value} onChange={onChange} onBlur={onBlur} row={row}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  )
}
