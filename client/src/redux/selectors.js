export const userInforSelector = (state) => state.auths;
export const accessTokenSelector = (state) => state.auths.accessToken;

export const isActiveHomeSelector = (state) => state.activeTab.isActiveHome;
export const isActiveSearchSelector = (state) => state.activeTab.isActiveSearch;
export const isActiveUserSelector = (state) => state.activeTab.isActiveUser;
export const isActiveAboutSelector = (state) => state.activeTab.isActiveAbout;
