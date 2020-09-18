export class Car {
    protected brand: string;
    private speed: number;
    private price: number;

    constructor(brand: string, speed: number, price: number) {
        this.brand = brand;
        this.speed = speed;
        this.price = price;
    }

    setName(brand: string): void {
        this.brand = brand;
    };

    getName(): string {
        return this.brand;
    };

    setSpeed(speed: number): void {
        this.speed = speed;
    };

    getSpeed(): number {
        return this.speed;
    }

    setPrice(price: number): void {
        this.price = price;
    };

    getPrice(): string {
        return `$${ this.price }`;
    }
    
    move(): void {
        console.log(`${ this.brand } berjalan dengan kencang`);
    };
}