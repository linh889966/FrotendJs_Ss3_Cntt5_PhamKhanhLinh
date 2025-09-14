function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 được thực thi");
        callback();
    }, 1000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 được thực thi");
        callback();
    }, 1500);
}

function task3(callback) {
    setTimeout(() => {
        console.log("Task 3 được thực thi! Hoàn thành");
        if (callback) callback();
    }, 2000);
}

task1(() => {
    task2(() => {
        task3();
    });
});
