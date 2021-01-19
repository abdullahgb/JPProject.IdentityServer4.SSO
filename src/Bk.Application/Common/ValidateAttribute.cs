using System;
using AspectInjector.Broker;
using Bk.Common.Services;
using Bk.Common.ViewModels;

namespace Application.Common
{
    [Aspect(Scope.Global)]
    [Injection(typeof(ValidateAttribute))]
    public sealed class ValidateAttribute : Attribute
    {
        [Advice(Kind.Before, Targets = Target.Method | Target.Public)]
        public void TraceStart(
            [Argument(Source.Instance)] object instance,
            [Argument(Source.Arguments)] object[] arguments)
        {
            foreach (var item in arguments)
            {
                if (!(item is IBaseViewModel vm)) continue;
                if (instance is BaseService service)
                    service.Validate(vm);
            }
        }
    }
}
