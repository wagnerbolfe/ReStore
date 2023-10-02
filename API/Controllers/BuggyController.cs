using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        [HttpGet("not-found")]
        public ActionResult GetNotFound()
        {
            return NotFound();
        }

        [HttpGet("bad-request")]
        public ActionResult GetBadRequest()
        {
            return BadRequest(new ProblemDetails { Title = "Erro na requisição" });
        }

        [HttpGet("unauthorized")]
        public ActionResult GetUnauthorized()
        {
            return Unauthorized();
        }

        [HttpGet("validation-error")]
        public ActionResult GetValidationError()
        {
            ModelState.AddModelError("Problem 1", "Primeiro erro!");
            ModelState.AddModelError("Problem 2", "Segundo erro!");
            return ValidationProblem();
        }

        [HttpGet("server-error")]
        public ActionResult GetServerError()
        {
            throw new Exception("Erro no servidor");
        }
    }
}