using System.Collections.Generic;
using Bk.Common.EventBus.Events;

namespace Bk.Auth.Events.User
{
    public class UserCreated : IIntegrationEvent
    {
        public string BusinessId { get; set; }
        public string UserId { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public List<string> Roles { get; set; }
        protected UserCreated() { }
        public UserCreated(string businessId, string userId, string userName, string email, List<string> roles)
        {
            BusinessId = businessId;
            UserId = userId;
            UserName = userName;
            Email = email;
            Roles = roles;
        }
    }
}
