import { Box, Pagination, Typography } from "@mui/material";
import { MetaData } from "../../../../models/pagination";

interface Props {
  metaData: MetaData,
  onPageChange: (page: number) => void;
}

export default function AppPagination({ metaData, onPageChange }: Props) {
  const { currentPage, pageSize, totalCount, totalPages } = metaData;
  return (
    <Box display='flex' justifyContent='space-between' alignItems='center'>
      <Typography>Mostrando {(currentPage - 1) * pageSize + 1}-
        {currentPage * pageSize > totalCount!
          ? totalCount
          : currentPage * pageSize
        } de {totalCount} itens</Typography>
      <Pagination count={totalPages} page={currentPage} onChange={(e, page) => onPageChange(page)} shape="rounded" />
    </Box>
  )
}