export function generateID() {
  const random = Math.random();

  return Math.floor(Date.now() * random);
}
