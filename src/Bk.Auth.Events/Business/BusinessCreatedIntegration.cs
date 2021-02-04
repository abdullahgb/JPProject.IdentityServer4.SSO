using Bk.Common.EventBus.Events;

namespace Bk.Auth.Events.Business
{
    public class BusinessCreatedIntegration : IIntegrationEvent
    {
        public string BusinessId { get; set; }
        public string BusinessName { get; set; }
        public string OwnerId { get; set; }
        protected BusinessCreatedIntegration() { }
        public BusinessCreatedIntegration(string businessId, string businessName, string ownerId)
        {
            BusinessId = businessId;
            BusinessName = businessName;
            OwnerId = ownerId;
        }
    }
}
