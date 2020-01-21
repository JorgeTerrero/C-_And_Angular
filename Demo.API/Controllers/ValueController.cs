using System.Threading.Tasks;
using Demo.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Demo.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValueController: ControllerBase
    {
        
        private DbContextApplication _context;

        public ValueController(DbContextApplication context){
            this._context = context;
        }

        public async Task<IActionResult> GetValuesAsync()
        {
            var values = await _context.values.ToListAsync();
            return Ok(values);
        }
    }
}