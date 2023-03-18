export type Launch = {
  id: string;
  name: string;
  date: string;
  core: string;
  imageSrc: string;
  status: boolean;
  details: string;
  payloads: {
    id: string;
    name: string;
  }[];
};

export type ResponseError = {
  message: string;
};
