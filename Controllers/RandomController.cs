using System;
using System.Threading;
using Microsoft.AspNetCore.Mvc;

namespace csharp_short_polling.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RandomController
    {
        private static Random random = new Random();

        [HttpGet]
        public object GetAction()
        {
            // Instead sleeping some kind of mechanism to delay the response until new data is available should be used
            Thread.Sleep(random.Next(0, 10000));
            return new {
                Random = random.Next(0, 100),
                Created = DateTime.Now,
            };
        }
    }
}
