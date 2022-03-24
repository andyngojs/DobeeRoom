const initState = {
  isActiveHome: true,
  isActiveSearch: false,
  isActiveAbout: false,
  isActiveUser: false,
};

export default function sideBarSlice(state = initState, action) {
  switch (action.type) {
    case "activeHomeTab":
      return {
        isActiveHome: true,
        isActiveSearch: false,
        isActiveAbout: false,
        isActiveUser: false,
      };
    case "activeSearchTab":
      return {
        isActiveHome: false,
        isActiveSearch: true,
        isActiveAbout: false,
        isActiveUser: false,
      };
    case "activeUserTab":
      return {
        isActiveHome: false,
        isActiveSearch: false,
        isActiveAbout: false,
        isActiveUser: true,
      };
    case "activeAboutTab":
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
