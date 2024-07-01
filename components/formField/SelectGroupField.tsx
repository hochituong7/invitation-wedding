/* eslint-disable no-unused-vars */
import { FormControl, FormHelperText, InputLabel, Select } from '@mui/material'
import { Control, useController } from 'react-hook-form'

export interface SelectGroupOption {
  label?: string
  value: { label: string; value: string }[]
}

export interface ISelectGroupFieldProps {
  name: string
  control: Control<any>
  label?: string
  disabled?: boolean
  options: SelectGroupOption[]
}

export function SelectGroupField({
  name,
  control,
  label,
  disabled,
  options
}: ISelectGroupFieldProps) {
  const {
    field: { value = '', onChange, onBlur },
    fieldState: { invalid, error }
  } = useController({
    name,
    control
  })

  return (
    <FormControl
      variant="outlined"
      size="small"
      fullWidth
      margin="normal"
      error={invalid}
      disabled={disabled}>
      <InputLabel id={`${name}_label`}>{label}</InputLabel>
      <Select
        labelId={`${name}_label`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        label={label}>
        {/* <MenuItem value="">
          <em>None</em>
        </MenuItem> */}
        {options.map((group) => (
          <optgroup key={group.label} label={group.label}>
            {group.label}
            {group.value.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </optgroup>
        ))}
      </Select>

      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  )
}
