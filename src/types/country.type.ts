export default interface ICountryData {
  name: ICountryNameData;
  capital: string[];
  population: bigint;
  cca2: string;
  flags: ICountryFlags;
}

interface ICountryNameData {
  common: string;
  official: string;
  nativeName: any;
}

interface ICountryFlags {
  png: string;
  svg: string;
}
