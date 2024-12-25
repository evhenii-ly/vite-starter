import SlimSelect from "slim-select";

window.slimInstances = {};

const initSlimSelect = (select, userConfig = {}) => {
  const defaultConfig = {
    select,
    settings: {
      showSearch: false,
    },
    events: {}
  };

  const finalConfig = {
    ...defaultConfig,
    ...userConfig,
    settings: {
      ...defaultConfig.settings,
      ...userConfig.settings,
    },
    events: {
      ...defaultConfig.events,
      ...userConfig.events,
    }
  };

  window.slimInstances[select.id] = new SlimSelect(finalConfig);
};

const select = () => {
  const elements = {
    customSelects: document.querySelectorAll("select.custom-select"),
  };

  elements.customSelects.forEach((select) => {
    initSlimSelect(select);
    select.closest(".select-box").classList.remove("placeholder-shimmer");
    select.classList.remove("placeholder-shimmer__hidden");
  });
};

export default select;
export { initSlimSelect };
