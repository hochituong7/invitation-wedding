/* eslint-disable no-unused-vars */
import { Autocomplete, FormControl } from '@mui/material'
import TextField from '@mui/material/TextField'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import { Control, useController } from 'react-hook-form'

export interface AutocompleteOption {
  label: string
  value: string
  group: string
}
export interface IAutocompleteFieldProps {
  name: string
  control: Control<any> // Specify the type argument for the Control interface
  label?: string
  selectedValue?: string
  disabled?: boolean
  options: AutocompleteOption[]
  onSelected: (newValue: AutocompleteOption) => void
}

export function AutocompleteField({
  name,
  control,
  label,
  selectedValue,
  disabled,
  options,
  onSelected
}: IAutocompleteFieldProps) {
  const {
    field: { value = selectedValue, onChange, onBlur },
    fieldState: { invalid, error }
  } = useController({
    name,
    control
  })
  return (
    <FormControl variant="outlined" fullWidth margin="normal" error={invalid} disabled={disabled}>
      <Autocomplete
        id="highlights-auto-complete"
        size="small"
        options={options}
        onChange={(_event, newValue) => {
          onChange(newValue ? newValue.value : '')
          if (newValue) {
            onSelected(newValue)
          }
        }}
        value={options.find((option) => option.value === value) || null}
        groupBy={(option) => option.group}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField
            {...params}
            margin="normal"
            label={label}
            error={invalid}
            helperText={error?.message}
          />
        )}
        renderOption={(props, option, { inputValue }) => {
          const matches = match(option.label, inputValue, { insideWords: true })
          const parts = parse(option.label, matches)

          return (
            <li {...props}>
              <div>
                {parts.map((part, index) => (
                  <span
                    key={index}
                    style={{
                      fontWeight: part.highlight ? 700 : 400
                    }}>
                    {part.text}
                  </span>
                ))}
              </div>
            </li>
          )
        }}
      />
    </FormControl>
  )
}
