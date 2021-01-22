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
fetchResources(resources).then((results) => {
    console.log(results);
}
