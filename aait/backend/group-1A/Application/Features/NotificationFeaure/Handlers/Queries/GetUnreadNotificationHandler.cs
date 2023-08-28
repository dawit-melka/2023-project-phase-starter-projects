using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Contracts;
using Application.DTO.NotificationDTO;
using Application.Features.NotificationFeaure.Requests.Queries;
using Application.Response;
using AutoMapper;
using MediatR;

namespace Application.Features.NotificationFeaure.Handlers.Queries
{
    public class GetUnreadNotificationHandler : IRequestHandler<GetUnreadNotification, BaseResponse<List<NotificationResponseDTO>>>
    {
        private readonly INotificationRepository _notificationRepository;
        private readonly IMapper _mapper;

        public GetUnreadNotificationHandler(INotificationRepository notificationRepository, IMapper mapper)
        {
            _mapper = mapper;
            _notificationRepository = notificationRepository;
        }
        public async Task<BaseResponse<List<NotificationResponseDTO>>> Handle(GetUnreadNotification request, CancellationToken cancellationToken)
        {

            var result = await _notificationRepository.GetAll(entity => entity.UserId == request.UserId && entity.IsRead == false);
            
            return new BaseResponse<List<NotificationResponseDTO>> () {
                Success = true,
                Message = "Notifications are retrieved successfully",
                Value = _mapper.Map<List<NotificationResponseDTO>>(result)
            };
        }
    }
}