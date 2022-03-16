using Microsoft.AspNetCore.Mvc;
using Model;
using BusinessLayer;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class QuizController : Controller
    {
        private readonly VocableManager vocableManager;
        public QuizController(VocableManager vocableManager)
        {
            this.vocableManager=vocableManager;
        }
        
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(vocableManager.randVocable());
        }

        [HttpGet("{id}")]
        public IActionResult Get([FromRoute] int id)
        {
            return Ok(vocableManager.oneVocable(id));
        }
    }
}