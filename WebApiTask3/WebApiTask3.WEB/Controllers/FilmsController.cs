using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Models = WebApiTask3.BLL.Models;
using Entities = WebApiTask3.DAL.Entities;
using WebApiTask3.BLL.Interfaces;
using WebApiTask3.DAL.Interfaces;

namespace WebApiTask3.WEB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilmsController : ControllerBase
    {
        private IFilmBS _service;
        private IAutoMapConverter<Entities.Film, Models.Film> mapEntityToModel;
        private IAutoMapConverter<Models.Film, Entities.Film> mapModelToEntity;
        public FilmsController(IFilmBS filmBS,
            IAutoMapConverter<Entities.Film, Models.Film> convertEntityToModel,
            IAutoMapConverter<Models.Film, Entities.Film> convertModelToEntity)
        {
            _service = filmBS;
            mapEntityToModel = convertEntityToModel;
            mapModelToEntity = convertModelToEntity;
        }

        // GET: api/Films
        [HttpGet]
        public IEnumerable<Models.Film> GetFilms()
        {
            var filmList = _service.GetAll();
            var mFilmList = mapEntityToModel.ConvertObjectCollection(filmList);

            return mFilmList;
        }

        // GET: api/Films/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetFilm([FromRoute] int id)
        {
            var film = _service.Get(id);

            if (film == null)
            {
                return NotFound("Film couldn't be found.");
            }

            var mFilm = mapEntityToModel.ConvertObject(film);

            return Ok(mFilm);
        }

        // PUT: api/Films/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFilm([FromRoute] int id, [FromBody] Models.Film filmUpdated)
        {
            if (filmUpdated == null)
            {
                return BadRequest("Film is null.");
            }

            var film = _service.Get(id);

            if (film == null)
            {
                return NotFound("Film couldn't be found.");
            }

            var mFilm = mapModelToEntity.ConvertObject(filmUpdated);
            _service.Update(film, mFilm);

            return NoContent();
        }

        // POST: api/Films
        [HttpPost]
        public async Task<IActionResult> PostFilm([FromBody] Models.Film film)
        {
            if (film == null)
            {
                return BadRequest("Film is null.");
            }

            var eFilm = mapModelToEntity.ConvertObject(film);
            _service.Create(eFilm);

            return Ok("Successfully added!");
        }

        // DELETE: api/Films/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFilm([FromRoute] int id)
        {
            var filmToDelete = _service.Get(id);

            if (filmToDelete == null)
            {
                return NotFound("Film couldn't be found.");
            }

            _service.Delete(id);

            return NoContent();
        }

    }
}