const getter1 = <T>(data: T): T => {
  return data;
};
function getter2<T>(data: T): T {
  return data;
}
// errors
// getter2(12).length;
// getter1<number>(10).length;

getter1<string>("10").length;

class Car<TId, TMark, TDate extends Date> {
  constructor(public id: TId, public mark: TMark, public date: TDate) {}
  getDataCar(): void {
    console.log(this.id, this.mark, this.date);
  }
}

const audi = new Car(234565454, "audi", new Date());
audi.getDataCar();
