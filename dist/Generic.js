const getter1 = (data) => {
    return data;
};
function getter2(data) {
    return data;
}
getter1("10").length;
class Car {
    constructor(id, mark, date) {
        this.id = id;
        this.mark = mark;
        this.date = date;
    }
    getDataCar() {
        console.log(this.id, this.mark, this.date);
    }
}
const audi = new Car(234565454, "audi", new Date());
audi.getDataCar();
//# sourceMappingURL=Generic.js.map