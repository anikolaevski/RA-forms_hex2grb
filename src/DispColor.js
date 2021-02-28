import React, {useState} from 'react';
// import PropTypes from 'prop-types';
// import shortid from 'shortid';
const startcolor = '#ddd';

export function DispColor () {
  // const [color, setColor] = useState('#ffffff');
  const [styles, setStyles] = useState({ backgroundColor: startcolor, });
  const [Statustext, setStatustext] = useState(hexToRgb(startcolor));
  const handleColor = (evt) => { 
    const x = evt.target.value;
    // console.log(color, x);
    if (CheckValidColor(x)) {
      const y = hexToRgb(x);
      if (y) {
        // setColor(y);
        setStyles({ backgroundColor: y, });
        setStatustext(y);
      } else {
        // setColor(x);
        setStyles({ backgroundColor: x, });
        setStatustext(x);
      }
    } else {
      setStyles({ backgroundColor: '#f53', });
      setStatustext('Ошибка!');
    }
  };
  // console.log(props);
    return (
      <form className="colorBG" style={styles}>
        <div className="colorCodeForm">
          <input className="color-input" id="colorCode" type="text" onChange={handleColor}/>
          <p className="result-string"><span id="validcolor">{Statustext}</span></p>
        </div>
      </form>
    );
}

function CheckValidColor(color) {
  const hex = color.trim().replace('#','');
  if (hex.length < 3) { return true; }
  // eslint-disable-next-line no-undef
  var e = document.getElementById('validcolor');
  if (!e) { return false; }
  e.style.borderColor = '';
  e.style.borderColor = color;
  var tmpcolor = e.style.borderColor;
  if (tmpcolor.length == 0) {
      return false;
  }
  return true;
}

function hexToRgb(val) {
  if(val.includes('rgb')) {return val;}
  const hex = val.trim().replace('#','');
  const size = hex.length;
  const rgb = { red:0, green:0, blue:0 };
  let done = false;
  if (size === 3 || (size > 3 && size < 6)) {
    rgb.red = parseInt(hex[0]+hex[0], 16);
    rgb.green = parseInt(hex[1]+hex[1], 16);
    rgb.blue = parseInt(hex[2]+hex[2], 16);
    done = true;
  } else if (size >= 6) {
    rgb.red = parseInt(hex[0]+hex[1], 16);
    rgb.green = parseInt(hex[2]+hex[3], 16);
    rgb.blue = parseInt(hex[4]+hex[5], 16);
    done = true;
  } else if (size < 3) {
    return null;
  }
  if (done) {
    return `rgb(${rgb.red},${rgb.green},${rgb.blue})`;
  }
  return `#${hex[0]}${hex[1]}${hex[2]}`;
  // console.log(hex, size, rgb);
}