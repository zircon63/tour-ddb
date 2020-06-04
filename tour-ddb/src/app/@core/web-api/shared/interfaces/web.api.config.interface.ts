export interface WebApiModuleConfig {
  baseUrl: string;
  headers: string | {
    [name: string]: string | string[];
  };
}
