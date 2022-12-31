export const routes = {
  sign_in: { path: "/" },
  sign_up: { path: "/sign-up" },
  privateRoute: {
    path: "/*",
    dashboard: { path: "dashboard" },
    add_user: { path: "add-user" },
  },
};
