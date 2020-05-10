const get = (msg) => {
  const commands = {
    '!hello': 'Hello! Welcome to DevTech! :D',
    '!link': 'https://davidalves1.com',
  };

  return commands[msg];
}

export default {
  get
}
