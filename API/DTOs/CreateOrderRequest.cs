using API.Entities.OrderAggregate;

namespace API.DTOs
{
    public record CreateOrderRequest
    {
        public bool SaveAddress { get; set; }
        public ShippingAddress ShippingAddress { get; set; }
    }
}