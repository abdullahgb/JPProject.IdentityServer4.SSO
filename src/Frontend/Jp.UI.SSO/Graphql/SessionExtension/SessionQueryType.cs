using HotChocolate.Types;

namespace Jp.UI.SSO.Graphql.SessionExtension
{
    [ExtendObjectType(Name = nameof(Query))]
    public class SessionRootQuery
    {
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
