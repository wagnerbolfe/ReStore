namespace API.DTOs
{
    public record UserResponse
    {
        public string Email { get; set; }
        public string Token { get; set; }
        public BasketResponse Basket { get; set; }
    }
}