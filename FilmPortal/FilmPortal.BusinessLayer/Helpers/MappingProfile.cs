using System;
using System.Linq;
using AutoMapper;
using FilmPortal.BusinessLayer.Models;
using FilmPortal.DataLayer.Entities;

namespace FilmPortal.BusinessLayer.Helpers
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Film, FilmLiteModel>()
                .ForMember(m => m.CommentCount, opt => opt.MapFrom(m => m.Comments != null ? m.Comments.Count : 0))
            .ForMember(m => m.MarkCount, opt => opt.MapFrom(m => m.Marks != null ? m.Marks.Count : 0))
            .ForMember(m => m.AverageMark,
                opt => opt.MapFrom(m => m.Marks != null || m.Marks.Count != 0 ?
                    Math.Round(m.Marks.DefaultIfEmpty().Average(p => p.Mark), 2, MidpointRounding.AwayFromZero) : 0));
            CreateMap<AddCommentRequest, Comment>()
                .ForMember(m => m.Body, opt => opt.MapFrom(m => m.Comment))
                .ForMember(m => m.CreateDate, opt => opt.MapFrom(m => DateTime.Now));
            CreateMap<string, Genre>()
                .ForMember(m => m.Name, opt => opt.MapFrom(m => m));
            CreateMap<AddFilmRequest, Film>();
            CreateMap<AddRatingRequest, Rating>();
            CreateMap<IdentityModel, User>()
                .ForMember(m => m.Login, opt => opt.MapFrom(m => m.Username));
            CreateMap<User, UserModel>();
        }
    }
}
