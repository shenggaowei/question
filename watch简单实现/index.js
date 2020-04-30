function Watch(){
    this.map = {};
}

Watch.prototype.on = function(name, cb){
    this.map[name] = cb;
}

Watch.prototype.emit = function(name, data){
    const func = this.map[name]
    let result = {};
    if (func) {
        result = func(data);
    }
    return result;
}

Watch.prototype.off = function(name){
    const ifHasFunc = this.map[name];
    if (ifHasFunc) {
        Object.assign(this.map, {[name]: undefined});
    }
}

Watch.prototype.once = function(name, data) {
    let result = this.emit(name, data);
    this.off(name);
    return result;
}

