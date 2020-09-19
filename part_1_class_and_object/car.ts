class Car {
    brand: string;
    speed: number;
    price: number;

    getBrand(): string {
        return this.brand;
    };

    getSpeed(): number {
        return this.speed;
    }

    getPrice(): string {
        return `$${ this.price }`;
    }

    getName(): string {
        return this.brand;
    };
    
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