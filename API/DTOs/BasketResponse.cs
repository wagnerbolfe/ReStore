namespace API.DTOs
{
    public record BasketResponse
    {
        public int Id { get; set; }
        public string BuyerId { get; set; }
        public List<BasketItemResponse> Items { get; set; }
        public string PaymentIntentId { get; set; }
        public string ClientSecret { get; set; }
    }
}