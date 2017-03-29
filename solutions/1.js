//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

//Find the sum of all the multiples of 3 or 5 below 1000.

const _ = require('lodash');
const assert = require('assert');

const TEST_ITERATION = 10;
const SOLUTION_ITERATION = 1000;
const TEST_ANSWER = 23;


function solution(iteration) {
    let answer = 0;
    for (let i = 0; i < iteration; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            answer += i;
        }
    }

    return answer;
}

assert.deepEqual(solution(TEST_ITERATION), 23);
console.log(solution(SOLUTION_ITERATION));
