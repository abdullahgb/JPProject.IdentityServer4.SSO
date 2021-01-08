using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Bk.Common.StringUtils;

namespace Jp.UI.SSO.Util
{
    public static class Roles
    {
        public static string OAuthAdmin = "Administrator";
        public static string Admin = "admin";
        public static string Owner = "owner";
        public static string Manager = "manager";
        public static string Worker = "worker";
        public static string User = "user";

        public static List<string> GetApplicationRoles()
            => typeof(Roles)
                .GetFields(BindingFlags.Static | BindingFlags.Public)
                .Select(field => field.GetValue(null)?.ToString())
                .Where(role => !role.IsNullOrEmpty())
                .ToList();
    }
}
