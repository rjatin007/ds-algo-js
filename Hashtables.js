class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }
  get(key) {
    const address = this._hash(key);
    if (!this.data[address]) {
      return null;
    }
    return this.data[address].filter((item) => item[0] === key)[0][1];
  }
  keys() {
    return this.data.reduce((acc, curr) => {
      curr.forEach((element) => {
        acc.push(element[0]);
      });
      return acc;
    }, []);
  }
}

const myHashTable = new HashTable(2);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 9);

console.log(myHashTable.get("grapes"));
console.log(myHashTable.get("apples"));
console.log(myHashTable.keys());
