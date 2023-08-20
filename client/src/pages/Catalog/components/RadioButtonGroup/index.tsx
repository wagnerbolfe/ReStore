import { FormControl, RadioGroup, FormControlLabel, Radio } from "@mui/material";

interface Props {
  options: any[];
  onChange: (event: any) => void;
  selectedValue: string;
}

export default function RadioButtonGroup({ onChange, options, selectedValue }: Props) {
  return (
    <FormControl>
      <RadioGroup onChange={onChange} value={selectedValue} style={{ marginLeft: '18px' }}>
        {options.map(({ value, label }) => (
          <FormControlLabel value={value} control={<Radio size="small" />} label={label} key={value} />
        ))}
      </RadioGroup>
    </FormControl>
  )
}