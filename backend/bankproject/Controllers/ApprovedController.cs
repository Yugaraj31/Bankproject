using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace bankproject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApprovedController : ControllerBase
    {
        [HttpGet("GetAllApproved")]
        public IActionResult GetAllApproved()
        {
            Entities.CapstoneProjectContext capstoneContext = new Entities.CapstoneProjectContext();
            var query = (from st in capstoneContext.Approveds
                         select st).ToList();
            return Ok(query);
        }
        [HttpPost("AddApproved")]
        public IActionResult AddApproved()
        {
            Entities.CapstoneProjectContext capstoneContext = new Entities.CapstoneProjectContext();
            var query = (from st in capstoneContext.Approveds
                         select st).ToList();
            return Ok(query);
        }
    }
}
