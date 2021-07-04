const domain = "https://stay-dot-around-179500.uc.r.appspot.com";

export const login = (credential, asHost) => {
  const loginUrl = `${domain}/authenticate/${asHost ? "host" : "guest"}`;
  return fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credential),
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to log in");
    }

    return response.json();
  });
};

export const register = (credential, asHost) => {
  const registerUrl = `${domain}/register/${asHost ? "host" : "guest"}`;
  return fetch(registerUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credential),
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to register");
    }
  });
};

export const getStaysByHost = () => {
  const authToken = localStorage.getItem("authToken");
  const listStaysUrl = `${domain}/stays/`;

  return fetch(listStaysUrl, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to get stay list");
    }

    return response.json();
  });
};
