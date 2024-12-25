const localStorageData = (() => {
  const oneMonthInMilliseconds = 30 * 24 * 60 * 60 * 1000;

  const save = (key, data, duration = oneMonthInMilliseconds) => {
    const payload =
      duration === 0 || duration === false
        ? { data, forever: true }
        : { data, expires: new Date().getTime() + duration };

    localStorage.setItem(`obzhora_${key}`, JSON.stringify(payload));
  };

  const get = (key) => {
    const storedData = localStorage.getItem(`obzhora_${key}`);
    if (!storedData) return null;

    const { data, forever, expires } = JSON.parse(storedData);

    if (forever) {
      return data;
    } else if (new Date().getTime() > expires) {
      localStorage.removeItem(key);
      return null;
    }

    return data;
  };

  return {
    save,
    get,
  };
})();

export default localStorageData;
