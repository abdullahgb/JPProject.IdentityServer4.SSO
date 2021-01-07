using System;
using System.Collections.Generic;
using System.Security.Claims;
using IdentityModel;

namespace Jp.UI.SSO.Graphql.SessionExtension
{
    public class OAuthSession
    {
        protected readonly ClaimsPrincipal Claims;
        public OAuthSession(ClaimsPrincipal claims)
        {
            Claims = claims;
        }
        public OAuthSession()
        {
        }
        private Guid? _id;

        public Guid SubjectId
        {
            get
            {
                if (_id != null) return _id.Value;
                _id = Guid.Parse(Claims.FindFirst(JwtClaimTypes.Subject)?
                    .Value ?? throw new KeyNotFoundException("Tenant ID does not exist in Claims"));
                return _id.Value;
            }
            set => _id = value;
        }


        private Guid? _tenantId;

        public Guid TenantId
        {
            get
            {
                if (_tenantId != null) return _tenantId.Value;
                _tenantId = Guid.Parse(Claims.FindFirst(JwtClaimTypes.Subject)?
                    .Value ?? throw new KeyNotFoundException("Tenant ID does not exist in Claims"));
                return _tenantId.Value;
            }
            set => _tenantId = value;
        }

        private string _fullName;

        public string FullName
        {
            get
            {
                if (_fullName != null) return _fullName;
                _fullName = Claims.FindFirst(JwtClaimTypes.GivenName)?.Value;
                return _fullName;
            }
            set => _fullName = value;
        }

        private string _email;

        public string Email
        {
            get
            {
                if (_email != null) return _email;
                _email = Claims.FindFirst(JwtClaimTypes.Email)?.Value;
                return _email;
            }
            set => _email = value;
        }

        private List<string> _roles;

        public List<string> Roles
        {
            get
            {
                if (_roles != null) return _roles;
                var roles = Claims.FindAll(JwtClaimTypes.Role);
                _roles = new List<string>();
                foreach (var role in roles)
                {
                    _roles.Add(role?.Value);
                }
                return _roles;
            }
            set => _roles = value;
        }
    }
}
