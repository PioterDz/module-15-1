function Phone(brand, price, color, resolution, battery) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.resolution = resolution;
    this.battery = battery;
}


Phone.prototype.getWarrantyCost = function() {
    return this.price * 0.1;
}

Phone.prototype.printInfo = function() {

    console.log('The phone brand is ' + this.brand + ', the color is ' + this.color + ', and the price is ' + this.price);
    console.log('The resolution is ' + this.resolution + 'and battery is ' + this.battery);
   
    console.log('The warranty cost is ' + this.getWarrantyCost());
}



var GalaxyS6 = new Phone('samsung', 200, 'black', '5,1', '2550mAh');
var iPhone6S = new Phone('apple', 250, 'white', '4,7', '1715mAh');
var OnePlusOne = new Phone('one', 150, 'wood', '5,5', '3100mAh');


OnePlusOne.printInfo();
GalaxyS6.printInfo();
iPhone6S.printInfo();
