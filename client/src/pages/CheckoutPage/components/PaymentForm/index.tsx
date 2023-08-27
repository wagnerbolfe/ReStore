import { Typography, Grid, TextField, FormControlLabel, Checkbox } from "@mui/material";
import AppTextInput from "../../../../components/AppTextInput";
import { useFormContext } from "react-hook-form";

export default function PaymentForm() {
  const { control } = useFormContext();
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Método de pagamento
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <AppTextInput
            name='nameOnCard'
            label='Nome no Cartão'
            control={control}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            //required
            id="cardNumber"
            label="Número do Cartão"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            //required
            id="expDate"
            label="Vencimento"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            //required
            id="cvv"
            label="CVV"
            helperText="Três números no verso do cartão"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
      </Grid>
    </>
  );
}