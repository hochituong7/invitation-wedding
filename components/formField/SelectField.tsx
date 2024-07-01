import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material'
import { Control, useController } from 'react-hook-form'

export interface SelectOption {
  label?: string
  value: string
}

export interface ISelectFieldProps {
  name: string
  control: Control<any>
  label?: string
  disabled?: boolean
  options: SelectOption[]
  selectedValue?: string
  // eslint-disable-next-line no-unused-vars
  onSelected: (newValue: string) => void
}

export function SelectField({
  name,
  control,
  label,
  disabled,
  options,
  selectedValue,
  onSelected
}: ISelectFieldProps) {
  const {
    field: { value = selectedValue, onChange, onBlur },
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
        onChange={(newValue) => {
          onChange(newValue ? newValue : '')
          if (newValue) {
            onSelected(newValue.target.value)
          }
        }}
        onBlur={onBlur}
        label={label}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>

      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  )
}
