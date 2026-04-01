function Counter() {
    this.count = 0;

    this.add = function(value) {
        this.count = this.count + value;
    };

    this.sub = function(value) {
        this.count -= value;
    };

    this.getCount = function() {
        return this.count;
    }
}

function process() {
    const counter = new Counter();
    console.log(counter.getCount());

    counter.add(5);
    console.log(counter.getCount());

    counter.sub(2);
    console.log(counter.getCount());

    counter.add(10);
    console.log(counter.getCount());

    counter.sub(5);
    console.log(counter.getCount());
}

process()
