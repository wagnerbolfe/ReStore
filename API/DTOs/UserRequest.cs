namespace API.DTOs
{
    public record UserRequest
    {
        public string Username { get; init; }
        public string Password { get; init; }
    }
}