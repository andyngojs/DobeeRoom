const initState = {
  isActiveHome: true,
  isActiveSearch: false,
  isActiveAbout: false,
  isActiveUser: false,
};

export default function sideBarSlice(state = initState, action) {
  switch (action.type) {
    case "activeHomeTab":
      document.title = "Trang Chủ | DobeeRoom";
      return {
        isActiveHome: true,
        isActiveSearch: false,
        isActiveAbout: false,
        isActiveUser: false,
      };
    case "activeSearchTab":
      document.title = "Tìm Kiếm Phòng Trọ | DobeeRoom";
      return {
        isActiveHome: false,
        isActiveSearch: true,
        isActiveAbout: false,
        isActiveUser: false,
      };
    case "activeUserTab":
      document.title = "Trang Cá Nhân | DobeeRoom";
      return {
        isActiveHome: false,
        isActiveSearch: false,
        isActiveAbout: false,
        isActiveUser: true,
      };
    case "activeAboutTab":
      document.title = "Giới Thiệu về DobeeRoom | DobeeRoom";
      return {
        isActiveHome: false,
        isActiveSearch: false,
        isActiveUser: false,
        isActiveAbout: true,
      };
    default:
      return state;
  }
}
