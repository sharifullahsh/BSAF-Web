﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BSAFWebApi.Dtos;
using BSAFWebApi.Models;
using BSAFWebApi.Models.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BSAFWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DashboardController : ControllerBase
    {
        private readonly BWDbContext db = null;
        BeneficiaryRepository beneficiaryRepositor = null;
        public DashboardController(BWDbContext context)
        {
            db = context;
            beneficiaryRepositor  = new BeneficiaryRepository(db);
        }
        [Authorize]
        [HttpGet("getTileData")]
        public async Task<IActionResult> GetTileData()
        {
            var tileData = new DashboardTileDataDto
            {
                TotalBeneficiaryCases = db.Beneficiaries.Count(),
                TotalMembers = db.Individuals.Count(),
                TotalFamilyCases = db.Beneficiaries.Where(b => b.BeneficiaryType == "Family").Count(),
                TotalIndividualCases = db.Beneficiaries.Where(b => b.BeneficiaryType == "Individual").Count()
            };
            return  Ok(tileData);
        }

        [Authorize]
        [HttpPost("getChartsData")]
        public async Task<IActionResult> GetChartsData(DashboardSearchDto searchModel)
        {
            DashboardChartstDto model = new DashboardChartstDto();
            model.bcp = beneficiaryRepositor.BeneficiaryByBCPList(searchModel);
            return Ok(model);
        }
    }
}