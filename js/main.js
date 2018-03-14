const starting_cells = [
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0],
];

function positionIsValid(map, position, cell) {
  const line = map.length;
  const item = map[0].length;
  return (
    !( position.x == cell.x && position.y == cell.y)
    && position.x >= 0
    && position.y >= 0
    && position.x < line
    && position.y < item
  );
}

function getNeighboursAlive(map, cell) {
  const neighbours = [];
  for (let floor = -1; floor < 2; floor++) {
    for (let item = -1; item < 2; item++) {
      const currentPosition = {
        x: cell.x + floor,
        y: cell.y + item,
      };
      if(positionIsValid(map, currentPosition, cell)) {
        let neighbour = map[currentPosition.x][currentPosition.y];
        if(neighbour === 1) {
          neighbours.push(currentPosition);
        }
      }
    } 
  }
  return neighbours;
}

function defineIfItsAlive(cell, neighbours) {
  const cellAlive = neighbours.length;
  if(cellAlive == 0) {
    return false;
  } else if(cellAlive == 2){
    return cell.alive;
  } else if(cellAlive == 3) {
    return true;
  } else if(cellAlive > 3 || cellAlive < 2) {
    return false;
  }
};

function Generate_next_cells(map) {
  let result_map = [];
  map.map((floor, indexFloor) => {
    let newFloor = [];
    floor.map((item, indexItem) => {
      let cell = {
        x: indexFloor,
        y: indexItem,
        alive: !!map[indexFloor][indexItem],
      }
      let neighbours = getNeighboursAlive(map, cell);
      cell.alive = defineIfItsAlive(cell, neighbours);
      newFloor.push(cell.alive ? 1 : 0);
    })
    result_map.push(newFloor);
  });
  return result_map;
}


function showMap(map) {
  console.log('map ////')
  map.map(line => console.log(line));
  console.log('///')
}

function damn() {
}