import intlTelInput from 'intl-tel-input';
import "inputmask";

const phoneMask = () => {
  const fields = document.querySelectorAll(".phone-field");

  if (fields.length) {
    fields.forEach((field) => {
      intlTelInput(field, {
        initialCountry: 'ua',
        separateDialCode: true,
        geoIpLookup: callback => {
          fetch("https://ipapi.co/json")
            .then(res => res.json())
            .then(data => callback(data.country_code))
            .catch(() => callback("us"));
        },
      });

      Inputmask({ mask: "99-999-9999" }).mask(field);
    });
  }
};

export default phoneMask;
