# Libraries Used

Here are the main libraries used in our projects:

## 1. **Swiper** - [Documentation](https://swiperjs.com/)
### Usage example:
```scss
@use 'swiper/swiper-bundle.css';
```
```javascript
import Swiper, { Navigation } from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-container', {
    modules: [Navigation],
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
```

### Common issues
* Swiper not initializing: Ensure the container and required modules are properly defined.
*	Dynamic content not updating: Call swiper.update() after making changes to the DOM.

## 2. **Medium Zoom** - [Documentation](https://github.com/francoischalifour/medium-zoom)
### Usage example:
```javascript
import mediumZoom from 'medium-zoom';

mediumZoom('[data-zoomable]');
```

### Common issues:
*	Zoom not working: Ensure elements have the correct data-zoomable attribute.
*	Image alignment issues: Check the CSS for conflicts with zoom styles.

## 3. **Slim Select** - [Documentation](https://slimselectjs.com/)
### Usage example:
```scss
@use 'slim-select/dist/slimselect.css';
```
```javascript
import SlimSelect from 'slim-select';

new SlimSelect({
  select: '#my-select',
});
```

### Common issues:
*	Styles not applying: Ensure the CSS file is correctly imported.
*	Dynamic options: Use the addOption method:
```javascript
slim.addOption({ text: 'New Option', value: 'new' });
```

## 4. **Intl-Tel-Input** - [Documentation](https://github.com/jackocnr/intl-tel-input)

### Usage example:

```javascript
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

const input = document.querySelector('#phone');
intlTelInput(input, {
  initialCountry: 'auto',
  geoIpLookup: (callback) => {
    fetch('https://ipinfo.io/json')
      .then((resp) => resp.json())
      .then((data) => callback(data.country));
  },
});
```

### Common issues:
*	Formatting not applied: Verify that the required CSS and JS are imported.
*	Validation: Use the isValidNumber method for phone number validation:

```javascript
const iti = intlTelInput(input);
if (!iti.isValidNumber()) {
  alert('Invalid phone number');
}
```
## 5. **Inputmask** - [Documentation](https://github.com/RobinHerbots/Inputmask)

### Usage example:

```javascript
import Inputmask from 'inputmask';

const input = document.querySelector('#phone');
Inputmask("(999) 999-9999").mask(input);
```

### Common issues:
*	Mask not applying: Ensure the field exists in the DOM and the mask syntax is valid.
*	Input issues on mobile: Use inputmode for better compatibility:

```javascript
Inputmask({ mask: "(999) 999-9999", inputmode: "tel" }).mask(input);
```
