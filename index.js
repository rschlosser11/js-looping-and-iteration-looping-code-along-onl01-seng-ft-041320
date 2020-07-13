function writeCards(arr, name) {
    const messages = [];
      for (let i = 0; i < arr.length; i++) {
          messages.push(`Thank you, ${arr[i]}, for the wonderful ${name} gift!`)
      };
    return messages;
  }

function countDown(int) {
    while (int >= 0) {
        console.log(int)
        int = int - 1
    };
};