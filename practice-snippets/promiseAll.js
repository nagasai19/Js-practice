/*  
1)Accepts an collection of promises.
2)Returns an array of promises.
3)rejected even one promise is failed
4)fullfilled only even all promises are resolved.
*/

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('one'), 1000);
  });
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('two'), 2000);
  });
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('three'), 3000);
  });
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('four'), 4000);
  });

const p5 = new Promise((resolve, reject) => {
    reject(new Error('reject'));
  });

const promise1 = Promise.resolve('Promise 1 resolved')

const promise2 = new Promise((resolve, reject) =>
    resolve('Promise3 resolved ')
)
const promise3 = new Promise((resolve, reject) =>
    setTimeout(() =>
        resolve('Promise 4 resolved ')
        , 0)
)

const promise4 = Promise.reject('Promise 4 rejected')

const taskPromisesList = [promise1, promise2, promise3]

const taskPromisesLists = [p1,p2]


function myPromiseAll(list){

    if(list.length ===0 ) return [];
    
    const promisesCompleted = []
    let completedPromiseCount = 0
    return new Promise((resolve, reject) => {
        list.forEach((singlePromise,index) => {
            singlePromise.then((response) => {
                promisesCompleted[index] = response;
                completedPromiseCount++
                if (completedPromiseCount === taskPromisesList.length) {
                    resolve(promisesCompleted)
                }
              })
                .catch((error) => {
                    console.error(error, 'errror')
                })
          })
    })
}

myPromiseAll(taskPromisesList)
  .then((response) => {
      console.log(response);
  })

  .catch((error) => {
      console.log(error);
  })







