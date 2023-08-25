import { Typography, Grid, TextField, FormControlLabel, Checkbox } from "@mui/material";
import AppTextInput from "../../../../components/AppTextInput";
import { useFormContext } from "react-hook-form";
import AppCheckbox from "../../../../components/AppCheckbox";

export default function AddressForm() {
  const { control, formState } = useFormContext();
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Endereço de entrega
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <AppTextInput control={control} name="fullName" label="Nome Completo" />
        </Grid>
        <Grid item xs={12}>
          <AppTextInput control={control} name="address1" label="Endereço 1" />
        </Grid>
        <Grid item xs={12}>
          <AppTextInput control={control} name="address2" label="Endereço 2" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <AppTextInput control={control} name="city" label="Cidade" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <AppTextInput control={control} name="state" label="Estado" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <AppTextInput control={control} name="zip" label="CEP" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <AppTextInput control={control} name="country" label="País" />
        </Grid>
        <Grid item xs={12}>
          <AppCheckbox disabled={!formState.isDirty} name='saveAddress' label='Salvar este endereço como padrão' control={control} />
        </Grid>
      </Grid>
    </>
  );
}