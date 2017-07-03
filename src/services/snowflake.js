export default class Snowflake {
  constructor(size) {
    this.size = size;
    this.axis = Math.floor(this.size / 2);

    // Step 1: create grid
    this.grid = this.newGrid();

    // Step 2: generate random pattern in quadrant I
    // TODO: Optimize by performing transformations as each cell is generated
    this.generateMaster();

    // Step 3: Reflect quadrant I onto IV, then I & IV onto II & III
    this.reflectQuadrantOneOverXAxis();
    this.reflectYAxis();

    console.log(`Creating new snowflake of size ${this.size}`);
  }

  /**
   * Returns an X by Y grid initialized with all null values
   * @returns {Array}
   */
  newGrid() {
    const grid = [];

    for (let i = 0; i < this.size; i++) {
      const row = [];

      for (let n = 0; n < this.size; n++) {
        row.push(null);
      }

      grid.push(row);
    }

    return grid;
  }

  /**
   * Generates random boolean, returning either true or false
   * @returns {boolean}
   */
  static getRandomBool() {
    const min = Math.ceil(0);
    const max = Math.floor(99);
    return (Math.floor(Math.random() * (max - min)) + min) % 2 === 0;
  }

  /**
   * Perform an action for each coordinate in quadrant I, starting in the top left corner and ending the the rightmost
   * point directly above the X-axis.
   * @param callback
   */
  iterateQuadrantOne(callback) {
    for (let y = 0; y < this.axis; y++) {
      for (let x = this.axis; x < this.size; x++) {
        callback(x, y);
      }
    }
  }

  /**
   * Generate a random pattern in quadrant I
   */
  generateMaster() {
    this.iterateQuadrantOne((x, y) => {
      this.grid[x][y] = Snowflake.getRandomBool();
    });
  }

  /**
   * Reflect quadrant I over X-axis onto quadrant IV
   */
  reflectQuadrantOneOverXAxis() {
    this.iterateQuadrantOne((x, y) => {
      const reflectedY = this.size - y - 1;
      this.grid[x][reflectedY] = this.grid[x][y];
    });
  }

  /**
   * Reflect quadrants I and IV over Y-axis
   */
  reflectYAxis() {
    for(let y = 0; y < this.size; y++) {
      for(let x = this.axis; x < this.size; x++) {
        const reflectedX = this.size - x - 1;
        this.grid[reflectedX][y] = this.grid[x][y];
      }
    }
  }
}