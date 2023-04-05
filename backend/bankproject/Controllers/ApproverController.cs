using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace bankproject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApproverController : ControllerBase
    {
        [HttpGet("GetAllApprover")]
        public IActionResult GetAllApprover()
        {
            Entities.CapstoneProjectContext capstoneContext = new Entities.CapstoneProjectContext();
            var query = (from st in capstoneContext.Approvers
                         select st).ToList();
            return Ok(query);
        }
        [HttpPost("AddApprover")]
        public IActionResult AddApprover()
        {
            Entities.CapstoneProjectContext capstoneContext = new Entities.CapstoneProjectContext();
            var query = (from st in capstoneContext.Approvers
                         select st).ToList();
            return Ok(query);
        }
    }
}
