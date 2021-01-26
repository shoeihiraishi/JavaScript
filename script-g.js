//Promiseチェーンの最後に処理を書く
{
const promise = Math.random() < 0.5 ? Promise.resolve() : Promise.reject();
promise.then(() => {
    console.log("Promise#then");
}).catch((error) => {
    console.log("Promise#catch");
}).finally(() => {
    console.log("Promise#finally");
});
}
{
    function dummyFetch(path) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (path.startsWith("/resource")) {
                    resolve({ body: `Response body of ${path}` });
                } else {
                    reject(new Error("NOT FOUND"));
                }
            }, 1000 * Math.random());
        });
    }
    let isLoading = true;
    dummyFetch("/resource/A").then(response => {
        console.log(response);
    }).catch(error => {
        console.error(error);
    }).finally(() => {
        isLoading = false;
        console.log("Promise#finally");
    });
}
{
    function dummyFetch(path) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (path.startsWith("/resource")) {
                    resolve({ body: `Response body of ${path}` });
                } else {
                    reject(new Error("NOT FOUND"));
                }
            }, 1000 * Math.random());
        });
    }
    const results = [];
    dummyFetch("/resource/A").then(response => {
        results.push(response.body);
        return dummyFetch("/resource/B");
    }).then(response => {
        results.push(response.body);
    }).then(() => {
        console.log(results);
    });
}
{
    function delay(timeoutMs) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(timeoutMs);
            }, timeoutMs);
        });
    }
    const promise1 = delay(1);
    const promise2 = delay(2);
    const promise3 = delay(3);
    Promise.all([promise1, promise2, promise3]).then(function(values) {
        console.log(values);
    });
}
{
    function dummyFetch(path) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (path.startsWith("/resource")) {
                    resolve({ body: `Response body of ${path}` });
                } else {
                    reject(new Error("NOT FOUND"));
                }
            }, 1000 * Math.random());
        });
    }

    const fetchedPromise = Promise.all([
        dummyFetch("/resource/A"),
        dummyFetch("/resource/B")
    ]);
    fetchedPromise.then(([responseA, responseB]) => {
        console.log(responseA.body);
        console.log(responseB.body);
    });
}
{
    function dummyFetch(path) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (path.startsWith("/resource")) {
                    resolve({ body: `Response body of ${path}` });
                } else {
                    reject(new Error("NOT FOUND"));
                }
            }, 1000 * Math.random());
        });
    }
    const fetchedPromise = Promise.all([
        dummyFetch("/resource/A"),
        dummyFetch("/not_found/B")
    ]);
    fetchedPromise.then(([responseA, responseB]) => {
    }).catch(error => {
        console.error(error);
    });
}
{
    function delay(timeoutMs) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(timeoutMs);
            }, timeoutMs);
        });
    }
    const racePromise = Promise.race([
        delay(1),
        delay(32),
        delay(64),
        delay(128)
    ]);
    racePromise.then(value => {
        console.log(value);
    });
}
{
    function timeout(timeoutMs) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error(`Timeout: ${timeoutMs}ミリ秒経過`));
            }, timeoutMs);
        });
    }
    function dummyFetch(path) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (path.startsWith("/resource")) {
                    resolve({ body: `Response body of ${path}` });
                } else {
                    reject(new Error("NOT FOUND"));
                }
            }, 1000 * Math.random());
        });
    }
    Promise.race([
        dummyFetch("/resource/data"),
        timeout(500),
    ]).then(response => {
        console.log(response.body);
    }).catch(error => {
        console.log(error.message);
    });
}
{
    async function doAsync() {
        return "値";
    }
    doAsync().then(value => {
        console.log(value);
    });
}
{
    function doAsync() {
        return Promise.resolve("値");
    }
    doAsync().then(value => {
        console.log(value);
    });
}
{
    async function resolveFn() {
        return "返り値";
    }
    resolveFn().then(value => {
        console.log(value);
    });
    async function rejectFn() {
        return Promise.reject(new Error("エラーメッセージ"));
    }
    rejectFn().catch(error => {
        console.log(error.message);
    });
    async function exceptionFn() {
        throw new Error("例外が発生しました");
    }
    exceptionFn().catch(error => {
        console.log(error.message);
    });
}
{
    async function asyncMain() {
        await Promiseインスタンス;
    }
}
{
    async function asyncMain() {
        await Promiseインスタンス;
    }
}
{
    function asyncMain() {
        return Promise.resolve(42).then(value => {
            console.log(value);
        });
    }
    asyncMain();
}
{
    async function asyncMain() {
        const value = await Promise.reject(new Error("エラーメッセージ"));
    }
    asyncMain().catch(error => {
        console.log(error.message);
    });
}
{
    async function asyncMain() {
        try {
            const value = await Promise.reject(new Error("エラーメッセージ"));
        } catch (error) {
            console.log(error.message);
        }
    }
    asyncMain().catch(error => {
    });
}
{
    function dummyFetch(path) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (path.startsWith("/resource")) {
                    resolve({ body: `Response body of ${path}` });
                } else {
                    reject(new Error("NOT FOUND"));
                }
            }, 1000 * Math.random());
        });
    }
    function fetchAB() {
        const results = [];
        return dummyFetch("/resource/A").then(response => {
            results.push(response.body);
            return dummyFetch("/resource/B");
        }).then(response => {
            results.push(response.body);
            return results;
        });
    }
    fetchAB().then((results) => {
        console.log(results);
    });
}
{
    function dummyFetch(path) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (path.startsWith("/resource")) {
                    resolve({ body: `Response body of ${path}` });
                } else {
                    reject(new Error("NOT FOUND"));
                }
            }, 1000 * Math.random());
        });
    }
    async function fetchAB() {
        const results = [];
        const responseA = await dummyFetch("/resource/A");
        results.push(responseA.body);
        const responseB = await dummyFetch("/resource/B");
        results.push(responseB.body);
        return results;
    }
    fetchAB().then((results) => {
        console.log(results);
    });
}
{
    function dummyFetch(path) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (path.startsWith("/resource")) {
                    resolve({ body: `Response body of ${path}` });
                } else {
                    reject(new Error("NOT FOUND"));
                }
            }, 1000 * Math.random());
        });
    }
    {
        async function fetchResources(resources) {
            const results = [];
            for (let i = 0; i < resources.length; i++) {
                const resource = resources[i];
                const response = await dummyFetch(resource);
                results.push(response.body);
            }
            return results;
        }
        const resources = [
            "/resource/A",
            "/resource/B"
        ];
    }
}
{
    async function asyncMain() {
    await new Promise((resolve) => {
        setTimeout(resolve, 16);
    });
}
console.log("1. asyncMain関数を呼び出します");
asyncMain().then(() => {
    console.log("3. asyncMain関数が完了しました");
});
console.log("2. asyncMain関数外では、次の行が同期的に呼び出される");
}
{
    function dummyFetch(path) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (path.startsWith("/resource")) {
                    resolve({ body: `Response body of ${path}` });
                } else {
                    reject(new Error("NOT FOUND"));
                }
            }, 1000 * Math.random());
        });
    }
    async function fetchResources(resources) {
        const results = [];
        resources.forEach(async function(resource) {
            const response = await dummyFetch(resource);
            results.push(response.body);
        });
        return results;
    }
    const resources = ["/resource/A", "/resource/B"];
    fetchResources(resources).then((results) => {
        console.log(results);
    });
}
{
    function dummyFetch(path) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (path.startsWith("/resource")) {
                    resolve({ body: `Response body of ${path}` });
                } else {
                    reject(new Error("NOT FOUND"));
                }
            }, 1000 * Math.random());
        });
    }
    async function fetchResources(resources) {
        const results = [];
        resources.forEach(async function(resource) {
            const response = await dummyFetch(resource);
            results.push(response.body);
        });
        return results;
    }
    const resources = ["/resource/A", "/resource/B"];
    fetchResources(resources).then((results) => {
        console.log(results);
    });
}
//Map Set
{
    const map = new Map();
    console.log(map.size);
}
{
    const map = new Map([["key1", "value1"], ["key2", "value2"]]);
    console.log(map.size);
}
{
    const map = new Map();
    map.set("key", "value1");
    console.log(map.size);
    console.log(map.get("key"));
    map.set("key", "value2");
    console.log(map.get("key"));
    console.log(map.has("key"));
    console.log(map.has("foo"));
}
{
    const map = new Map();
    map.set("key1", "value1");
    map.set("key2", "value2");
    console.log(map.size);
    map.delete("key1");
    console.log(map.size);
    map.clear();
    console.log(map.size);
}
{
    const map = new Map([["key1", "value1"], ["key2", "value2"]]);
    const results = [];
    map.forEach((value, key) => {
    results.push(`${key}:${value}`);
    });
    console.log(results);
}
{
    const map = new Map([["key1", "value1"], ["key2", "value2"]]);
    const keys = [];
    for (const key of map.keys()) {
        keys.push(key);
    }
    console.log(keys);
    const keysArray = Array.from(map.keys());
    console.log(keysArray);
}
{
    const map = new Map([["key1", "value1"], ["key2", "value2"]]);
    const entries = [];
    for (const [key, value] of map.entries()) {
        entries.push(`${key}:${value}`);
    }
    console.log(entries);
}
{
    const map = new Map([["key1", "value1"], ["key2", "value2"]]);
    const results = [];
    for (const [key, value] of map) {
        results.push(`${key}:${value}`);
    }
    console.log(results);
}
{
    const map = {};
    function has(key) {
    return typeof map[key] !== "undefined";
}
    console.log(has("foo"));
    console.log(has("constructor"));
}
{
    class ShoppingCart {
        constructor() {
            this.items = new Map();
        }
        addItem(item) {
            const count = this.items.get(item) ?? 0;
            this.items.set(item, count + 1);
        }
        getTotalPrice() {
            return Array.from(this.items).reduce((total, [item, count]) => {
                return total + item.price * count;
            }, 0);
        }
        toString() {
            return Array.from(this.items).map(([item, count]) => {
                return `${item.name}:${count}`;
            }).join(",");
        }
    }
    const shoppingCart = new ShoppingCart();
    const shopItems = [
        { name: "みかん", price: 100 },
        { name: "リンゴ", price: 200 },
    ];
    shoppingCart.addItem(shopItems[0]);
    shoppingCart.addItem(shopItems[0]);
    shoppingCart.addItem(shopItems[1]);
    console.log(shoppingCart.getTotalPrice());
    console.log(shoppingCart.toString());
}
{
    function sendPOSTRequest(url, data) {
        const httpRequest = new XMLHttpRequest();
        httpRequest.setRequestHeader("Content-Type", "application/json");
        httpRequest.send(JSON.stringify(data));
        httpRequest.open("POST", url);
    }
    function onLoginFormSubmit(event) {
        const form = event.target;
        const data = {
            userName: form.elements.userName,
            password: form.elements.password,
        };
        sendPOSTRequest("/api/login", data);
    }
}
{
    const listenersMap = new WeakMap();

    class EventEmitter {
        addListener(listener) {
        const listeners = listenersMap.get(this) ?? [];
        const newListeners = listeners.concat(listener);
        listenersMap.set(this, newListeners);
    }
}


    let eventEmitter = new EventEmitter();
    eventEmitter.addListener(() => {
    console.log("イベントが発火しました");
});
    eventEmitter = null;
}
{
    const map = new Map();
    map.set(NaN, "value");
    console.log(NaN === NaN);
    console.log(map.has(NaN));
    console.log(map.get(NaN));
}
{
    const set = new Set(["value1", "value2", "value2"]);
    console.log(set.size);
}
{
    const set = new Set();
    set.add("a");
    console.log(set.size);
    set.add("a");
    console.log(set.size);
    console.log(set.has("a"));
    console.log(set.has("b"));
}
{
    const set = new Set();
    set.add("a");
    set.add("b");
    console.log(set.size); // => 2
    set.delete("a");
    console.log(set.size); // => 1
    set.clear();
    console.log(set.size);
}
{
    const set = new Set(["a", "b"]);
    const results = [];
    set.forEach((value) => {
        results.push(value);
    });
    console.log(results);
}
{
    const set = new Set(["a", "b"]);
    const keysResults = [];
    for (const value of set.keys()) {
        keysResults.push(value);
}
    console.log(keysResults);
    const entryResults = [];
    for (const entry of set.entries()) {
        entryResults.push(entry);
    }
    console.log(entryResults);
}
{
    const set = new Set(["a", "b"]);
    const results = [];
    for (const value of set) {
        results.push(value);
    }
    console.log(results);
}
//Jason
{
    const json = '{ "id": 1, "name": "js-primer" }';
    const obj = JSON.parse(json);
    console.log(obj.id); // => 1
    console.log(obj.name);
}
{
    const json = "[1, 2, 3]";
    console.log(JSON.parse(json));
}
{
    const userInput = "not json value";
try {
    const json = JSON.parse(userInput);
} catch (error) {
    console.log("パースできませんでした");
}
    const obj = { id: 1, name: "js-primer", bio: null };
    console.log(JSON.stringify(obj));
}
{
    const obj = { id: 1, name: "js-primer", bio: null };
    const replacer = (key, value) => {
        if (value === null) {
            return undefined;
        }
        return value;
    };
    console.log(JSON.stringify(obj, replacer));
}
{
    const obj = { id: 1, name: "js-primer", bio: null };
    const replacer = ["id", "name"];
    console.log(JSON.stringify(obj, replacer));
}
{
    const obj = { id: 1, name: "js-primer" };
    console.log(JSON.stringify(obj, null, 2));
}
{
    const obj = { id: 1, name: "js-primer" };
    console.log(JSON.stringify(obj, null, "\t"));
}
{
    console.log(JSON.stringify({ x: function() {} }));
    console.log(JSON.stringify({ x: Symbol("") }));
    console.log(JSON.stringify({ x: undefined }));
    console.log(JSON.stringify({ x: [10, function() {}] }));
    JSON.stringify({ [Symbol("foo")]: "foo" });
    console.log(JSON.stringify({ x: /foo/ }));
    const map = new Map();
    map.set("foo", "foo");
    console.log(JSON.stringify({ x: map }));
}
{
    const obj = {
        foo: "foo",
        toJSON() {
            return "bar";
        }
    };
    console.log(JSON.stringify(obj)); // => '"bar"'
    console.log(JSON.stringify({ x: obj }));
}
{
    const now = new Date();
    console.log(Date.now());
    console.log(now.getTime());
    console.log(now.toISOString());
}
{
    const date = new Date(1136214245999);
    console.log(date.toISOString());
}
{
    const inUTC = new Date("2006-01-02T15:04:05.999Z");
    console.log(inUTC.toISOString());
    const inLocal = new Date("2006-01-02T15:04:05.999");
    console.log(inLocal.toISOString());
}
{
    const date1 = new Date(2006, 0, 2, 15, 4, 5, 999);
    console.log(date1.toISOString());
    const ms = Date.UTC(2006, 0, 2, 15, 4, 5, 999);
    const date2 = new Date(ms);
    console.log(date2.toISOString());
}
{
    const invalid = new Date("");
    console.log(invalid.getTime()); // => NaN
    console.log(invalid.toString());
}
{
    function formatDate(date) {
        const yyyy = String(date.getFullYear());
        const mm = String(date.getMonth() + 1).padStart(2, "0");
        const dd = String(date.getDate()).padStart(2, "0");
        return `${yyyy}/${mm}/${dd}`;
    }
    const date = new Date("2006-01-02T15:04:05.999");
    console.log(formatDate(date));
}
{
    const now = new Date();
    const timezoneOffsetInHours = now.getTimezoneOffset() / 60;
    console.log(`Hours in UTC: ${now.getHours() + timezoneOffsetInHours}`);
}
{
    const now = moment();
    const future = now.add(10, "minutes");
    console.log(future.format("YYYY/MM/DD"));
}
{
    const rad90 = Math.PI * 90 / 180;
    const sin90 = Math.sin(rad90);
    console.log(sin90);
}
{
    for (let i = 0; i < 5; i++) {
        console.log(Math.random());
    }
}
{
    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }
    console.log(getRandom(1, 5));
}
{
    onsole.log(Math.max(1, 10));
    console.log(Math.min(1, 10));
}
{
    const numbers = [1, 2, 3, 4, 5];
    console.log(Math.max(...numbers));
    console.log(Math.min(...numbers));
}
{
    console.log(Math.floor(1.3));
    console.log(Math.floor(-1.3));
    console.log(Math.ceil(1.3));
    console.log(Math.ceil(-1.3));
    console.log(Math.round(1.3));
    console.log(Math.round(1.6));
    console.log(Math.round(-1.3));
}