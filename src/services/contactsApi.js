import axios from "axios";

const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers.common.Authorization = ``;
};

export const requestSignUp = async (credentials) => {
  const { data } = await instance.post("/users/signup", credentials);
  setToken(data.token);

  return data;
};

export const requestSignIn = async (credentials) => {
  const { data } = await instance.post("/users/login", credentials);
  setToken(data.token);
  return data;
};

export const requestGetCurrentUser = async () => {
  const { data } = await instance.get("/users/current");

  return data;
};

export const requestLogOut = async () => {
  const { data } = await instance.post("/users/logout");

  return data;
};

// Contacts

export const requestGetContacts = async () => {
  const { data } = await instance.get("/contacts");
  return data;
};

export const requestAddContact = async (contact) => {
  const { data } = await instance.post("/contacts", contact);
  return data;
};
export const requestDeleteContact = async (contactId) => {
  const { data } = await instance.delete(`/contacts/${contactId}`);
  return data;
};
export const requestUpdateContact = async (contact) => {
  const { data } = await instance.patch(`/contacts/${contact.id}`, {
    name: contact.name,
    number: contact.number,
  });
  return data;
};
