class Car {
    brand: string;
    speed: number;
    price: number;

    getName(): string {
        return this.brand;
    };

    getSpeed(): number {
        return this.speed;
    }

    getPrice(): number {
        console.log(`${ this.brand } berjalan`);
        return this.price;
    }
    
    move(): void {
        console.log(`${ this.brand } berjalan dengan kencang`);
    };
}

const ferrari = new Car();
ferrari.brand = 'Ferrari';
ferrari.speed = 220;
ferrari.price = 1000000;

console.log(ferrari.getSpeed());
ferrari.move();
console.log(ferrari.price);