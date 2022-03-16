using Microsoft.AspNetCore.Mvc;
using Model;
using BusinessLayer;


namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VocableController : Controller
    {   
        private readonly VocableManager vocableManager;
        public VocableController(VocableManager vocableManager)
        {
            this.vocableManager = vocableManager;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(vocableManager.GetVocables());
        }

        [HttpGet("{id}")]   
        public IActionResult GetOne([FromRoute] int id)
        {
            return Ok(vocableManager.oneVocable(id));
        }

        [HttpPost]
        public IActionResult Post([FromBody] Vocable vocable)
        {
            vocableManager.AddVocable(vocable);
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete([FromRoute] int id)
        {
            vocableManager.DeleteVocable(id);
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Put([FromBody] Vocable vocable, [FromRoute] int id)
        {
            vocable.Id=id;
            vocableManager.UpdateVocable(vocable,id);
            return Ok();
        }

    }
}