namespace API.DTOs
{
    public record UserRegisterRequest : UserRequest
    {
        public string Email { get; init; }
    }
}