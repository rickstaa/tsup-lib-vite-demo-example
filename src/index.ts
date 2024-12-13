import SwaggerParser from "@apidevtools/swagger-parser";

export const greet = async (name: string): Promise<string> => {
  const parsedSpec = await SwaggerParser.validate("https://api.apis.guru/v2/specs/instagram.com/1.0.0/swagger.yaml");
  // console.log(parsedSpec);
  console.log(process.platform);
  return `Hello, ${name}!`;
};

console.log(greet("World44"));
