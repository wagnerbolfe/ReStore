import { Box, Paper, Typography, Grid, Button } from "@mui/material";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from "@mui/lab";
import { useAppDispatch } from "../../../store/configureStore";
import useProducts from "../../../hooks/useProducts";
import { Product } from "../../Catalog/components/ProductCard";
import agent from "../../../api/agent";
import { setProduct } from "../../Catalog/catalogSlice";
import AppTextInput from "../../../components/AppTextInput";
import AppSelectList from "../../../components/AppSelectList";
import AppDropzone from "../../../components/AppDropzone";
import { validationSchema } from "../productValidation";
import { Header } from "../../../components/Header";
import { InventoryDetailsContainer } from "./styles";

interface Props {
  product?: Product;
  cancelEdit: () => void;
}

export default function ProductForm({ product, cancelEdit }: Props) {
  const { control, reset, handleSubmit, watch, formState: { isDirty, isSubmitting } } = useForm({
    resolver: yupResolver<any>(validationSchema)
  });
  const { brands, types } = useProducts();
  const watchFile = watch('file', null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (product && !watchFile && !isDirty) reset(product);
    return () => {
      if (watchFile) URL.revokeObjectURL(watchFile.preview);
    }
  }, [product, reset, watchFile, isDirty])

  async function handleSubmitData(data: FieldValues) {
    try {
      let response: Product;
      if (product) {
        response = await agent.Admin.updateProduct(data);
      } else {
        response = await agent.Admin.createProduct(data);
      }
      dispatch(setProduct(response));
      cancelEdit();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Header />
      <InventoryDetailsContainer>
        <Box sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
            Detalhes do produto
          </Typography>
          <form onSubmit={handleSubmit(handleSubmitData)}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <AppTextInput control={control} name='name' label='Nome do produto' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <AppSelectList control={control} items={brands} name='brand' label='Marca' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <AppSelectList control={control} items={types} name='type' label='Categoria' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <AppTextInput type='number' control={control} name='price' label='Preço' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <AppTextInput type='number' control={control} name='quantityInStock' label='Quantidade no estoque' />
              </Grid>
              <Grid item xs={12}>
                <AppTextInput control={control} multiline={true} rows={4} name='description' label='Descrição' />
              </Grid>
              <Grid item xs={12}>
                <Box display='flex' justifyContent='space-between' alignItems='center'>
                  <AppDropzone control={control} name='file' />
                  {watchFile ? (
                    <img src={watchFile.preview} alt="preview" style={{ maxHeight: 200 }} />
                  ) : (
                    <img src={product?.pictureUrl} alt={product?.name} style={{ maxHeight: 200 }} />
                  )}
                </Box>

              </Grid>
            </Grid>
            <Box display='flex' justifyContent='space-between' sx={{ mt: 3 }}>
              <Button onClick={cancelEdit} variant='contained' color='inherit'>Cancelar</Button>
              <LoadingButton loading={isSubmitting} type='submit' variant='contained' color='success'>Salvar</LoadingButton>
            </Box>
          </form>
        </Box>
      </InventoryDetailsContainer>
    </>
  )
}