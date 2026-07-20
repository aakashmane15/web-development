class Rectangle {
    constructor(height, width, color) {
        this.height = height;
        this.width = width;
        this.color = color;
    }

    area() {
        let result = this.height * this.width;
        console.log("The area is: " + result);
    }

    paint() {
        console.log("The color of the rectangle is: " + this.color);
    }
}

const rect = new Rectangle(2, 4, "Red");
const area = rect.area();
const color = rect.paint();

const rect2 = new Rectangle(1, 2, "Black");
const area2 = rect2.area();
const color2 = rect2.paint();
