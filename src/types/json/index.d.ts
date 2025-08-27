/*
declare module "*.json"
{
  const value: any;
  export default value;
}
*/

interface IAbout {
  summary: string;
  paragraphs: Array<string>;
  social: Array<{name: string, url: string}>;
}

declare module '*about.json'
{
    export default IAbout;
}
