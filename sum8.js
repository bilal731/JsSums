//Cuboid surface area & volume
class cuboid{
    constructor(width, height, lenght) {
        this.width = width;
        this.height = height;
        this.lenght = lenght;
    }
    area() {
        return (2*(this.lenght*this.width) + 2*(this.lenght*this.height) + 2*(this.height*this.width));
    }
    volume() {
        return (this.height*this.lenght*this.width);
    }
}

let cub1 = new cuboid(10, 30, 50);

console.log(cub1.area());
console.log(cub1.volume());