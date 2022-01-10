// Configuración
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Cambia solo el código debajo de esta línea
function updateRecords(records, id, prop, value) {
  if (prop != "tracks" && value != "") {
    records[id][prop] = value;
  }
  else if (prop == "tracks") {
    if (!records[id].hasOwnProperty("tracks")) {
      records[id][prop] = [];
    }
    if (value.length > 0) {
      records[id][prop].push(value);
    }
  }
  if (value.length == 0) {
    delete records[id][prop];
  }
  return records;
}

/* console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA')); */
// console.log(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"))
// console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"))o
console.log(updateRecords(recordCollection, 2548, "artist", ""));

