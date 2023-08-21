import { Skeleton } from "@mui/material";
import { ProductCardSkeletonContainer } from "./styles";

export default function ProductCardSkeleton() {
  return (
    <ProductCardSkeletonContainer>
      <Skeleton animation="wave" variant="circular" width={100} height={100} />
      <Skeleton animation="wave" variant="text" sx={{ width: "60px", marginTop: '18px', marginBottom: '18px' }} />
      <Skeleton animation="wave" variant="text" sx={{ fontSize: '2rem', width: "160px" }} />
      <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
      <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
      <Skeleton animation="wave" height={10} width="40%" style={{ marginBottom: 80 }} />
      <Skeleton animation="wave" variant="rounded" width={210} height={36} />
    </ProductCardSkeletonContainer>
  )
}