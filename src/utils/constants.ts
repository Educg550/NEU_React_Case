export interface RequestProps {
  baseURL: string;
}

export interface AuthProps {
  auth: {
    username: string;
    password: string;
  };
}

export const defaultConfigs: RequestProps = {
  baseURL: "https://ps.brickseguros.com.br/",
};

export const token = "teste";
