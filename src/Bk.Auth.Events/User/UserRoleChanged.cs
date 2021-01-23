using System.Collections.Generic;
using Bk.Common.EventBus.Events;

namespace Bk.Auth.Events.User
{
    public class UserRoleChanged: IIntegrationEvent
    {
        public string BusinessId { get; set; }
        public string OwnerId { get; set; }
        public string OwnerName { get; set; }
        public string Email { get; set; }
        public List<string> Roles { get; set; }
        protected UserRoleChanged() { }
        public UserRoleChanged(string businessId, string userId, List<string> newRoles)
        {
            BusinessId = businessId;
            OwnerId = userId;
            Roles = newRoles;
        }
    }
}
