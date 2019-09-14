// 1. Copy and paste your prototype in here and refactor into class syntax.


// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
class CuboidMaker1{ //added a a1 to the end of the name to avoid conflicts with the other part of the sprint.

  constructor(data){
    this.length = data.length;
    this.width = data.width;
    this.height = data.height;
  }

  volume(){
    return (this.length * this.width * this.height);
  }

  surfaceArea(){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}


const cuboid1 = new CuboidMaker1({ //added a 1 at the end of the item to avoid naming conflicts with the other assignment.
  length: 4,
  width: 5,
  height: 5

});



// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid1.volume()); // 100
 console.log(cuboid1.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker1{
  constructor(data){
    super(data);
  }

  cubeVolume(){
    return (Math.pow(this.length, 3));
  }

  cubeSurfArea(){
    return (6*(Math.pow(this.length, 2)));
  }

}

const cube = new CubeMaker({ //new cube.. remember a cube has same size all the way around there's probably a better way to make this user error proof but for this.. this will work.
  length: 12,
  width: 12,
  height: 12
});

console.log(cube.cubeVolume()); //1728
console.log(cube.cubeSurfArea()); //864
