using API.Entities.OrderAggregate;

namespace API.DTOs
{
    public record OrderResponse
    {
        public int Id { get; set; }
        public string BuyerId { get; set; }
        public ShippingAddress ShippingAddress { get; set; }
        public DateTime OrderDate { get; set; }
        public List<OrderItemResponse> OrderItems { get; set; }
        public long Subtotal { get; set; }
        public long DeliveryFee { get; set; }
        public string Receipt { get; set; }
        public string OrderStatus { get; set; }
        public long Total { get; set; }
    }
}