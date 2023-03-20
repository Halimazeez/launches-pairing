import { LaunchPayload } from './Launch';

export type LaunchesResponse = {
  docs: LaunchResponse[];
};

// only typing the attributes we care about in the map to Launch
export type LaunchResponse = {
  id: string;
  name: string;
  date_utc: string;
  cores: LaunchCore[];
  links: LaunchLinks;
  success: boolean;
  details: string | null;
  payloads: LaunchPayload[];
};

export type LaunchLinks = {
  patch: LaunchLinksPatch;
};

export type LaunchLinksPatch = {
  small: string;
};

export type LaunchCore = {
  core: string;
};
