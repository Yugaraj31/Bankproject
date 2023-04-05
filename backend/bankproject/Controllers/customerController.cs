using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client;
using System.Text;

namespace bankproject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {

        [HttpGet("GetAllCustomer")]
        public IActionResult GetAllCustomer()
        {
            Entities.CapstoneProjectContext capstoneContext = new Entities.CapstoneProjectContext();
            var query = (from st in capstoneContext.Customers
                         select st).ToList();
            return Ok(query);
        }

        [HttpPost("AddCustomer")]
        public IActionResult AddCustomer([FromBody] Entities.Customer customer)
        {
            Entities.CapstoneProjectContext capstoneContext = new Entities.CapstoneProjectContext();
            capstoneContext.Customers.Add(customer);
            capstoneContext.SaveChanges();
            return Ok(customer);
        }

        [HttpGet("UnApprovedCustomers")]
        public IActionResult UnApprovedCustomer()
        {
            Entities.CapstoneProjectContext capstoneProject = new Entities.CapstoneProjectContext();
            var query = (from st in capstoneProject.Customers
                         where st.Accountstatus == "0"
                         select st).ToList();
            return Ok(query);

        }

        [HttpPost("CustomerAuthentication")]
        public IActionResult CustomerAuthentication([FromBody] Entities.CutomerAuthentication cutomerauth)
        {
            Entities.CapstoneProjectContext capstoneProjectContext = new Entities.CapstoneProjectContext();
            var query = (from st in capstoneProjectContext.Customers
                         where st.Emailid == cutomerauth.username && st.Password == cutomerauth.password
                         select st).FirstOrDefault();
            if (query == null)
            {
                return Ok("0");
            }
            else
            {
                return Ok(query.Id);
            }
        }

        [HttpPut("UpdateStatus/{id}/{statusNo}")]
        public IActionResult UpdateStatus([FromRoute] int id, string statusNo)
        {
            Entities.CapstoneProjectContext capstoneProjectContext = new Entities.CapstoneProjectContext();
            Random rng = new Random();

            var query = (from st in capstoneProjectContext.Customers where st.Id == id select st).FirstOrDefault();
            query.Accountstatus = statusNo;
            capstoneProjectContext.Customers.Attach(query);
            int x = capstoneProjectContext.SaveChanges();
            var builder = new StringBuilder();
            if (x > 0)
            {
                while (builder.Length < 16)
                {
                    builder.Append(rng.Next(10).ToString());
                }
            }
            var myFF = new Entities.Approved();

            if (statusNo == "1")
            {
                Entities.CapstoneProjectContext capstoneProject = new Entities.CapstoneProjectContext();
                myFF.Accountno = builder.ToString();
                myFF.Customerid = id;
                capstoneProject.Approveds.Add(myFF);
                capstoneProject.SaveChanges();
            }
            return Ok(myFF);
        }
        


        [HttpGet("GetCustomerById/{id}")]
        public IActionResult GetCustomerById([FromRoute] int id)
        {
            Entities.CapstoneProjectContext capstoneProject = new Entities.CapstoneProjectContext();
            var query = (from st in capstoneProject.Customers where st.Id== id select st).FirstOrDefault();
            return Ok(query);

        }

        [HttpGet("GetCustomerAccountById/{id}")]
        public IActionResult GetById([FromRoute]int id) {
            Entities.CapstoneProjectContext capstoneProject = new Entities.CapstoneProjectContext();
            var query = (from st in capstoneProject.Approveds where st.Customerid== id select st).FirstOrDefault();
            return Ok(query);
        }
       

    }
}


