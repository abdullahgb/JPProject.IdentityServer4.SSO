using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Types;

namespace Bk.Application.SessionExtension
{
    [ExtendObjectType(Name = nameof(Query))]
    public class SessionRootQuery
    {
        [Authorize]
        public Session Session => new Session();

    }
    public class Session {}
    public partial class SessionConfiguration
        : ObjectType<Session>
    {
        protected override void Configure(IObjectTypeDescriptor<Session> descriptor)
        {
            descriptor
                 .ConfigureAuthSession();
               
        }
    }
}
