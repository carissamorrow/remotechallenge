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
  }
];

let container = {
  color: "black",
  texture: "smooth",
  material: "plastic"
}

let remote = {
  buttons,
  container
}

console.log(remote.buttons);