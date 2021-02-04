class HashTable {
  table: string[][];
  constructor(size = 53) {
    this.table = new Array(size);
  }

  hash(key: string) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.table.length;
    }
    return total;
  }

  set(key: string, value: string) {
    const keyHash = this.hash(key);
    this.table[keyHash] = this.table[keyHash] || [];
    this.table[keyHash].push([key, value]);
  }
  get(key: string) {
    const keyHash = this.hash(key);
    const record = this.table[keyHash];
    if (!record) return null;
    for (let i = 0; i < record.length; i++) {
      if (record[i][0] === key) return record[i][1];
    }
  }
  keys() {
    const keys = [];
    for (let i = 0; i < this.table.length; i++) {
      const record = this.table[i];
      if (record) {
        for (let j = 0; j < record.length; j++) {
          if (!values.includes(record[j][1])) {
            keys.push(record[j][0]);
          }
        }
      }
    }
    return keys;
  }
  values() {
    const values = [];
    for (let i = 0; i < this.table.length; i++) {
      const record = this.table[i];
      if (record) {
        for (let j = 0; j < record.length; j++) {
          if (!values.includes(record[j][1])) {
            values.push(record[j][1]);
          }
        }
      }
    }
    return values;
  }
}

const hashTable = new HashTable();
hashTable.set("foo", "bar");
hashTable.set("foo", "baz");

console.log(hashTable.keys());
