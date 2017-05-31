var upperFn = function(s) {
    return s.toUpperCase();
}
var lowerFn = function(s) {
    return s.toLowerCase();
}
var titleFn = function(s) {
    return s.split(' ').map(w => w.substr(0,1).toUpperCase() + w.substr(1).toLowerCase()).join(' ');
}
var camelFn = function(s) {
    return s.split(/\s/).map(w => w.substr(0,1).toUpperCase() + w.substr(1).toLowerCase()).join('');
}
var snakeFn = function(s) {
    return s.split(/\s+/).map(w => w.toLowerCase()).join('_');
}
var trainFn = function(s) {
    return s.split(/\s+/).map(w => w.toLowerCase()).join('-');
}

var StringTransformDynamicValue = function () {

    this.title = function (context) {
        return "Transform";
    };

    this.text = function (context) {
        return this.input || null;
    };

    this.evaluate = function (context) {
        var input = this.input;
        var transform = this.transform;
        if (transform == 'upper') {
            return upperFn(input);
        }
        else if (transform == 'lower') {
            return lowerFn(input);
        }
        else if (transform == 'title') {
            return titleFn(input);
        }
        else if (transform == 'camel') {
            return camelFn(input);
        }
        else if (transform == 'snake') {
            return snakeFn(input);
        }
        else if (transform == 'train') {
            return trainFn(input);
        }
        return input;
    };
};

StringTransformDynamicValue.identifier = "com.luckymarmot.PawExtensions.StringTransformDynamicValue";
StringTransformDynamicValue.title = "String Transform Dynamic Value";
StringTransformDynamicValue.inputs = [
    InputField("input", "Input", "String"),
    InputField("transform", "Transform", "Select", {
        "choices": {
            "upper": "Upper Case",
            "lower": "Lower Case",
            "title": "Title Case",
            "camel": "Camel Case",
            "snake": "Snake Case",
            "train": "Train Case"
        },
        persisted: true
    })
];

registerDynamicValueClass(StringTransformDynamicValue);
