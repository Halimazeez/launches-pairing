export type Launch = {
  id: string;
  name: string;
  date: string;
  core: string;
  imageSrc: string;
  status: boolean;
  details: string | null;
  payloads: {
    id: string;
    type: string;
  }[];
};

export type ResponseError = {
  message: string;
};
