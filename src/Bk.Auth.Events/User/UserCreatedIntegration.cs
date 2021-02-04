#nullable enable
using Bk.Common.EventBus.Events;

namespace Bk.Auth.Events.User
{
    public class UserCreatedIntegration : IIntegrationEvent
    {
        public string? BusinessId { get; set; }
        public string UserId { get; set; } = null!;
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string Email { get; set; } = null!;
        protected UserCreatedIntegration() { }

        public UserCreatedIntegration(string userId, string firstName, string lastName, string email, string businessId = null!)
        {
            UserId = userId;
            FirstName = firstName;
            LastName = lastName;
            Email = email;
            BusinessId = businessId;
        }
    }
}
