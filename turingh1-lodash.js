var turingh1 = function() {
    function chunk(ary, size = 1){
        var result = []
        for (let i = 0; i < ary.length; i+= size) {
            if (i + size > ary.length) {
                result.push(ary.slice(i, ary.length))
                break
            }
            result.push(ary.slice(i,i + size))
        }
        return result
    }
    
    function compact(ary){
        return ary.filter(it => it)
    }

    function difference(array, ...values){
        var arr = values.reduce((res  , cur) => {
            return res.concat(cur)
        })
        var result = array.filter(item => !arr.includes(item))
        return result
    }

    /**
     *
     * @param   {[type]}  array      [array description]
     * @param   {[type]}  ...values  [...values description]
     *
     * @return  {[type]}             [return description]
     */
    function differenceBy(array, ...values) {
        if (Array.isArray( values[values.length - 1] ) == true) {
            return difference(array,...values)
        }
        var val = values.reduce((res  , cur) => {
            return res.concat(cur)
        })
        var iteratee =  val.pop()
        let func = 0
        if (typeof iteratee == 'string' ) {
            func = obj => obj[iteratee]
        }
        if (typeof iteratee == 'function') {
            func = obj => iteratee(obj)
        }
        val = val.map(func)
        return array.filter(item => !val.includes(func(item)))
        
    }

    function drop(array, n = 1) {
        return array.slice(n, array.length)
    }

    function dropRight(array, n = 1) {
        if (n >= array.length) {
            return []
        }
        return array.slice(0, array.length - n)
    }

    function fill(array, value, start = 0, end = array.length) {  
        for (let i = start; i < end; i++) {
            array[i] = value
        }
        return array
    }

    function flatten(array){
        var res = []
        for (const it of array) {
            if (Array.isArray(it)) {
                res.push(...it)
            } else {
                res.push(it)
            }
        }
        return res
    }

    function flattenDeep(ary) {
        var res = []
        for (var item of ary) {
            if (Array.isArray(item)) {//是数组，不断展开
                var flattenItem = flattenDeep(item)
                res.push(...flattenItem)
            } else {//不是，直接push
                res.push(item)
            }
        }
        return res
    }

    function flattenDepth(array, depth = 1){
        if (depth == 0) {
            return array.slice()
        }
        let result = []
        for (const item of array) {
            if (Array.isArray(item)) {
                let flattenedItem = flattenDepth(item, depth - 1)
                result.push(...flattenedItem)
            } else {
                result.push(item)
            }
        }
        return result
    }

    function fromPairs(pairs){
        let result = {}
        if (!pairs) {
            return {}
        }
        for (let i = 0; i < pairs.length; i++) {
            result[pairs[i][0]] = pairs[i][1] 
        }
        return result
    }

    function head(array) {
        if (array == []) {
            return undefined
        }
        return array[0]
    }

    function indexOf(array, value, fromIndex = 0) {
        if (Array.isArray(array)) {
            fromIndex = fromIndex >= 0 ? fromIndex : fromIndex + array.length
            for (let i = fromIndex; i < array.length; i++) {
                if (this.sameZeroValue(array[i],value)) {
                    return i
                }
            }
            return - 1
        }
        return - 1
    }

    function initial(array) {
        if (array == []) {
            return []
        }
        let res = []
        for (let i = 0; i < array.length; i++) {
            res.push(array[i])
        }
        res.pop()
        return res
    }

    function intersection(...arrays) {
        let res = arrays[0].filter(value => arrays.every(arr => arr.includes(value)))
        return res
    }

    function intersectionBy(arr, ...values) {
        let iteratee = values[values.length - 1]
        if (Array.isArray(iteratee)) {
            return intersection(arr, ...values)
        }
        let func = 0
        values.pop()
        if (typeof (iteratee) == 'string') {
            func = obj => obj[iteratee]
        }
        if (typeof(iteratee) == 'function') {
            func = obj => iteratee(obj)
        }
        let val = []
        for (let i = 0; i < values.length; i++) {
            val.push(values[i].map(func))
        }
        return arr.filter(item => val.every(it => it.includes(func(item))))
    }
    function join(arr, separator=',') {
        if (!arr) {
            return 
        }
        let str = arr[0]
        for (let i = 1; i < arr.length; i++) {
            str += String(separator)  + arr[i]
        }
        return str
    }
    function last(array) {
        if (!array) {
            return null
        }
        let res 
        res = array[array.length - 1]
        return res
    }

    function lastIndexOf(array, value, fromIndex=array.length-1) {
        if (isNaN(value)) {
            for (let i = fromIndex; i >= 0; i--) {
                if (isNaN(array[i])) {
                    return i
                }
            }
            return -1
        }
        for (let i = fromIndex; i >= 0; i--) {
            if (array[i] == value) {
                return i
            }
        }
        return -1
    }

    function nth(array, n = 0) {
        if (!array) {
            return 
        }
        let res
        if (n >= 0) {
            res = array[n]
        } else {
            res = array[array.length + n]
        }
        return res
    }

    function pull(array, ...val) {
        let res= []
        for (let i = 0; i < array.length; i++) {
            if (val.indexOf(array[i]) == -1) {
                res.push(array[i])
            }
        }
        return res
    }

    function pullAll(array, val) {
        let res= []
        for (let i = 0; i < array.length; i++) {
            if (val.indexOf(array[i]) == -1) {
                res.push(array[i])
            }
        }
        return res
    }

    function reverse(array) {
        if (!array) {
            return
        }
        let res = []
        for (let i = array.length - 1; i >= 0; i--){
            res.push(array[i])
        }
        return res
    }

    function sortedIndex(array, value) {
        if (!array) {
            return
        }
        let first = 0
        let last = array.length - 1
        let mid
        while(first < last) {
            mid = first + Math.floor((first + last) / 2)
            if (array[mid] <value) {
                first = mid + 1
            } else {
                last = mid
            }
        }
        return first
    }
 
    return {
        // Array
        // ------------------------------------
        chunk,
        compact,
        difference,
        differenceBy,
        drop,
        dropRight,
        fill,
        flatten,
        flattenDeep,
        flattenDepth,
        fromPairs,
        head,
        indexOf,
        initial,
        intersection,
        intersectionBy,
        join,
        last,
        lastIndexOf,
        nth,
        pull,
        pullAll,
        reverse,
        sortedIndex,

    }
} ()