export type Launch = {
  id: string;
  name: string;
  date: string;
  core: string;
  imageSrc: string;
  status: boolean;
  details: string | null;
  payloads: LaunchPayload[];
};

export type LaunchPayload = {
  id: string;
  type: string;
};
