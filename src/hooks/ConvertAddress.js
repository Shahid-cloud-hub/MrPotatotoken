export function convertAddress(address) {
  if (!address || address.length !== 42) {
    // Check if the address is null, undefined, or has an invalid length
    return "";
  }

  const prefix = address.slice(0, 6); // Take the first four characters
  const suffix = address.slice(-4); // Take the last four characters

  return prefix + "..." + suffix;
}
