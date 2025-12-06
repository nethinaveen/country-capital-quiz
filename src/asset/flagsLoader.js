// Dynamic flags loader using webpack's require.context
// Assumes flag files are in the same folder and named like: "united_states.png", "india.png"
const flagsContext = require.context('./flags', false, /\.(png|jpe?g|svg)$/);

const normalizeName = (name) =>
  name
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_]/g, '');

const flags = flagsContext.keys().reduce((map, filePath) => {
  const fileName = filePath.replace(/^\.\//, '').replace(/\.(png|jpe?g|svg)$/, '').toLowerCase();
  map[fileName] = flagsContext(filePath).default || flagsContext(filePath);
  return map;
}, {});

export function getFlagByCountryName(countryName) {
  const key = normalizeName(countryName);
  return flags[key] || null;
}

export function hasFlagForCountry(countryName) {
  const key = normalizeName(countryName);
  return flags.hasOwnProperty(key);
}

export default flags;
