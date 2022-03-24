export const setUser = (payload) => ({
  type: "auth/register",
  payload,
});

export const getUserCurrent = (payload) => ({
  type: "auth/login",
  payload,
});

export const activeHomeTab = {
  type: "activeHomeTab",
};

export const activeSearchTab = {
  type: "activeSearchTab",
};

export const activeUserTab = {
  type: "activeUserTab",
};

export const activeAboutTab = {
  type: "activeAboutTab",
};
