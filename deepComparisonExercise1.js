function deepEqual(obj1, obj2)
{
    var truefalse = true;
    var type1 = typeof obj1;
    var type2 = typeof obj2;
    if(type1 == 'object' && type2 == 'object')
    {
        var prop1 = [];
        var prop2 = [];
        for(var prop in obj1)
            prop1.push(prop);
        for(var prop in obj2)
            prop2.push(prop); 
        if(prop1.length == prop2.length)
        {
            var indexArray = [];
            for(var i = 0; i < prop1.length; i++)
            {
                var index = prop2.indexOf(prop1[i]);
                indexArray.push(index);
            };
            if(indexArray.indexOf(-1) == -1)
                {
                    for(var event in obj1)
                    {
                        if(deepEqual(obj1[event], obj2[event]) == false)
                            return false
                    };
                }
            else
                truefalse = false;
        }
        else
            truefalse = false;
    }
    else
        truefalse = (obj1 === obj2);
    return truefalse;
}
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));