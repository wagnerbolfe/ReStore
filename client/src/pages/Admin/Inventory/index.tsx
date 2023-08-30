import { LoadingButton } from "@mui/lab";
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useState } from "react";
import agent from "../../../api/agent";
import { useAppDispatch } from "../../../store/configureStore";
import { removeProduct, setPageNumber } from "../../Catalog/catalogSlice";
import AppPagination from "../../Catalog/components/AppPagination";
import { Product } from "../../Catalog/components/ProductCard";
import { formatMoney } from "../../../utils/formatMoney";
import useProducts from "../../../hooks/useProducts";
import ProductForm from "../ProductForm";
import { Delete, Edit } from "@mui/icons-material";
import { InventoryContainer } from "./styles";
import { Header } from "../../../components/Header";

export default function Inventory() {
  const { products, metaData } = useProducts();
  const dispatch = useAppDispatch();
  const [editMode, setEditMode] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [target, setTarget] = useState(0);

  function handleSelectProduct(product: Product) {
    setSelectedProduct(product);
    setEditMode(true);
  }

  function handleDeleteProduct(id: number) {
    setLoading(true);
    setTarget(id)
    agent.Admin.deleteProduct(id)
      .then(() => dispatch(removeProduct(id)))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }

  function cancelEdit() {
    if (selectedProduct) setSelectedProduct(undefined);
    setEditMode(false);
  }

  if (editMode) return <ProductForm product={selectedProduct} cancelEdit={cancelEdit} />

  return (
    <>
      <Header />
      <InventoryContainer>
        <Box display='flex' justifyContent='space-between' marginBottom={3}>
          <Typography sx={{ p: 2 }} variant='h4'>Inventário</Typography>
          <Button onClick={() => setEditMode(true)} sx={{ m: 2 }} size='large' variant='contained'>Novo Produto</Button>
        </Box>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="left">Produto</TableCell>
                <TableCell align="right">Preço</TableCell>
                <TableCell align="center">Categoria</TableCell>
                <TableCell align="center">Marca</TableCell>
                <TableCell align="center">Quantidade</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.id}
                  </TableCell>
                  <TableCell align="left">
                    <Box display='flex' alignItems='center'>
                      <img src={product.pictureUrl} alt={product.name} style={{ height: 50, marginRight: 20 }} />
                      <span>{product.name}</span>
                    </Box>
                  </TableCell>
                  <TableCell align="right">{formatMoney(product.price)}</TableCell>
                  <TableCell align="center">{product.type}</TableCell>
                  <TableCell align="center">{product.brand}</TableCell>
                  <TableCell align="center">{product.quantityInStock}</TableCell>
                  <TableCell align="right">
                    <Button onClick={() => handleSelectProduct(product)} startIcon={<Edit />} />
                    <LoadingButton
                      loading={loading && target === product.id}
                      onClick={() => handleDeleteProduct(product.id)}
                      startIcon={<Delete />} color='error' />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {metaData &&
          <Box sx={{ pt: 2 }}>
            <AppPagination
              metaData={metaData}
              onPageChange={(page: number) => dispatch(setPageNumber({ pageNumber: page }))} />
          </Box>
        }
      </InventoryContainer>
    </>
  )
}