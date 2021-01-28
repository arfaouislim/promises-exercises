/**
 *
 * EXERCISE 1
 *
 * @param {*} promise
 * @param {*} transformer
 * @returns {Promise}
 */
function mapPromise(promise, transformer) {
  return promise
    .then((result) => transformer(result))
    .then((value) => Promise.resolve(value))
    .catch((error) => Promise.reject(error));
}

/**
 *
 * EXERCISE 2
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise) {
  return new Promise((resolve, reject) => {
    numberPromise
      .then((value) => {
        if (!isNaN(value)) return resolve(value ** 2);
        else return reject("Cannot convert 'abc' to a number!");
      })
      .catch((error) => {
        return reject(error);
      });
  });
}

/**
 * EXERCISE 3
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise) {
  return squarePromise(promise)
    .catch(() => 0)
    .catch((error) => reject(error));
}

/**
 * EXERCISE 4
 *
 * @param {Promise} promise
 * @returns {Promise}
 */
function switcheroo(promise) {
  return new Promise((resolve, reject) => {
    promise.then((value) => reject(value)).catch((error) => resolve(error));
  });
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};
