using Bk.Common.EventBus.Events;

namespace Bk.Auth.Events
{
    public class BusinessCreated : IIntegrationEvent
    {
        public string BusinessId { get; set; }
        public string BusinessName { get; set; }
        public string OwnerId { get; set; }
        public string OwnerName { get; set; }
        public string Email { get; set; }
        protected BusinessCreated() { }
        public BusinessCreated(string businessId, string businessName, string ownerId, string ownerName, string email)
        {
            BusinessId = businessId;
            BusinessName = businessName;
            OwnerId = ownerId;
            OwnerName = ownerName;
            Email = email;
        }
    }
}
