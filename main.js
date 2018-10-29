let keypad = {
  name: "Keypad",
  arrows: [
    "left",
    "right",
    "up",
    "down"
  ]
}

let buttons = [
  {
    name: "Back Button",
    function: "Goes back"
  },
  {
    name: "Home Button",
    function: "Goes to home screen"
  },
  keypad,
  {
    name: "Center Button",
    function: "Confirms current action"
  },
  {
    name: "Up Volume Button",
    function: "Raises volume"
  },
  {
    name: "Down Volume Button",
    function: "Lower volume"
  },
  {
    name: "Channel Up Button",
    function: "moves channel up one"
  },
  {
    name: "Channel Down Button",
    function: "moves channel down one"
  },
  {
    name: "Power",
    function: "turns tv on and off"
  }
];

let container = {
  color: "black",
  texture: "smooth",
  material: "plastic",
  appearance: "good condition"
}

let remote = {
  buttons,
  container
}

console.log(remote.buttons);
