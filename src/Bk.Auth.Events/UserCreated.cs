using Bk.Common.EventBus.Events;
using System.Linq;
namespace Bk.Auth.Events
{
    public class UserCreated : IIntegrationEvent
    {
        public string BusinessId { get; set; }
        public string OwnerId { get; set; }
        public string OwnerName { get; set; }
        public string Email { get; set; }
        public List<string> Roles { get; set; }
        protected UserCreated() { }
        public UserCreated(string businessId, string userId, string userName, string email, List<string> roles)
        {
            BusinessId = businessId;
            OwnerId = ownerId;
            OwnerName = ownerName;
            Email = email;
            Roles = roles;
        }
    }
}
