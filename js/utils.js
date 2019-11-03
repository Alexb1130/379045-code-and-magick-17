class Utils {
  generateRandomInt(min, max) {
    const length = max - min + 1;
    return Math.floor(Math.random() * length + min);
  }

  getRandomIndexArr(arr) {
    return this.generateRandomInt(0, arr.length - 1);
  }

  getRandomElementArr(arr) {
    return arr[this.getRandomIndexArr(arr)];
  }

  generateRandomArr(arr, number) {
    const arrCopy = arr.concat();
    const randomArr = [];

    for (let i = 0; i < number; i++) {
      randomArr.push(arrCopy.splice(this.getRandomIndexArr(arrCopy), 1)[0]);
    }

    return randomArr;
  }
}

window.utils = new Utils();

