const remToPx = (rem, base = 20) => {
  let tempRem = rem;

  if (typeof rem === "string" || rem instanceof String)
    tempRem = tempRem.replace("rem", "");

  tempRem = parseFloat(tempRem);
  return tempRem * base + "px";
}

export default remToPx;
