export const greet = async (name: string): Promise<string> => {
  console.log(process.platform);
  return `Hello, ${name}!`;
};

console.log(greet("World2"));
