const pxToRem = (px, base = 20) => {
  let tempPx = px

  if (typeof px === "string" || px instanceof String)
    tempPx = tempPx.replace("px", "")

  tempPx = parseInt(tempPx)
  return (1 / base) * tempPx + "rem";
}

export default pxToRem;
