export const selectUserData = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const selectIsSignedIn = (state) => state.auth.isSignedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectIsError = (state) => state.auth.isError;
