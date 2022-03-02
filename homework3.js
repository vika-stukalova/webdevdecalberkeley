function max(iterable, key) {
    var maximum = 0;
    for (var i in iterable) {
      var current = key(i);
      if (current >= maximum) {
        maximum = current;
      }
    }
    return maximum;
  }

const reverser = max(iterable, min);

function changer(object, key, value) {
    var object = object;
    if (Array.isArray(prev)) {
      object.append(value);
    } else if (typeof prev == 'object' && prev != null) {
      object = object.put(key, value);
    } else {
      object = object.next;
    }
    return null;
  }

  async function promise_me(truthy) {
    const a = new Promise((resolve, reject) => {
        console.log(0)
        console.log(1)
    })
    console.log(2)
    console.log(3)
    console.log(4)
    const five = 5
    console.log(five)
    return five
}