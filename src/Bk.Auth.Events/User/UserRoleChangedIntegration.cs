using System.Collections.Generic;
using Bk.Common.EventBus.Events;

namespace Bk.Auth.Events.User
{
    public class UserRoleChangedIntegration: IIntegrationEvent
    {
        public string BusinessId { get; set; }
        public string UserId { get; set; }
        public List<string> Roles { get; set; }
        protected UserRoleChangedIntegration() { }
        public UserRoleChangedIntegration(string businessId, string userId, List<string> newRoles)
        {
            BusinessId = businessId;
            UserId = userId;
            Roles = newRoles;
        }
    }
}
