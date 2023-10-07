export default function getConstantByPrefix(prefix, constants) {
  let keys = Object.keys(constants).filter((constantKey) => constantKey.startsWith(prefix));
  return keys.map((key) => constants[key]);
}
